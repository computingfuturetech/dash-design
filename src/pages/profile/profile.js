import React from "react";
import DashboardTopNav from "../../components/dashboardtopNav";
import DashboardNav from "../../components/dashboardNav";
import profile from "../../assets/images/profile.png";
import more from "../../assets/images/more.png";
import "../../assets/css/profile.css";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import SwitchButton from "../../components/switchButton";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import Project from "../../components/project";
import { useEffect, useState, useRef } from "react";
import Loading from "../../components/loading";
import ProfileSettings from "../../components/profileSettings";
import Billings from "../Billing/billing";
import BillingComponent from "../../components/billingComponent";
import AccountSettings from "../../components/accountSettings";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [billingStyle, setBillingStyle] = useState("none");
  const [accountStyle, setAccountStyle] = useState("none");
  const [profileStyle, setProfileStyle] = useState("block");
  const [profileClass, setProfileClass] = useState("active");
  const [accountClass, setAccountClass] = useState("");
  const [billingClass, setBillingClass] = useState("");

  const handleProfileTap = (e) => {
    setBillingStyle("none");
    setAccountStyle("none");
    setProfileStyle("block");
    setAccountClass("");
    setBillingClass("");
    setProfileClass("active");
  };
  const handleAccountTap = (e) => {
    setBillingStyle("none");
    setAccountStyle("block");
    setProfileStyle("none");
    setProfileClass("");
    setBillingClass("");
    setAccountClass("active");
  };
  const handleBillingTap = (e) => {
    setBillingStyle("block");
    setAccountStyle("none");
    setProfileStyle("none");
    setProfileClass("");
    setAccountClass("");
    setBillingClass("active");
  };

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setIsLoading(false);

      const jwt = JSON.parse(localStorage.getItem("login"));
      const token = jwt.token;
      const jwtpayload = JSON.parse(window.atob(token.split(".")[1]));
      if (jwtpayload.exp * 1000 < Date.now()) {
        setIsLoading(false);
        console.log("Token expired");
        localStorage.removeItem("login");
        window.location.href = "/signIn";
      }
    } else {
      window.location.href = "/signIn";
    }
  }, [localStorage.getItem("login")]);

  const rating = 68;
  return isLoading ? (
    <Loading />
  ) : (
    <div className="profile-main-container">
      <div className="left-nav">
        <DashboardTopNav page="Profile" />
      </div>
      <div className="right-section-profile">
        <div className="top-nav">
          <DashboardNav />
        </div>
        <div className="profile-content-container">
          <div className="top">
            <div className="left">
              <div className="profile-pic">
                <img src={profile} alt="profile-pic" />
              </div>
              <div className="profile-details">
                <h1>Mark Johnson</h1>
                <p>mark@simmmple.com</p>
              </div>
            </div>
            <div className="right">
              <button className={profileClass} onClick={handleProfileTap}>
                Profile Settings
              </button>
              <button className={accountClass} onClick={handleAccountTap}>
                Account Settings
              </button>
              <button className={billingClass} onClick={handleBillingTap}>
                Billing Settings
              </button>
              <div className="dropdown">
                <button className="dropbtn"><img src={more} width={20} alt="" /></button>
                <div className="dropdown-content">
                  <button className={profileClass} onClick={handleProfileTap}>
                    Profile Settings
                  </button>
                  <button className={accountClass} onClick={handleAccountTap}>
                    Account Settings
                  </button>
                  <button className={billingClass} onClick={handleBillingTap}>
                    Billing Settings
                  </button>
                </div>
              </div>
              {/* <a href="/">Account Settings</a> */}
              {/* <a href="/">Billing Settings</a> */}
              {/* <a href="/">Notification Settings</a> */}
            </div>
          </div>
          <div
            className="profile-settings"
            id="profile-settings"
            style={{ display: profileStyle }}
          >
            <ProfileSettings />
          </div>
          {/* <Billings /> */}
          <div
            className="billing-settings"
            id="billing-settings"
            style={{ display: billingStyle }}
          >
            <BillingComponent />
          </div>
          <div
            className="account-settings"
            id="account-settings"
            style={{ display: accountStyle }}
          >
            <AccountSettings />
          </div>
        </div>
      </div>

      {/* <div className="middle">
          <div className="left">
            <div className="left-top">
              <h1>Welcome back!</h1>
              <p>Nice to see you, Mark Johnson!</p>
            </div>
            <div className="left-bottom">
              <a href="/">
                Turn on your car{" "}
                <img
                  src="data:image/svg+xml,%3Csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.80457 2.84619L10.4608 6.50244L6.80457 10.1587' stroke='white' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.953 6.50272H2.53894' stroke='white' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="center">
            <div className="center-top">
              <h1>Car Information</h1>
              <p>Hello, Mark Johnson! Your Car is ready.</p>
            </div>
            <div className="center-container">
              <div className="center-left">
                <div className="cl-top">
                  <Box
                    className="satisfaction-bar-container"
                    id="container"
                    style={{
                      width: 150,
                      height: 150,
                      backgroundColor: "#091133",
                      borderRadius: "140px",
                    }}
                  >
                    <Box
                      sx={{
                        height: 150,
                        width: 150,

                        boxShadow: 26,
                      }}
                    >
                      <CircularProgressbar
                        value={rating}

                        circleRatio={1.0}
                        strokeWidth={6}
                        styles={buildStyles({
                          textColor: "#fff",
                          textSize: "34px",
                          rotation: 0.5,

                          strokeLinecap: "round",

                          pathTransitionDuration: 0.5,


                          pathColor: `#05CD99`,
                          trailColor: "#091133",
                          backgroundColor: "#091133",
                        })}
                      />
                    </Box>
                  </Box>
                </div>
                <div className="center-bottom">
                  <h1>0h 58min</h1>
                  <p>Time to full charge</p>
                </div>
              </div>
              <div className="center-center">
                <div className="details">
                  <div className="left-detail">
                    <p>Battery Health</p>
                    <h1>76%</h1>
                  </div>
                  <div className="right-img">
                    <img
                      src="data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='-0.000488281' width='56' height='56' rx='12' fill='%230075FF'/%3E%3Cg clip-path='url(%23clip0_580_2855)'%3E%3Cpath d='M36.0733 15.345C35.84 14.6567 35.1867 14.1667 34.4167 14.1667H21.5833C20.8133 14.1667 20.1717 14.6567 19.9267 15.345L17.5 22.3334V31.6667C17.5 32.3084 18.025 32.8334 18.6667 32.8334H19.8333C20.475 32.8334 21 32.3084 21 31.6667V30.5H35V31.6667C35 32.3084 35.525 32.8334 36.1667 32.8334H37.3333C37.975 32.8334 38.5 32.3084 38.5 31.6667V22.3334L36.0733 15.345ZM21.9917 16.5H33.9967L35.2567 20.1284H20.7317L21.9917 16.5ZM36.1667 28.1667H19.8333V22.3334H36.1667V28.1667Z' fill='white'/%3E%3Cpath d='M22.75 27C23.7165 27 24.5 26.2165 24.5 25.25C24.5 24.2835 23.7165 23.5 22.75 23.5C21.7835 23.5 21 24.2835 21 25.25C21 26.2165 21.7835 27 22.75 27Z' fill='white'/%3E%3Cpath d='M33.25 27C34.2165 27 35 26.2165 35 25.25C35 24.2835 34.2165 23.5 33.25 23.5C32.2835 23.5 31.5 24.2835 31.5 25.25C31.5 26.2165 32.2835 27 33.25 27Z' fill='white'/%3E%3Cpath d='M22.1667 36.3333H26.8334V34L33.8334 37.5H29.1667V39.8333L22.1667 36.3333Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_580_2855'%3E%3Crect width='28' height='28' fill='white' transform='translate(14 13)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                      alt="health"
                    />
                  </div>
                </div>
                <div className="details">
                  <div className="left-detail">
                    <p>Consumption</p>
                    <h1>163W/km</h1>
                  </div>
                  <div className="right-img">
                    <img
                      src="data:image/svg+xml,%3Csvg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='-0.000488281' width='56' height='56' rx='12' fill='%230075FF'/%3E%3Cpath d='M29.8 16L29.8 25.6L37 25.6L26.2 40L26.2 30.4L19 30.4L29.8 16Z' fill='white'/%3E%3C/svg%3E"
                      alt="health"
                    />
                  </div>
                </div>
              </div>
              <div className="center-right">
                <div className="details">
                  <div className="left-detail">
                    <p>Efficency</p>
                    <h1>+20%</h1>
                  </div>
                  <div className="right-img">
                    <img
                      src="data:image/svg+xml,%3Csvg width='85' height='52' viewBox='0 0 85 52' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.28378 30.8579C4.07973 28.0007 2.59291 28.1436 2 28.5721V51.8571H82.8632V11.1433C81.2213 11.6672 78.7165 13.4064 74.5169 11.1433C70.2753 8.8577 70.0017 12.1434 69.0439 16.7148C68.1746 20.8641 66.0338 17.2863 61.7922 22.0005C58.3822 25.7905 56.8118 10.2863 56.0456 6.28621C55.4983 3.42906 53.4459 2.71484 52.8986 6.28621C52.3514 11.1433 51.9956 20.6291 51.6672 22.0005C51.1541 24.1434 50.072 24.4024 49.2044 23.572C47.5625 22.0005 47.8361 16.4581 47.8361 12.572C47.8361 8.8577 45.7208 8.8577 45.3733 11.1433C44.0051 20.1434 43.8682 33.8488 41.5422 34.0006C39.7909 34.1148 39.2162 30.572 38.2584 27.1437C37.8992 25.8577 36.6166 24.9723 34.9747 27.1437C32.9223 29.858 32.2382 27.4294 32.1014 26.4291C31.9645 25.4287 31.2951 20.1583 31.1436 9.71526C31.0068 0.286704 27.6877 0.715185 27.4493 4.57226C26.6284 17.858 27.5959 35.8576 23.7551 35.8576C21.5659 35.8576 21.5659 31.1326 21.5659 27.2862C21.5659 24.1433 19.7872 23.8576 19.2399 26.4291C18.6926 29.0005 18.2821 32.0008 16.5034 32.0008C14.4329 32.0008 13.7669 28.2862 13.7669 25.4291C13.7669 22.5719 13.4918 19.1527 12.3986 19.0005C10.3463 18.7148 10.6199 28.8576 9.93581 32.0008C9.39343 34.4928 6.78885 34.4293 5.28378 30.8579Z' fill='url(%23paint0_linear_580_2850)'/%3E%3Cpath d='M2 28.5721C2.59291 28.1436 4.07973 28.0007 5.28378 30.8579C6.78885 34.4293 9.39343 34.4928 9.93581 32.0008C10.6199 28.8576 10.3463 18.7148 12.3986 19.0005C13.4918 19.1527 13.7669 22.5719 13.7669 25.4291C13.7669 28.2862 14.4329 32.0008 16.5034 32.0008C18.2821 32.0008 18.6926 29.0005 19.2399 26.4291C19.7872 23.8576 21.5659 24.1433 21.5659 27.2862C21.5659 31.1326 21.5659 35.8576 23.7551 35.8576C27.5959 35.8576 26.6284 17.858 27.4493 4.57226C27.6877 0.715186 31.0068 0.286704 31.1436 9.71526C31.2951 20.1583 31.9645 25.4287 32.1014 26.4291C32.2382 27.4294 32.9223 29.858 34.9747 27.1437C36.6166 24.9723 37.8992 25.8577 38.2584 27.1437C39.2162 30.572 39.7909 34.1148 41.5422 34.0006C43.8682 33.8488 44.0051 20.1434 45.3733 11.1433C45.7208 8.8577 47.8361 8.8577 47.8361 12.572C47.8361 16.4581 47.5625 22.0005 49.2044 23.572C50.072 24.4024 51.1541 24.1434 51.6672 22.0005C51.9956 20.6291 52.3514 11.1433 52.8986 6.28621C53.4459 2.71484 55.4983 3.42906 56.0456 6.28621C56.8118 10.2863 58.3822 25.7905 61.7922 22.0005C66.0338 17.2863 68.1746 20.8641 69.0439 16.7148C70.0017 12.1434 70.2753 8.8577 74.5169 11.1433C78.7165 13.4064 81.2213 11.6672 82.8632 11.1433' stroke='url(%23paint1_linear_580_2850)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_580_2850' x1='42.4316' y1='2' x2='42.4316' y2='51.8571' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2301B574' stop-opacity='0.14'/%3E%3Cstop offset='1' stop-color='%2301B574' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_580_2850' x1='80.5372' y1='11.2857' x2='6.17829' y2='45.2003' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2301B574'/%3E%3Cstop offset='1' stop-color='%2301B574' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                      alt="health"
                    />
                  </div>
                </div>
                <div className="details">
                  <div className="left-detail">
                    <p>This Week</p>
                    <h1>1.342km</h1>
                  </div>
                  <div className="right-img">
                    <img
                      src="data:image/svg+xml,%3Csvg width='85' height='52' viewBox='0 0 85 52' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M79.7162 30.8579C80.9203 28.0007 82.4071 28.1436 83 28.5721V51.8571H2.13683V11.1433C3.77872 11.6672 6.28354 13.4064 10.4831 11.1433C14.7247 8.8577 14.9983 12.1434 15.9561 16.7148C16.8254 20.8641 18.9662 17.2863 23.2078 22.0005C26.6178 25.7905 28.1882 10.2863 28.9544 6.28621C29.5017 3.42906 31.5541 2.71484 32.1014 6.28621C32.6486 11.1433 33.0044 20.6291 33.3328 22.0005C33.8459 24.1434 34.928 24.4024 35.7956 23.572C37.4375 22.0005 37.1639 16.4581 37.1639 12.572C37.1639 8.8577 39.2792 8.8577 39.6267 11.1433C40.9949 20.1434 41.1318 33.8488 43.4578 34.0006C45.2091 34.1148 45.7838 30.572 46.7416 27.1437C47.1008 25.8577 48.3834 24.9723 50.0253 27.1437C52.0777 29.858 52.7618 27.4294 52.8986 26.4291C53.0355 25.4287 53.7049 20.1583 53.8564 9.71526C53.9932 0.286704 57.3123 0.715185 57.5507 4.57226C58.3716 17.858 57.4041 35.8576 61.2449 35.8576C63.4341 35.8576 63.4341 31.1326 63.4341 27.2862C63.4341 24.1433 65.2128 23.8576 65.7601 26.4291C66.3074 29.0005 66.7179 32.0008 68.4966 32.0008C70.5671 32.0008 71.2331 28.2862 71.2331 25.4291C71.2331 22.5719 71.5082 19.1527 72.6014 19.0005C74.6537 18.7148 74.3801 28.8576 75.0642 32.0008C75.6066 34.4928 78.2111 34.4293 79.7162 30.8579Z' fill='url(%23paint0_linear_580_2838)'/%3E%3Cpath d='M83 28.5721C82.4071 28.1436 80.9203 28.0007 79.7162 30.8579C78.2111 34.4293 75.6066 34.4928 75.0642 32.0008C74.3801 28.8576 74.6537 18.7148 72.6014 19.0005C71.5082 19.1527 71.2331 22.5719 71.2331 25.4291C71.2331 28.2862 70.5671 32.0008 68.4966 32.0008C66.7179 32.0008 66.3074 29.0005 65.7601 26.4291C65.2128 23.8576 63.4341 24.1433 63.4341 27.2862C63.4341 31.1326 63.4341 35.8576 61.2449 35.8576C57.4041 35.8576 58.3716 17.858 57.5507 4.57226C57.3123 0.715186 53.9932 0.286704 53.8564 9.71526C53.7049 20.1583 53.0355 25.4287 52.8986 26.4291C52.7618 27.4294 52.0777 29.858 50.0253 27.1437C48.3834 24.9723 47.1008 25.8577 46.7416 27.1437C45.7838 30.572 45.2091 34.1148 43.4578 34.0006C41.1318 33.8488 40.9949 20.1434 39.6267 11.1433C39.2792 8.8577 37.1639 8.8577 37.1639 12.572C37.1639 16.4581 37.4375 22.0005 35.7956 23.572C34.928 24.4024 33.8459 24.1434 33.3328 22.0005C33.0044 20.6291 32.6486 11.1433 32.1014 6.28621C31.5541 2.71484 29.5017 3.42906 28.9544 6.28621C28.1882 10.2863 26.6178 25.7905 23.2078 22.0005C18.9662 17.2863 16.8254 20.8641 15.9561 16.7148C14.9983 12.1434 14.7247 8.8577 10.4831 11.1433C6.28354 13.4064 3.77872 11.6672 2.13682 11.1433' stroke='url(%23paint1_linear_580_2838)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_580_2838' x1='42.5684' y1='2' x2='42.5684' y2='51.8571' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230075FF' stop-opacity='0.14'/%3E%3Cstop offset='1' stop-color='%23582CFF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230075FF' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_580_2838' x1='4.46284' y1='11.2857' x2='78.8217' y2='45.2003' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230075FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230075FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                      alt="health"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h1>Profile Informations</h1>
            <p>
              Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p>
            <hr />
            <p>
              Full Name: <span>Mark Johnson</span>
            </p>
            <p>
              Mobile: <span>(44) 123 1234123</span>
            </p>
            <p>
              Email: <span>mark@simmmple.com</span>
            </p>
            <p>
              Location: <span>United States</span>
            </p>
            <p>Social Media: </p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h1>Platform Settings</h1>
            <h3>ACCOUNT</h3>

            <div className="account-settings">
              <div className="setting">
                <SwitchButton />
                <p>Email me when someone follows me</p>
              </div>
              <div className="setting">
                <SwitchButton />
                <p>Email me when someone answers to...</p>
              </div>
              <div className="setting">
                <SwitchButton />
                <p>Email me when someone mentions me</p>
              </div>
            </div>
            <h3>APPLICATION</h3>
            <div className="application-setting">
            <div className="setting">
                <SwitchButton />
                <p>New launches and projects</p>
              </div>
              <div className="setting">
                <SwitchButton />
                <p>Monthly product updates</p>
              </div>
              <div className="setting">
                <SwitchButton />
                <p>Subscribe to newsletter</p>
              </div>
              <div className="setting">
                <SwitchButton />
                <p>Recieve mails weekly</p>
              </div>
            </div>
          </div>
          <div className="right">
            <h1>Projects</h1>
            <p>Architects design houses</p>
            <div className="projects">
                <Project img={project1} projectNo={1} name={`Modern`} detail={`As Uber works through a huge amount of internal management turmoil.`}/>
                <Project img={project2} projectNo={2} name={`Scandinavian`} detail={`Music is something that every person has his or her own specific opinion about.`}/>
                <Project img={project3} projectNo={3} name={`Minimalist`} detail={`Different people have different taste, and various types of music.`}/>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}
