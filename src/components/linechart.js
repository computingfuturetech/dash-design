import React from 'react'
import { LineChart } from "@mui/x-charts/LineChart";
import { timeParse } from "d3-time-format"; // Import timeParse from d3
import'../assets/css/linechart.css';

export default function Linechart() {
    const data = [
        {
          month: "Jan",
          value1: 500,
          value2: 180,
        },
        {
          month: "Feb",
          value1: 200,
          value2: 230,
        },
        {
          month: "Mar",
          value1: 400,
          value2: 303,
        },
        {
          month: "Apr",
          value1: 207,
          value2: 100,
        },
        {
          month: "May",
          value1: 100,
          value2: 240,
        },
        {
          month: "Jun",
          value1: 204,
          value2: 150,
        },
        {
          month: "Jul",
          value1: 330,
          value2: 406,
        },
        {
          month: "Aug",
          value1: 404,
          value2: 102,
        },
        {
          month: "Sep",
          value1: 306,
          value2: 107,
        },
        {
          month: "Oct",
          value1: 406,
          value2: 203,
        },
        {
          month: "Nov",
          value1: 270,
          value2: 180,
        },
        {
          month: "Dec",
          value1: 180,
          value2: 390,
        },
    
        // Add more data for other months
      ];
      const yaxis = [
        {
            value: 0,
        },
        {
            value: 100,
        },
        {
            value: 200,
        },
        {
            value: 300,
        },
        {
            value: 400,
        },
        {
            value: 500,
        }
      ];
      const yaxisLabel = yaxis.map((entry) => entry.value);
      const months = data.map((entry) => entry.month);
      return (
        <div className='line-chart-container'>
          <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#0075FF", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#0075FF", stopOpacity: 0 }} />
              </linearGradient>
            </defs>
          </svg>
          <LineChart className='line-chart'
          width={700}
            sx={{
              "& .MuiLineElement-root": {},
              "& .MuiAreaElement-series-Germany": {
                fill: "white",
              },
              "& .MuiYAxis-root": {
                // Style for Y-Axis
                "& .MuiLine-root": {
                  stroke: "white", // Color of Y-Axis line
    
                },
              },
              "& .MuiXAxis-root": {
                // Style for X-Axis
                "& .MuiTypography-root": {
                  fill: "white", // Text color of X-Axis labels
                  paddingInline: "20rem"
                },
                "& .MuiLine-root": {
                  stroke: "white", // Color of X-Axis line
                  width:"2000rem"
                },
              },
               // bottomAxis Line Styles
         "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
            stroke:"#FFF",
            strokeWidth:0.4
           },
           // leftAxis Line Styles
           "& .MuiChartsAxis-left .MuiChartsAxis-line":{
            stroke:"#FFF",
            strokeWidth:1
           },
           "& ":{
            stroke:"#FFF",
            strokeWidth:1,
            // fontFamily:"Roboto",
            fontWeight:200,
           }
            }}
            xAxis={[
              {
                data: months,
                scaleType: "band", // Use "band" scale type for categorical data
              },
            ]}
            yAxis={[
              {
                data: yaxisLabel,
                scaleType: "linear", // Use "linear" scale type for numeric data
              },
            ]}
            series={[
              {
                curve: "monotoneX",
                data: data.map((entry) => entry.value1),
                area: true,
                fill: "url(#gradient1)", // Reference the linear gradient
                showMark: false,
              },
              {
                curve: "monotoneX",
                data: data.map((entry) => entry.value2),
                area: true,
                fill: "url(#gradient1)", // Reference the linear gradient
                showMark: false,
              },
            ]}
            height={300}
          />
        </div>
      );
}
