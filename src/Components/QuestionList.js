import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { _getQuestions } from "../db/_DATA";
import Question from "./Question";
function QuestionList({ usersQuestions, userAnswers }) {
  const [data, setData] = useState(null);
  const doneQue = useRef(0);
  const Que = useRef(0);

  useEffect(() => {
    _getQuestions().then((data) => {
      setData(data);
    });
  }, []);
  return (
    data && (

      <div style={{ height: "100vh" },{fontFamily:"Times New Roman"}, {fontSize:"12px"}, {backgroundColor:"#98B4D4 "}}>
        <h1 style={{color:"crimson"},{fontSize:"30px"}}>Questions</h1>
        <span style={{backgroundColor:"red"}}>{Que.current}</span>
        {data &&
          Object.keys(data).map((key) => {
            if (!userAnswers[key]) {
              Que.current++;
              return <Question data={data[key]} key={key} />;
            } else {
              return null;
            }
          })}
        <h1 style={{color:"red"}, {fontSize:"30px"}}>Done</h1>
        <span style={{backgroundColor:"crimson"}}>{doneQue.current}</span>
        {data &&
          Object.keys(data).map((key) => {
            if (userAnswers[key]) {
              doneQue.current++;
              return <Question data={data[key]} key={key} />;
            } else {
              return null;
            }
          })}
      </div>
    )
  );
}
const mapStateToProps = (state) => ({
  usersQuestions: state.questionsStore.questions,
  userAnswers: state.questionsStore.answers,
});

export default connect(mapStateToProps)(QuestionList);
