import React from "react";
import DashboardTopNav from "../../components/dashboardtopNav";
import DashboardNav from "../../components/dashboardNav";
import "../../assets/css/billing.css";
import CardFront from "../../components/cardFront";
import CardBack from "../../components/cardBack";
import PaymentMethod from "../../components/payment-method";
import Bill from "../../components/bill";
import Invoice from "../../components/invoice";
import Transaction from "../../components/transaction";
import { useEffect,useState } from "react";
import Loading from "../../components/loading";


export default function Billing() {

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (localStorage.getItem("login")) {
      setIsLoading(false);

      const jwt = JSON.parse(localStorage.getItem("login"));
      const token = jwt.token;
      const jwtpayload = JSON.parse(window.atob(token.split('.')[1]))
      if (jwtpayload.exp * 1000 < Date.now()) {
      setIsLoading(false);

        console.log("Token expired");
        localStorage.removeItem("login");
        window.location.href = "/signIn";
      }
  
    }
    else {
      window.location.href = "/signIn";
    }
  },[localStorage.getItem("login")])

  return (
    isLoading ? <Loading/>:

    <div className="billing-main-container">
      <div className="left-nav">
        <DashboardTopNav page="Billing" />
      </div>
      <div className="top-nav">
        <DashboardNav />
      </div>
      <div className="billing-content-container">
        <div className="left">
          <div className="card">
            <div className="card-front">
              <CardFront />
            </div>
            <div className="card-back">
              <CardBack />
            </div>
          </div>
          <div className="payment-method">
            <div className="top-section">
              <h1>Payment Method</h1>
              <button>ADD A NEW CARD</button>
            </div>
            <div className="bottom-section">
              <PaymentMethod
                img={`data:image/svg+xml,%3Csvg width='21' height='15' viewBox='0 0 21 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6.63158' cy='7.49999' r='6.63158' fill='%23EB001B'/%3E%3Ccircle cx='14.3685' cy='7.49999' r='6.63158' fill='%23F79E1B'/%3E%3C/svg%3E`}
                cardNumber={`7812 2139 0823 XXXX`}
              />
              <PaymentMethod
                img={`data:image/svg+xml,%3Csvg width='25' height='9' viewBox='0 0 25 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.6708 2.96349C12.6568 4.15055 13.653 4.81298 14.4034 5.20684C15.1744 5.61099 15.4333 5.87013 15.4304 6.23147C15.4245 6.78459 14.8153 7.02862 14.2452 7.03812C13.2505 7.05475 12.6723 6.74889 12.2125 6.51753L11.8542 8.32341C12.3155 8.55247 13.1696 8.75217 14.0554 8.76087C16.1345 8.76087 17.4947 7.65543 17.5021 5.94145C17.5102 3.76625 14.7087 3.64579 14.7278 2.67348C14.7344 2.37871 14.9956 2.06408 15.568 1.98406C15.8512 1.94368 16.6332 1.91274 17.5198 2.35252L17.8677 0.605286C17.391 0.418253 16.7782 0.239136 16.0153 0.239136C14.0583 0.239136 12.6819 1.35962 12.6708 2.96349ZM21.2115 0.389687C20.8319 0.389687 20.5118 0.628245 20.3691 0.99433L17.3991 8.63249H19.4767L19.8901 7.40183H22.429L22.6689 8.63249H24.5L22.9021 0.389687H21.2115ZM21.5021 2.61641L22.1016 5.7116H20.4596L21.5021 2.61641ZM10.1518 0.389687L8.51418 8.63249H10.4939L12.1308 0.389687H10.1518ZM7.22303 0.389687L5.16233 6.00003L4.32878 1.22966C4.23097 0.697187 3.84472 0.389687 3.41579 0.389687H0.0471011L0 0.629037C0.691574 0.790671 1.47729 1.0514 1.95326 1.33033C2.24457 1.50067 2.32775 1.64964 2.42336 2.05458L4.00214 8.63249H6.0945L9.3021 0.389687H7.22303Z' fill='white'/%3E%3C/svg%3E`}
                cardNumber={`7812 2139 0823 XXXX`}
              />
            </div>
          </div>
          <div className="billing-information">
            <div className="top">
              <h1>Billing Information</h1>
            </div>
            <Bill
              name={`Oliver Liam`}
              companyName={`Viking Burrito`}
              email={`oliver@burrito.com`}
              vat={`FRB1235476`}
            />
            <Bill
              name={`Oliver Liam`}
              companyName={`Viking Burrito`}
              email={`oliver@burrito.com`}
              vat={`FRB1235476`}
            />
            <Bill
              name={`Oliver Liam`}
              companyName={`Viking Burrito`}
              email={`oliver@burrito.com`}
              vat={`FRB1235476`}
            />
          </div>
        </div>
        <div className="right">
          <div className="invoices">
            <div className="top">
              <h1>Invoices</h1>
              <button>VIEW ALL</button>
            </div>
            <Invoice
              date={`March,01,2020`}
              code={`#MS-415646`}
              price={`$180`}
              link={`/`}
            />
            <Invoice
              date={`February,10,2021`}
              code={`#RV-126749`}
              price={`$250`}
              link={`/`}
            />
            <Invoice
              date={`April,05,2020`}
              code={`#FB-212562`}
              price={`$560`}
              link={`/`}
            />
            <Invoice
              date={`June,25,2019`}
              code={`#QW-103578`}
              price={`$120`}
              link={`/`}
            />
            <Invoice
              date={`March,01,2019`}
              code={`#AR-803481`}
              price={`$300`}
              link={`/`}
            />
          </div>
          <div className="transactions">
            <div className="top">
              <h1>Your Transactions</h1>
              <p>
                <img
                  src="data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.1875 2.34315H2.8125C2.03585 2.34315 1.40625 2.97275 1.40625 3.7494V12.1869C1.40625 12.9636 2.03585 13.5932 2.8125 13.5932H12.1875C12.9641 13.5932 13.5937 12.9636 13.5937 12.1869V3.7494C13.5937 2.97275 12.9641 2.34315 12.1875 2.34315Z' fill='white' stroke='%232D3748' stroke-width='0.75' stroke-linejoin='round'/%3E%3Cpath d='M11.6549 2.34315H3.34512C2.27607 2.34315 1.40625 3.22646 1.40625 4.3119V6.09316H1.875C1.875 5.62441 2.34375 5.15566 2.8125 5.15566H12.1875C12.6562 5.15566 13.125 5.62441 13.125 6.09316H13.5937V4.3119C13.5937 3.22646 12.7239 2.34315 11.6549 2.34315Z' fill='%232D3748'/%3E%3Cpath d='M8.67184 7.49939C9.06017 7.49939 9.37497 7.18459 9.37497 6.79626C9.37497 6.40794 9.06017 6.09314 8.67184 6.09314C8.28352 6.09314 7.96872 6.40794 7.96872 6.79626C7.96872 7.18459 8.28352 7.49939 8.67184 7.49939Z' fill='%232D3748'/%3E%3Cpath d='M11.0156 7.49939C11.4039 7.49939 11.7187 7.18459 11.7187 6.79626C11.7187 6.40794 11.4039 6.09314 11.0156 6.09314C10.6273 6.09314 10.3125 6.40794 10.3125 6.79626C10.3125 7.18459 10.6273 7.49939 11.0156 7.49939Z' fill='%232D3748'/%3E%3Cpath d='M8.67184 9.8427C9.06017 9.8427 9.37497 9.5279 9.37497 9.13957C9.37497 8.75125 9.06017 8.43645 8.67184 8.43645C8.28352 8.43645 7.96872 8.75125 7.96872 9.13957C7.96872 9.5279 8.28352 9.8427 8.67184 9.8427Z' fill='%232D3748'/%3E%3Cpath d='M11.0156 9.8427C11.4039 9.8427 11.7187 9.5279 11.7187 9.13957C11.7187 8.75125 11.4039 8.43645 11.0156 8.43645C10.6273 8.43645 10.3125 8.75125 10.3125 9.13957C10.3125 9.5279 10.6273 9.8427 11.0156 9.8427Z' fill='%232D3748'/%3E%3Cpath d='M3.98437 9.8427C4.3727 9.8427 4.6875 9.5279 4.6875 9.13957C4.6875 8.75125 4.3727 8.43645 3.98437 8.43645C3.59605 8.43645 3.28125 8.75125 3.28125 9.13957C3.28125 9.5279 3.59605 9.8427 3.98437 9.8427Z' fill='%232D3748'/%3E%3Cpath d='M6.32809 9.8427C6.71642 9.8427 7.03122 9.5279 7.03122 9.13957C7.03122 8.75125 6.71642 8.43645 6.32809 8.43645C5.93977 8.43645 5.62497 8.75125 5.62497 9.13957C5.62497 9.5279 5.93977 9.8427 6.32809 9.8427Z' fill='%232D3748'/%3E%3Cpath d='M3.98437 12.1869C4.3727 12.1869 4.6875 11.8721 4.6875 11.4838C4.6875 11.0955 4.3727 10.7807 3.98437 10.7807C3.59605 10.7807 3.28125 11.0955 3.28125 11.4838C3.28125 11.8721 3.59605 12.1869 3.98437 12.1869Z' fill='%232D3748'/%3E%3Cpath d='M6.32809 12.1869C6.71642 12.1869 7.03122 11.8721 7.03122 11.4838C7.03122 11.0955 6.71642 10.7807 6.32809 10.7807C5.93977 10.7807 5.62497 11.0955 5.62497 11.4838C5.62497 11.8721 5.93977 12.1869 6.32809 12.1869Z' fill='%232D3748'/%3E%3Cpath d='M8.67184 12.1869C9.06017 12.1869 9.37497 11.8721 9.37497 11.4838C9.37497 11.0955 9.06017 10.7807 8.67184 10.7807C8.28352 10.7807 7.96872 11.0955 7.96872 11.4838C7.96872 11.8721 8.28352 12.1869 8.67184 12.1869Z' fill='%232D3748'/%3E%3Cpath d='M3.74991 1.40559V2.34309' stroke='%232D3748' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.25 1.40559V2.34309' stroke='%232D3748' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                  alt="calender"
                />{" "}
                23-30 March 2020
              </p>
            </div>
            <div className="newest">
              <p>NEWEST</p>
              <Transaction
                img={`data:image/svg+xml,%3Csvg width='35' height='36' viewBox='0 0 35 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='17.5002' cy='18' r='17' stroke='%23E31A1A'/%3E%3Cpath d='M20.8751 18.2813L17.5001 21.6563L14.1251 18.2813' stroke='%23E31A1A' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.4998 21.1875L17.4998 14.3437' stroke='%23E31A1A' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`}
                name={`Netflix`}
                date={`27 March 2020, at 12:30 PM`}
                amount={`-$2500`}
              />
              <Transaction
                img={`data:image/svg+xml,%3Csvg width='35' height='36' viewBox='0 0 35 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='17.5002' cy='18' r='17' stroke='%2301B574'/%3E%3Cpath d='M14.1252 17.7187L17.5002 14.3437L20.8752 17.7187' stroke='%2301B574' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.5004 14.8125L17.5004 21.6562' stroke='%2301B574' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`}
                name={`Apple`}
                date={`27 March 2020, at 12:30 PM`}
                amount={`+$2500`}
              />
            </div>
            <div className="yesterday">
              <p>Yesterday</p>
              <Transaction
                img={`data:image/svg+xml,%3Csvg width='35' height='36' viewBox='0 0 35 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='17.5002' cy='18' r='17' stroke='%2301B574'/%3E%3Cpath d='M14.1252 17.7187L17.5002 14.3437L20.8752 17.7187' stroke='%2301B574' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.5004 14.8125L17.5004 21.6562' stroke='%2301B574' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`}
                name={`Stripe`}
                date={`26 March 2020, at 13:45 PM`}
                amount={`+$800`}
              />
              <Transaction
                img={`data:image/svg+xml,%3Csvg width='35' height='36' viewBox='0 0 35 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='17.5002' cy='18' r='17' stroke='%2301B574'/%3E%3Cpath d='M14.1252 17.7187L17.5002 14.3437L20.8752 17.7187' stroke='%2301B574' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.5004 14.8125L17.5004 21.6562' stroke='%2301B574' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`}
                name={`HubSpot`}
                date={`26 March 2020, at 12:30 PM`}
                amount={`+$1700`}
              />
              <Transaction
                img={`data:image/svg+xml,%3Csvg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='17.5001' cy='17.5' r='17' stroke='%23A0AEC0'/%3E%3Cg clip-path='url(%23clip0_580_3042)'%3E%3Cpath d='M17.5002 22.75C18.1445 22.75 18.6668 22.2277 18.6668 21.5834C18.6668 20.939 18.1445 20.4167 17.5002 20.4167C16.8558 20.4167 16.3335 20.939 16.3335 21.5834C16.3335 22.2277 16.8558 22.75 17.5002 22.75Z' fill='%23A0AEC0'/%3E%3Cpath d='M17.5002 12.25C16.8585 12.25 16.3335 12.775 16.3335 13.4167V18.0834C16.3335 18.725 16.8585 19.25 17.5002 19.25C18.1418 19.25 18.6668 18.725 18.6668 18.0834V13.4167C18.6668 12.775 18.1418 12.25 17.5002 12.25Z' fill='%23A0AEC0'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_580_3042'%3E%3Crect width='14' height='14' fill='white' transform='translate(10.5002 10.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E`}
                name={`Webflow`}
                date={`26 March 2020, at 05:00 PM`}
                amount={`Pending`}
              />
              <Transaction
                img={`data:image/svg+xml,%3Csvg width='35' height='36' viewBox='0 0 35 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='17.5002' cy='18' r='17' stroke='%23E31A1A'/%3E%3Cpath d='M20.8751 18.2813L17.5001 21.6563L14.1251 18.2813' stroke='%23E31A1A' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.4998 21.1875L17.4998 14.3437' stroke='%23E31A1A' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`}
                name={`Microsoft`}
                date={`25 March 2020, at 16:30 PM`}
                amount={`-$987`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
