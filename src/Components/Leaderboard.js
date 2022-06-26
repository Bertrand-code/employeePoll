import React from "react";

import { connect } from "react-redux/es/exports";
import { useEffect } from "react";
import { loadLeaderboard } from "../Store/questionReducer";


function Leaderboard({ leaderboard, fetchStat }) {
  useEffect(() => {
    fetchStat();
  }, [fetchStat]);
  return (
    <div className="loginForm">
      {leaderboard &&
        leaderboard.map((stat, idx) => (
          <div>
            <h1>{stat?.id}</h1>
            <span> Answers :{stat.answers}</span>
            <span> Questions :{stat.questions}</span>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  leaderboard: state.questionsStore.leaderboard,
});

const mapDispatchToProps = {
  fetchStat: loadLeaderboard,
};
export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
