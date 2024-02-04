import React from "react";
import "../assets/css/dashboardTopInfo.css";
import { Link } from "react-router-dom";

export default function DashboardTopInfo(props) {
  return (
    <div className="info-container">
      <div className="left-info">
        <p>{props.title}</p>
        <div className="info-stats">
          <h1>{props.amount}</h1>
          <h3>{props.change}</h3>
        </div>
      </div>
      <div className="right-info">
        <Link to='/'>
        {props.icon}

        </Link>
      </div>
    </div>
  );
}
