import React from "react";
import { useState } from "react";
import { saveQuestionAction } from "../Store/questionReducer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function NewPoll({ saveQuestion }) {
  const navigate = useNavigate();
  const [question, setQuestion] = useState({
    optionOne: "",
    optionTwo: "",
  });

  const handleChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveQuestion(question);
    navigate("/");
  };

  return (
    <div className="App-link">
      <form onSubmit={handleSubmit}>
        <div className="option1"> <input
          type="text"
          placeholder="Option One"
          name="optionOne"
          onChange={handleChange}
        />
        <br/></div>
       <div className="option2">   <input
          type="text"
          placeholder="Option Two"
          name="optionTwo"
          onChange={handleChange}
        /></div>
        <button className="btn">Add</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  saveQuestion: saveQuestionAction,
};
export default connect(null, mapDispatchToProps)(NewPoll);
