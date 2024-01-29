import React from "react";
import "../assets/css/dashboardSecondSection.css";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Flex, Box } from "rebass";

export default function DashboardSecondSection() {
  const percentage = 95;

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
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.2031 6.50275H2.78906"
                stroke="white"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="middle">
        <h1>Satisfaction Rate</h1>
        <p>From all projects</p>
        <div>
          <div className="App">
            <Box
              id="container"
              style={{ width: 100, height: 100, paddingLeft: "20px" }}
            >
              {/* <SemiCircleProgressBar percentage={51}  /> */}
              <Box
                sx={{
                  height: 150,
                  width: 150,
                  // transform: "rotate(-90deg)"
                }}
              >
                <CircularProgressbar
                  value={percentage}
                  circleRatio={0.8}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.6,
                
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                
                    // Text size
                    textSize: '16px',
                
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                
                    // Colors
                    pathColor: `#0075FF`,
                    textColor: '#f88',
                    trailColor: '#22234B',
                    backgroundColor: '#3e98c7',
                  })}
                />
              </Box>
            </Box>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
