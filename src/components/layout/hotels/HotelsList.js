import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL, BASE_URL } from "../../../constants/api";

function HotelsList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = API_URL + "?populate=image";

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          const data = json.data;
          console.log(data);

          setHotels(data);
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
        // const imageUrl = {hotel.attributes.image.data.attributes.url};
        // console.log(imageUrl);

        // const imageUrl = BASE_URL + {hotel.attributes.image.data.attributes.url};

        return (
          <div key={hotel.id} className="card__hotel">
            <img
              src="{BASE_URL}
              {hotel.attributes.image.data.attributes.url}"
            ></img>
            <h2>{hotel.attributes.name}</h2>
            <p className="hotel__price">From ${hotel.attributes.price}/night</p>
            <div className="card__hotel--button">
              <Link to={`/hotels/${hotel.id}`}>
                <p>Book now</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HotelsList;
