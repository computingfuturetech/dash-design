import React from "react";
import "../assets/css/transaction.css";

export default function Transaction(props) {
  return (
    <div className="transaction">
      <div className="left">
        <img
          src={props.img}
          alt="img"
        />
        <div className="transaction-info">
          <h1>{props.name}</h1>
          <p>{props.date}</p>
        </div>
      </div>
      <div className="right">
        <p>{props.amount}</p>
      </div>
    </div>
  );
}
