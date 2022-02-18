import Heading from "../Heading";
import { Form, Button } from "react-bootstrap";
import React, { Component } from "react";

export default class Contact extends Component {
  contactData;
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  componentDidMount() {
    this.contactData = JSON.parse(localStorage.getItem("contact"));
    if (localStorage.getItem("contact")) {
      this.setState({
        name: this.contactData.name,
        email: this.contactData.email,
        message: this.contactData.message,
      });
    } else {
      this.setState({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`contact`, JSON.stringify(nextState));
  }

  render() {
    return (
      // function storeContact() {
      //   let nameInput = document.getElementById("name");
      //   localStorage.setItem("Name", nameInput.value);
      // },
      <>
        <Heading title="Contact" />
        <div className="container__contact">
          <Form className="container__form">
            <Form.Group
              className="mb-3"
              controlId="name"
              value={this.state.name}
              onChange={this.onChangeName}
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            >
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
                value={this.state.message}
                onChange={this.onChangeMessage}
              />
            </Form.Group>
            <Button
              // onclick={storeContact()}
              onSubmit={this.onSubmit}
              className="button__form"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <div className="container__image--contact">
            <img
              className="image__contact"
              src="/images/bergen_winter.jpg"
              alt="Bergen by winter."
            ></img>
          </div>
        </div>
      </>
    );
  }
}
