import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getQuestion } from "../db";
import { answerQuestion } from "../Store/questionReducer";
import { connect } from "react-redux";

function QuestionPage({ answerQuestion, answers }) {
  const { question_id } = useParams();
  const [choice, setChoice] = useState(answers[question_id]);
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    getQuestion(question_id).then((question) => {
      setQuestion(question);
    });
  }, [question_id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    answerQuestion(question_id, choice);
  };

  const handleChange = (e) => {
    setChoice(e.target.value);
  };
  return (
    
    question && (
      <div className="question">
        <form onSubmit={handleSubmit}>
          <input
            type="radio"
            name="options"
            id="optionOne"
            value={"optionOne"}
            onChange={handleChange}
            checked={choice === "optionOne"}
          />
          <label htmlFor="optionOne">{question?.optionOne?.text}</label>
          <br />
          <input
            type="radio"
            name="options"
            id="optionTwo"
            value={"optionTwo"}
            onChange={handleChange}
            checked={choice === "optionTwo"}
          />
          <label htmlFor="optionTwo">{question?.optionTwo?.text}</label> <br />
          <button className="btnv">Vote</button>
        </form>
        <Link to="/">
          <button className="btnb">Back</button>
        </Link>
      </div>
    )
  );
}
const mapStateToProps = (state) => {
  return {
    answers: state.questionsStore.answers,
  };
};
const mapDispatchToProps = {
  answerQuestion,
};
export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
