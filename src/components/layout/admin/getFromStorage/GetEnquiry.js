import React, { Component } from "react";

export default class GetEnquiry extends Component {
  state = {
    name: "",
    email: "",
    doa: "",
    dod: "",
    comment: "",
  };

  componentDidMount() {
    const hotelName = JSON.parse(localStorage.getItem("hotel"));
    const name = JSON.parse(localStorage.getItem("name"));
    const email = JSON.parse(localStorage.getItem("email"));
    const doa = JSON.parse(localStorage.getItem("doa"));
    const dod = JSON.parse(localStorage.getItem("dod"));
    const comment = JSON.parse(localStorage.getItem("comment"));
    this.setState({ hotelName, name, email, doa, dod, comment });
  }

  render() {
    if (this.state.hotelName === null) {
      return (
        <div className="admin__enquiry--info">
          <h2>Hotel enquiry</h2>
          <div className="admin__text">
            <p>No enquiries</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="admin__enquiry--info">
          <h2>Hotel enquiry</h2>
          <div className="admin__text">
            <p>Hotel: {this.state.hotelName}</p>
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <p>Date of arrival: {this.state.doa}</p>
            <p>Date of departure: {this.state.dod}</p>
            <p>Comment: {this.state.comment}</p>
          </div>
        </div>
      );
    }
  }
}
