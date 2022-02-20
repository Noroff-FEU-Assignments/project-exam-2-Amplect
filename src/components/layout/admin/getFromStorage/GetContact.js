import React, { Component } from "react";

export default class GetContact extends Component {
  state = {
    contact: "",
  };

  componentDidMount() {
    const contact = JSON.parse(localStorage.getItem("contact"));
    this.setState({ contact });
    console.log(this.state.contact);
  }

  render() {
    if (this.state.contact === null) {
      return (
        <div className="admin__contact--info">
          <h2>Contact message</h2>
          <div className="admin__text">
            <p>No messages</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="admin__contact--info">
          <h2>Contact message</h2>
          <div className="admin__text">
            <p>Name: {this.state.contact.name}</p>
            <p>Email: {this.state.contact.email}</p>
            <p>Message: {this.state.contact.message}</p>
          </div>
        </div>
      );
    }
  }
}
