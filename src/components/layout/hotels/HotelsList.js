import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL, BASE_URL } from "../../../constants/api";

function HotelsList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = API_URL;

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          console.log(json);

          setHotels(json);
        } else {
          setError("An error occurred while fetching the hotels...");
        }
      } catch (error) {
        setError("An error occurred.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occurred...</div>;
  }

  return (
    <div className="container__cards">
      {hotels.map(function (hotel) {
        console.log(hotel.image[0].url);

        return (
          <div key={hotel.id} className="card__hotel">
            <img
              className="card__image"
              src={hotel.image[0].url}
              alt="Alt text"
            ></img>
            <h2>{hotel.name}</h2>
            <p className="hotel__price">From ${hotel.price}/night</p>
            <div className="card__hotel--button">
              <Link to={`/hotels/${hotel.id}`}>
                <p>More info</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HotelsList;
