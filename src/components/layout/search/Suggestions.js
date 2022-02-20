import React from "react";
import { Link } from "react-router-dom";

const Suggestions = (props) => {
  const options = props.results.map((r) => (
    <Link to={`/hotels/${r.id}`} key={r.id}>
      {r.name}
    </Link>
  ));
  return <ul className="nav__search--suggestions">{options}</ul>;
};

export default Suggestions;
