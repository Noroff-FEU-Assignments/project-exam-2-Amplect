import React, { Component } from "react";
import { API_URL } from "../../../constants/api";
import axios from "axios";
import Suggestions from "./Suggestions";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  getHotels = () => {
    axios.get(`${API_URL}`).then(({ data }) => {
      this.setState({
        results: data,
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
        <>
          <input
            className="nav__search--input"
            placeholder="Search hotels"
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
          />

          <Suggestions results={this.state.results} />
        </>
      </form>
    );
  }
}

export default Search;
