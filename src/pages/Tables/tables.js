import DashboardNav from "../../components/dashboardNav";
import DashboardTopNav from "../../components/dashboardtopNav";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import React from "react";
import "../../assets/css/tables.css";
import AuthorDetails from "../../components/authorDetails";
import ProjectDetails from "../../components/projectDetails";
import { useEffect } from "react";

export default function Tables() {

  useEffect(() => {
    if (localStorage.getItem("login")) {
      const jwt = JSON.parse(localStorage.getItem("login"));
      const token = jwt.token;
      const jwtpayload = JSON.parse(window.atob(token.split('.')[1]))
      if (jwtpayload.exp * 1000 < Date.now()) {
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
    <div className="main-container">
      <div className="left-nav">
        <DashboardTopNav page="Tables" />
      </div>
      <div className="top-nav">
        <DashboardNav />
      </div>
      <div className="table-top">
        <div className="table-content">
          <div className="heading">
            <h1>Authors Table</h1>
          </div>
          <div className="header">
            <p>AUTHOR</p>
            <p>FUNCTION</p>
            <p>STATUS</p>
            <p>EMPLOYED</p>
            <p></p>
          </div>
          <hr />
          <AuthorDetails
            img={img1}
            name="Esthera Jackson"
            email="eshtra@simmmple.com"
            designation="Manager"
            at="Organization"
            status="Online"
            employed="14/06/21"
          />
          <hr />
          <AuthorDetails
            img={img2}
            name="Alexa Liras"
            email="alexa@simmmple.com"
            designation="Programmer"
            at="Developer"
            status="Online"
            employed="14/06/21"
          />
          <hr />
          <AuthorDetails
            img={img3}
            name="Laurent Micheal"
            email="laurent@simmmple.com"
            designation="Executive"
            at="Projects"
            status="Online"
            employed="14/06/21"
          />
          <hr />{" "}
          <AuthorDetails
            img={img4}
            name="Freduardo Hill"
            email="freduardo@simmmple.com"
            designation="Manager"
            at="Organization"
            status="Online"
            employed="14/06/21"
          />
          <hr />
          <AuthorDetails
            img={img5}
            name="Daniel Thomas"
            email="daniel@simmmple.com"
            designation="Programmer"
            at="Developer"
            status="Online"
            employed="14/06/21"
          />
          <hr />
          <AuthorDetails
            img={img6}
            name="Mark Willson"
            email="Mark@simmmple.com"
            designation="Designer"
            at="UI/UX Design"
            status="Online"
            employed="14/06/21"
          />
        </div>
      </div>
      <div className="bottom">
      <div className="last-section-main-container">
      <div className="left-section">
        <div className="table-top">
          <h1>Projects</h1>
          <img
            src="data:image/svg+xml,%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_580_4032)'%3E%3Cpath d='M10.4997 7.16665C11.4163 7.16665 12.1663 6.41665 12.1663 5.49998C12.1663 4.58331 11.4163 3.83331 10.4997 3.83331C9.58301 3.83331 8.83301 4.58331 8.83301 5.49998C8.83301 6.41665 9.58301 7.16665 10.4997 7.16665ZM10.4997 8.83331C9.58301 8.83331 8.83301 9.58331 8.83301 10.5C8.83301 11.4166 9.58301 12.1666 10.4997 12.1666C11.4163 12.1666 12.1663 11.4166 12.1663 10.5C12.1663 9.58331 11.4163 8.83331 10.4997 8.83331ZM10.4997 13.8333C9.58301 13.8333 8.83301 14.5833 8.83301 15.5C8.83301 16.4166 9.58301 17.1666 10.4997 17.1666C11.4163 17.1666 12.1663 16.4166 12.1663 15.5C12.1663 14.5833 11.4163 13.8333 10.4997 13.8333Z' fill='%23A0AEC0'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_580_4032'%3E%3Crect width='20' height='20' fill='white' transform='translate(0.5 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
            alt="more"
          />
        </div>
        <div className="topbottom">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15' fill='none'%3E%3Cpath d='M7.5 1.40607C4.13994 1.40607 1.40625 4.13976 1.40625 7.49982C1.40625 10.8599 4.13994 13.5936 7.5 13.5936C10.8601 13.5936 13.5937 10.8599 13.5937 7.49982C13.5937 4.13976 10.8601 1.40607 7.5 1.40607ZM10.6714 5.45753L6.73389 10.145C6.69069 10.1965 6.63695 10.238 6.57629 10.2669C6.51564 10.2958 6.44949 10.3112 6.38232 10.3123H6.37441C6.30871 10.3123 6.24375 10.2985 6.18374 10.2717C6.12373 10.245 6.07001 10.2059 6.02607 10.157L4.33857 8.28204C4.29572 8.23659 4.26238 8.18302 4.24052 8.1245C4.21866 8.06598 4.20872 8.00367 4.21128 7.94126C4.21384 7.87883 4.22886 7.81756 4.25544 7.76102C4.28202 7.70449 4.31964 7.65383 4.36608 7.61205C4.41251 7.57026 4.46684 7.53817 4.52585 7.51767C4.58487 7.49718 4.64738 7.48869 4.70973 7.4927C4.77207 7.49671 4.83298 7.51314 4.88889 7.54103C4.94479 7.56891 4.99455 7.60769 5.03525 7.65509L6.36211 9.12931L9.95361 4.8546C10.0342 4.76146 10.1482 4.70376 10.2709 4.69398C10.3937 4.6842 10.5153 4.72312 10.6096 4.80233C10.7039 4.88153 10.7633 4.99467 10.7748 5.11727C10.7864 5.23988 10.7492 5.3621 10.6714 5.45753Z' fill='%2301B574'/%3E%3C/svg%3E"
            alt=""
          />
          {/* <ProgressBar value={64} /> */}
          <p>
            30 done <span>this month</span>
          </p>
        </div>
        <div className="table-content">
          <div className="header">
            <p>COMPANIES</p>
            <p>MEMBERS</p>
            <p>BUDGET</p>
            <p>COMPLETION</p>
          </div>
          <hr />
          <ProjectDetails/>
          <hr />
          <ProjectDetails/>
          <hr />
          <ProjectDetails/>
          <hr />
          <ProjectDetails/>
          <hr />
          <ProjectDetails/>
        </div>
      </div>

      </div>
    </div>
    </div>
  );
}
