import React from "react";
import "../assets/css/cardBack.css";

export default function CardBack() {
  return (
    <div className="card-back-container">
      <div className="card-top-balance">
        <div className="top-card">
          <h3>Credit Balance</h3>
          <img
            src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1490_5708)'%3E%3Cpath d='M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1490_5708'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
            alt="more"
          />
        </div>
        <div className="bottom-card">
          <h1>$25,215</h1>
          <img
            src="data:image/svg+xml,%3Csvg width='61' height='20' viewBox='0 0 61 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 8.2C1.70238 11.8 4.5 18.5 11 18C17.5 17.5 18.2786 1 29.6571 1C41.0357 1 41.0357 20.0286 60 3.57143' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
            alt="graph"
          />
        </div>
      </div>
      <div className="card-bottom-info">
        <h1>Newest</h1>
        <div className="info">
          <div className="left">
            <img
              src="data:image/svg+xml,%3Csvg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle opacity='0.08' cx='21' cy='21' r='21' fill='white'/%3E%3Cg clip-path='url(%23clip0_580_2363)'%3E%3Cpath d='M21 16V12H11V30H31V16H21ZM15 28H13V26H15V28ZM15 24H13V22H15V24ZM15 20H13V18H15V20ZM15 16H13V14H15V16ZM19 28H17V26H19V28ZM19 24H17V22H19V24ZM19 20H17V18H19V20ZM19 16H17V14H19V16ZM29 28H21V26H23V24H21V22H23V20H21V18H29V28ZM27 20H25V22H27V20ZM27 24H25V26H27V24Z' fill='%2301B574'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_580_2363'%3E%3Crect width='24' height='24' fill='white' transform='translate(9 9)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
              alt="info"
            />
            <div className="info-text">
              <h3>Bill & Taxes</h3>
              <p>Today, 16:36</p>
            </div>
          </div>
          <div className="amount">
            <h1>-$154.50</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
