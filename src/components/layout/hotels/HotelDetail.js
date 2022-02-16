import Heading from "../Heading";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../../constants/api";

export default function HotelDetail() {
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate.push("/hotels");
  }

  const url = API_URL + "/" + id + "?populate=image";

  useEffect(function () {
    async function fetchDetails() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          const details = json.data;
          console.log(details);

          setHotel(details);
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
      <Heading title={hotel.attributes.name} />

      <div className="container__hotel--details">
        <p className="hotel__details--description">
          {hotel.attributes.description}
        </p>
        <img
          className="hotel__details--image"
          src="{hotel.attributes.image.url}"
          alt="Hotel room image"
        ></img>
      </div>
      <p className="hotel__price">From ${hotel.attributes.price}/night</p>
      <div className="card__hotel--button">
        <Link to={`/hotels/${hotel.id}/enquiry`}>
          <p>Ask about a room</p>
        </Link>
      </div>
    </>
  );
}
