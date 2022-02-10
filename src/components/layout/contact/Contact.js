import Heading from "../Heading";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <Heading title="Contact" />
      <div className="container__contact">
        <Form className="container__form">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Enter message</Form.Label>
            <Form.Control
              as="textarea"
              controlId="message"
              placeholder="Enter message"
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
        <img
          className="image__contact"
          src="/images/bergen_winter.jpg"
          alt="Bergen by winter."
        ></img>
      </div>
    </>
  );
}
