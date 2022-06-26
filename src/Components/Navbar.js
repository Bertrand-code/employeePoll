import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div className="App-lin">
      <ul>
        <div className="nav">
          <div className="navHome"><li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
</div>
        <div className="navNew"><li>
          <NavLink to="new">New Poll</NavLink>
        </li>
</div>
        <div className="navL"><li>
          <NavLink to="leaderboard">leaderboard</NavLink>
        </li></div>
        
        </div>
       
      </ul>
      <Outlet />
      </div>
    </>
  );
}
