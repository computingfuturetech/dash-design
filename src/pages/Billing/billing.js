import React from "react";
import DashboardTopNav from "../../components/dashboardtopNav";
import DashboardNav from "../../components/dashboardNav";
import "../../assets/css/billing.css";
import CardFront from "../../components/cardFront";
export default function Billing() {
  return (
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
                
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
