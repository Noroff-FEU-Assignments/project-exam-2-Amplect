import Heading from "../Heading";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL, BASE_URL } from "../../../constants/api";

export default function HotelDetail() {
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate.push("/hotels");
  }

  const url = API_URL + "/" + id;

  useEffect(function () {
    async function fetchDetails() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          console.log(json);

          setHotel(json);
        } else {
          setError("An error occurred while fetching this hotel...");
        }
      } catch (error) {
        setError("An error occurred.");
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occurred...</div>;
  }

  return (
    <>
      <Heading title={hotel.name} />

      <div className="container__hotel--details">
        <p className="hotel__details--description">{hotel.description}</p>

        <img
          className="hotel__details--image"
          src={hotel.image[0].url}
          alt="Hotel room image"
        ></img>
      </div>
      <p className="hotel__details--price">From ${hotel.price}/night</p>
      <div className="hotel__details--button">
        <Link to={`/hotels/${hotel.id}/enquiry`}>
          <p>Ask about a room</p>
        </Link>
      </div>
    </>
  );
}
