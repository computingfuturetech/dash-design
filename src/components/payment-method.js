import React from "react";
import "../assets/css/paymentMethod.css";


export default function PaymentMethod(props) {
  return (
    <div className="payment-card">
      <div className="card-info">
        <img
          src={props.img}
          alt="card"
        />
        <h1>{props.cardNumber}</h1>
      </div>
      <img
        src="data:image/svg+xml,%3Csvg width='12' height='13' viewBox='0 0 12 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_580_3227)'%3E%3Cpath d='M1.50024 9.23V10.75C1.50024 10.89 1.61024 11 1.75024 11H3.27024C3.33524 11 3.40024 10.975 3.44524 10.925L8.90524 5.47L7.03024 3.595L1.57524 9.05C1.52524 9.1 1.50024 9.16 1.50024 9.23ZM10.3552 4.02C10.5502 3.825 10.5502 3.51 10.3552 3.315L9.18524 2.145C8.99024 1.95 8.67524 1.95 8.48024 2.145L7.56524 3.06L9.44024 4.935L10.3552 4.02Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_580_3227'%3E%3Crect width='12' height='12' fill='white' transform='translate(0.000244141 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
        alt="edit"
      />
    </div>
  );
}
