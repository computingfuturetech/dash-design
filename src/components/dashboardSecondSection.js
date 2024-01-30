import React from "react";
import "../assets/css/dashboardSecondSection.css";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import { Flex, Box } from "rebass";
import { Box, ThemeProvider, createTheme } from "@mui/system";

export default function DashboardSecondSection() {
  const percentage = 95;
  const rating = 9.3;

  return (
    <div className="main-section-container">
      <div className="left">
        <div className="top">
          <h1>Welcome back,</h1>
          <h2>Mark Johnson</h2>
          <p>
            Glad to see you again!
            <br />
            Ask me anything.
          </p>
        </div>
        <div className="bottom">
          <a href="/">
            Tap to record{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
            >
              <path
                d="M7.05469 2.84622L10.7109 6.50247L7.05469 10.1587"
                stroke="white"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.2031 6.50275H2.78906"
                stroke="white"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="middle">
        <h1>Satisfaction Rate</h1>
        <p>From all projects</p>

        <div className="satisfaction-bar">
          <Box
            className="satisfaction-bar-container"
            id="container"
            style={{ width: 100, height: 100 }}
          >
            {/* <SemiCircleProgressBar percentage={51}  /> */}
            <Box
              sx={{
                height: 150,
                width: 250,
                // transform: "rotate(-90deg)"
              }}
            >
              <CircularProgressbar
                value={percentage}
                circleRatio={0.55}
                strokeWidth={4.5}
                styles={buildStyles({
                    boxShadow: "inset 0px 0px 20px 10px rgba(0,0,0,0.6)",
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.725,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "round",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#0075FF`,
                  textColor: "#f88",
                  trailColor: "#22234B",
                backgroundColor: "linear-gradient(262deg, #0075FF 23.84%, rgba(0, 117, 255, 0.00) 81.07%)",
                //   backgroundColor: "#3e98c7",
                })}
              />
            </Box>
          </Box>
          <div className="satisfaction-bar-emoji">
            <img
              src="data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='24' cy='24' r='24' fill='%230075FF'/%3E%3Cg clip-path='url(%23clip0_580_2363)'%3E%3Cpath d='M24.0124 11.5C17.1124 11.5 11.5249 17.1 11.5249 24C11.5249 30.9 17.1124 36.5 24.0124 36.5C30.9249 36.5 36.5249 30.9 36.5249 24C36.5249 17.1 30.9249 11.5 24.0124 11.5ZM24.0249 34C18.4999 34 14.0249 29.525 14.0249 24C14.0249 18.475 18.4999 14 24.0249 14C29.5499 14 34.0249 18.475 34.0249 24C34.0249 29.525 29.5499 34 24.0249 34ZM28.3999 22.75C29.4374 22.75 30.2749 21.9125 30.2749 20.875C30.2749 19.8375 29.4374 19 28.3999 19C27.3624 19 26.5249 19.8375 26.5249 20.875C26.5249 21.9125 27.3624 22.75 28.3999 22.75ZM19.6499 22.75C20.6874 22.75 21.5249 21.9125 21.5249 20.875C21.5249 19.8375 20.6874 19 19.6499 19C18.6124 19 17.7749 19.8375 17.7749 20.875C17.7749 21.9125 18.6124 22.75 19.6499 22.75ZM24.0249 30.875C26.5624 30.875 28.7749 29.4875 29.9624 27.4375C30.1999 27.025 29.8999 26.5 29.4124 26.5H18.6374C18.1624 26.5 17.8499 27.025 18.0874 27.4375C19.2749 29.4875 21.4874 30.875 24.0249 30.875Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_580_2363'%3E%3Crect width='30' height='30' fill='white' transform='translate(9 9)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
              alt="img"
            />
          </div>
          <div className="satisfaction-bar-content">
            <div className="starting-percentage">
              <p>0%</p>
            </div>
            <div className="actual-percentage">
              <h1>{percentage}%</h1>
              <p>Based on likes</p>
            </div>
            <div className="ending-percentage">
              <p>100%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-top">
          <h1>Referral Tracking</h1>
          <a href="/">
            <img
              src="data:image/svg+xml,%3Csvg width='37' height='37' viewBox='0 0 37 37' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect opacity='0.08' width='37' height='37' rx='12' fill='white'/%3E%3Cg clip-path='url(%23clip0_580_2363)'%3E%3Cpath d='M12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM24 17C22.9 17 22 17.9 22 19C22 20.1 22.9 21 24 21C25.1 21 26 20.1 26 19C26 17.9 25.1 17 24 17ZM18 17C16.9 17 16 17.9 16 19C16 20.1 16.9 21 18 21C19.1 21 20 20.1 20 19C20 17.9 19.1 17 18 17Z' fill='%237551FF'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_580_2363'%3E%3Crect width='24' height='24' fill='white' transform='translate(6 7)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
              alt="img"
            />
          </a>
        </div>
        <div className="right-container">
          <div className="right-left">
            <div className="left-container">
              <p>Invited</p>
              <h1>145 people</h1>
            </div>
            <div className="left-container">
              <p>Bonus</p>
              <h1>1,465</h1>
            </div>
          </div>
          <div className="right-right">
            <Box
              className="satisfaction-bar-container"
              id="container"
              style={{ width: 100, height: 100 }}
            >
              {/* <SemiCircleProgressBar percentage={51}  /> */}
              <Box
                sx={{
                  height: 250,
                  width: 200,

                  boxShadow: 26,
                  // transform: "rotate(-90deg)"
                }}
              >
                <CircularProgressbar
                  value={rating * 10}
                  circleRatio={0.7}
                  strokeWidth={6}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.5,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",

                    // Text size
                    textSize: "16px",

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `#05CD99`,
                    textColor: "#f88",
                    trailColor: "#22234B",
                    backgroundColor: "#3e98c7",
                  })}
                />
              </Box>
            </Box>
            <div className="content">
              <p>Safety</p>
              <h1>{rating}</h1>
              <p>Total Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
