import React, { Component } from "react";
import { API_URL } from "../../constants/api";
import axios from "axios";
import Suggestions from "./Suggestions";

class Search extends Component {
  state = {
    query: "",
  };

  getHotels = () => {
    axios.get(`${API_URL}`).then(({ data }) => {
      this.setState({
        results: data.data,
      });
      console.log(this.state.results);
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getHotels();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <form>
        {/* {results.map(function (hotel) {
          return ( */}
        <>
          <input
            placeholder="Search hotels"
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <p>{this.state.results}</p>
          {/* <p key={hotel.id}>{hotel.attributes.name}</p> */}
          {/* <Suggestions results={this.state.results} /> */}
        </>
        {/* ); */}
        {/* })} */}
      </form>
    );
  }
}

export default Search;
