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
import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import axios from "axios";

export default function Tables() {
  const [isLoading, setIsLoading] = useState(true);
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadNext, setLoadNext] = useState(false);
  

  useEffect(() => {
    const checkAuthentication = () => {
      console.log("Checking authentication");
      if (!localStorage.getItem("login")) {
        window.location.href = "/signIn";
        return;
      }

      const jwt = JSON.parse(localStorage.getItem("login")).token;
      const jwtpayload = JSON.parse(window.atob(jwt.split(".")[1]));

      if (jwtpayload.exp * 1000 < Date.now()) {
        console.log("Token expired");
        localStorage.removeItem("login");
        window.location.href = "/signIn";
        return;
      }

      // setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    fetchNextPageData();
  }, [currentPage]);

  useEffect(() => {
    if (loadNext && !isLoading) {
      fetchNextPageData();
    }
  }, [loadNext, isLoading]);

  const fetchNextPageData = () => {
    axios
      .get(`http://127.0.0.1:8000/dashboard/property_detail/?page=${currentPage}`)
      .then((res) => {
        if (res.data.apartments && Array.isArray(res.data.apartments)) {
          setPropertyDetails((prevDetails) => [...prevDetails, ...res.data.apartments]);
          setTotalPages(res.data.total_pages);
          setIsLoading(false);
        } else {
          console.error("Invalid data format or missing results:", res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
    if (isBottom && currentPage < totalPages && !isLoading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (isLoading) return;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && currentPage >= totalPages) {
      setLoadNext(true);
    }
  }, [isLoading, currentPage, totalPages]);
  return isLoading ? (
    <Loading />
  ) : (
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
            <h1>Property Details</h1>
          </div>
          <div className="header">
            <p>DETAILS</p>
            <p>PRICE</p>
            <p>STATUS</p>
            <p>LISTING DATE</p>
            <p>COMPLETION</p>
            {/* <p></p> */}
          </div>
          <hr />

          {propertyDetails.map((property, index) => {
            let color = index % 2 === 0 ? "#021A3F" : "#060F2E";
            let cardColor = index % 2 === 0 ? "#060F2E" : "#02193E";

            return (
              <AuthorDetails
                // img={property.image}
                property={property}
                color={color}
                cardColor={cardColor}
              />
            );
          })}
          {loadNext && <p>All data loaded</p>}
        </div>
      </div>
      {/* <div className="bottom">
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
              <ProjectDetails />
              <hr />
              <ProjectDetails />
              <hr />
              <ProjectDetails />
              <hr />
              <ProjectDetails />
              <hr />
              <ProjectDetails />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
