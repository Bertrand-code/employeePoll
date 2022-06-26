import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Question = ({ data }) => {
  const { optionOne, optionTwo } = data;
  return (
    <Link to={data.id}>
      <h1>{optionOne.text + "or" + optionTwo.text}</h1>
    </Link>
  );
};

export default Question;
