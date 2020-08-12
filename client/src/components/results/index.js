import React from "react";

function Results(props) {
  const { image } = props;
  return (
        <li className="list-group-item">
          <img alt="Book" src={image} className="img-fluid" />
        </li>
  );
}

export default Results;