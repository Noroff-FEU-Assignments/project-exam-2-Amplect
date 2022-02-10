import Heading from "../Heading";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../../constants/api";
import { Form, Button } from "react-bootstrap";

export default function HotelEnquiry() {
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
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="doa">
          <Form.Label>Date of arrival</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your preferred date of arrival"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dod">
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
