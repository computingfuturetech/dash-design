import React from 'react'
import "../assets/css/bill.css";

export default function Bill(props) {
  return (
    <div className="bill">
              <div className="top">
                <div className="name">
                  <h1>{props.name}</h1>
                </div>
                <div className="actions">
                  <a className="delete" href="/"><img src="data:image/svg+xml,%3Csvg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_580_3127)'%3E%3Cpath d='M3.75 12.375C3.75 13.0625 4.3125 13.625 5 13.625H10C10.6875 13.625 11.25 13.0625 11.25 12.375V6.125C11.25 5.4375 10.6875 4.875 10 4.875H5C4.3125 4.875 3.75 5.4375 3.75 6.125V12.375ZM11.25 3H9.6875L9.24375 2.55625C9.13125 2.44375 8.96875 2.375 8.80625 2.375H6.19375C6.03125 2.375 5.86875 2.44375 5.75625 2.55625L5.3125 3H3.75C3.40625 3 3.125 3.28125 3.125 3.625C3.125 3.96875 3.40625 4.25 3.75 4.25H11.25C11.5937 4.25 11.875 3.96875 11.875 3.625C11.875 3.28125 11.5937 3 11.25 3Z' fill='%23F53C2B'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_580_3127'%3E%3Crect width='15' height='15' fill='white' transform='translate(0 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" alt="delete" /> DELETE</a>
                  <a href="/"><img src="data:image/svg+xml,%3Csvg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-0.00012207 7.22922V8.74922C-0.00012207 8.88922 0.109878 8.99922 0.249878 8.99922H1.76988C1.83488 8.99922 1.89988 8.97422 1.94488 8.92422L7.40488 3.46922L5.52988 1.59422L0.074878 7.04922C0.024878 7.09922 -0.00012207 7.15922 -0.00012207 7.22922ZM8.85488 2.01922C9.04988 1.82422 9.04988 1.50922 8.85488 1.31422L7.68488 0.144221C7.48988 -0.0507794 7.17488 -0.0507794 6.97988 0.144221L6.06488 1.05922L7.93988 2.93422L8.85488 2.01922V2.01922Z' fill='white'/%3E%3C/svg%3E" alt="edit" /> EDIT</a>
                </div>
              </div>
              <div className="bottom">
                <div className="address">
                  <p>Company Name: {props.companyName}</p>
                </div>
                <div className="email">
                  <p>Email Address: {props.email}</p>
                </div>
                <div className="vat">
                  <p>VAT Number: {props.vat}</p>
                </div>
              </div>
            </div>
  )
}
