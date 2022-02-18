import React from "react";
import { Link } from "react-router-dom";

const Suggestions = (props) => {
  const options = props.results.map((r) => (
    <Link key={r.id}>{r.attributes.name}</Link>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
