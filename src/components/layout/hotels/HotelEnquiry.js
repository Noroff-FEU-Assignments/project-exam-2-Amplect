import Heading from "../Heading";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../../constants/api";
import { Form, Button } from "react-bootstrap";

function useLocalStorage(key, initialValue) {
  const [storedEnquiry, setStoredEnquiry] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setEnquiry = (enquiry) => {
    try {
      let enquiryData = [];
      const enquiryToStore =
        enquiry instanceof Function ? enquiry(storedEnquiry) : enquiry;
      setStoredEnquiry(enquiryToStore);
      if (typeof window !== "undefined") {
        enquiryData.push(enquiryToStore);
        localStorage.setItem("enquiry", JSON.stringify(enquiryData));
        window.localStorage.setItem(key, JSON.stringify(enquiryToStore));
      }
      if (localStorage.getItem("enquiry")) {
        this.setEnquiry({
          hotel: enquiry.hotelName,
          name: enquiry.name,
          email: enquiry.email,
          doa: enquiry.doa,
          dod: enquiry.dod,
          comment: enquiry.comment,
        });
      } else {
        this.setEnquiry({
          hotel: "",
          name: "",
          email: "",
          doa: "",
          dod: "",
          comment: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedEnquiry, setEnquiry];
}

export default function HotelEnquiry() {
  const [hotelName, setHotelName] = useLocalStorage("hotel", "");
  const [name, setName] = useLocalStorage("name", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [doa, setDoa] = useLocalStorage("doa", "");
  const [dod, setDod] = useLocalStorage("dod", "");
  const [comment, setComment] = useLocalStorage("comment", "");
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
      <Heading title={`Enquiry about ${hotel.attributes.name}`} />
      <Form className="container__form">
        <Form.Control
          type="text"
          placeholder={hotel.attributes.name}
          value={hotel.attributes.name}
          onChange={(e) => setHotelName(e.target.value)}
        />
        <Form.Group
          className="mb-3"
          controlId="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="doa"
          value={doa}
          onChange={(e) => setDoa(e.target.value)}
        >
          <Form.Label>Date of arrival</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your preferred date of arrival"
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="dod"
          value={dod}
          onChange={(e) => setDod(e.target.value)}
        >
          <Form.Label>Date of departure</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your preferred date of departure"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Anything we should know about?</Form.Label>
          <Form.Control
            as="textarea"
            controlId="comment"
            placeholder="(Example: non-carpet floors)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Button
          className="button__form--contact"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
