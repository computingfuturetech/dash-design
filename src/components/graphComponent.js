import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import '../assets/css/graphComponent.css';
import React, { useEffect } from "react";
import axios from "axios";
import { DropdownButton } from "react-bootstrap";

export default function GraphComponent() {

  const [maxPrices, setMaxPrices] = React.useState([]);
  const [minPrices, setMinPrices] = React.useState([]);
  const [avgPrices, setAvgPrices] = React.useState([]);
  const [areas, setAreas] = React.useState([]);
  useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/dashboard/paaa/")
    .then((res) => {
      const responseData = res.data;
      console.log("Response Data:", responseData);

      // Assuming the property names are different
      const maxPricesData = responseData.map(item => item.max_price);
      const minPricesData = responseData.map(item => item.min_price);
      const avgPricesData = responseData.map(item => item.average_price);
      const areasData = responseData.map(item => item.start_point);

      // console.log("Prices Data:", maxPrices);
      // console.log("Areas Data:", areasData);

      setMaxPrices(maxPricesData);
      setMinPrices(minPricesData);
      setAvgPrices(avgPricesData);
      setAreas(areasData);
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
    });
  }, []);

  const newDataSet = (e) => {
    e.preventDefault();
    
    console.log(e.target.value);
    if (e.target.value === "Yearly") {
      axios
      .get("http://127.0.0.1:8000/dashboard/paaa/?to_rent=Yearly")
      .then((res) => {
        const responseData = res.data;
        console.log("Response Data:", responseData);
  
        // Assuming the property names are different
        const maxPricesData = responseData.map(item => item.max_price);
        const minPricesData = responseData.map(item => item.min_price);
        const avgPricesData = responseData.map(item => item.average_price);
        const areasData = responseData.map(item => item.start_point);
  
        // console.log("Prices Data:", maxPrices);
        // console.log("Areas Data:", areasData);
  
        setMaxPrices(maxPricesData);
        setMinPrices(minPricesData);
        setAvgPrices(avgPricesData);
        setAreas(areasData);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
    } else if (e.target.value === "Monthly") {
      axios
      .get("http://127.0.0.1:8000/dashboard/paaa/?to_rent=Monthly")
      .then((res) => {
        const responseData = res.data;
        console.log("Response Data:", responseData);
  
        // Assuming the property names are different
        const maxPricesData = responseData.map(item => item.max_price);
        const minPricesData = responseData.map(item => item.min_price);
        const avgPricesData = responseData.map(item => item.average_price);
        const areasData = responseData.map(item => item.start_point);
  
        // console.log("Prices Data:", maxPrices);
        // console.log("Areas Data:", areasData);
  
        setMaxPrices(maxPricesData);
        setMinPrices(minPricesData);
        setAvgPrices(avgPricesData);
        setAreas(areasData);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
    } else if (e.target.value === "Weekly") {
      axios
      .get("http://127.0.0.1:8000/dashboard/paaa/?to_rent=Weekly")
      .then((res) => {
        const responseData = res.data;
        console.log("Response Data:", responseData);
  
        // Assuming the property names are different
        const maxPricesData = responseData.map(item => item.max_price);
        const minPricesData = responseData.map(item => item.min_price);
        const avgPricesData = responseData.map(item => item.average_price);
        const areasData = responseData.map(item => item.start_point);
  
        // console.log("Prices Data:", maxPrices);
        // console.log("Areas Data:", areasData);
  
        setMaxPrices(maxPricesData);
        setMinPrices(minPricesData);
        setAvgPrices(avgPricesData);
        setAreas(areasData);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
    }
    else if (e.target.value === "Daily") {
      axios
      .get("http://127.0.0.1:8000/dashboard/paaa/?to_rent=Daily")
      .then((res) => {
        const responseData = res.data;
        console.log("Response Data:", responseData);
  
        // Assuming the property names are different
        const maxPricesData = responseData.map(item => item.max_price);
        const minPricesData = responseData.map(item => item.min_price);
        const avgPricesData = responseData.map(item => item.average_price);
        const areasData = responseData.map(item => item.start_point);
  
        // console.log("Prices Data:", maxPrices);
        // console.log("Areas Data:", areasData);
  
        setMaxPrices(maxPricesData);
        setMinPrices(minPricesData);
        setAvgPrices(avgPricesData);
        setAreas(areasData);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
    }
  }

  const check = () => {
    console.log("Max Prices:", maxPrices);
    console.log("Min Prices:", minPrices);
    console.log("Avg Prices:", avgPrices);
    console.log("Areas:", areas);
  }




  // Defining the chart data
  const labels = areas;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Price Comparison",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Minimum Price",
        data: minPrices,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        
      },
      {
        label: "Average Price",
        data: avgPrices,
        backgroundColor: "rgba(53, 12, 235, 0.5)",
        
      },
      {
        label: "Maximum Price",
        data: maxPrices,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const chartData = {
    // labels: prices,

    datasets: [
      {
        label: "Price",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.8)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: maxPrices,
      },
      {
        label: "Area",
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.8)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: minPrices,
      },
      {
        label: "Price",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.8)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: avgPrices,
      
      }
    ],
  };

  return (
    //  Check if data is an array
    <div className="Bar-main-container">
      <select name="filter" id="filter" onClick={newDataSet} >
        <option value="" disabled selected hidden>Select</option>
        <option value="Yearly" >Yearly</option>
        <option value="Monthly">Monthly</option>
        <option value="Weekly">Weekly</option>
        <option value="Daily">Daily</option>
      </select>
      {/* <h1>Hellodsahdaashflasjflsaoijfoiajfoiajfojfoiajfijoijsafsoancosan</h1> */}
      <Bar
      title="Price Comparison"
      
      style={{background: 
        "linear-gradient(127deg, #060C29 28.26%, rgba(4, 12, 48, 0.50) 91.2%)",
        backdropFilter: "blur(20px)",

        borderRadius: '10px', padding: '10px'}}
      options={options} data={data} />;
      {/* <button onClick={check}>Check</button> */}
    </div>
  );
}
