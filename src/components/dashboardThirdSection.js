import React, {useState, useEffect}  from "react";
import Linechart from "./linechart";
import { BarChart } from "@mui/x-charts/BarChart";
import "../assets/css/dashboardThirdSection.css";
import { ChartContainer, BarPlot } from "@mui/x-charts";
import axios from "axios";
import GraphComponent from "./graphComponent";

export default function DashboardThirdSection() {

  const [data, setData] = React.useState([]);
  const [areaData, setAreaData] = useState([]);
  const [minPrice, setMinPrice] = useState([]);
  const [maxPrice, setMaxPrice] = useState([]);
  const [avgPrice, setAvgPrice] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/dashboard/paaa/").then((res) => {
      setData(res.data);
      // console.log(`data is ${data}`);
    }
    );
  }, []);

  return (
    <div className="third-section-container">
      <div className="linechart">
        {/* <GraphComponent/> */}
        <Linechart />
      </div>
      <div className="barchart-container">
        {/* <BarChart
          colors={["#fff"]}
          sx={{
            borderRadius: "20px",
            background:
              "linear-gradient(127deg, #060C29 28.26%, rgba(4, 12, 48, 0.50) 91.2%)",
            backdropFilter: "blur(20px)",
            "& .MuiLineElement-root": {
              // gap:20,
              // rowGap:20,
            },
            "& .MuiAreaElement-series-Germany": {
              fill: "white",
            },
            "& .MuiYAxis-root": {
              // Style for Y-Axis
              "& .MuiLine-root": {
                stroke: "white", // Color of Y-Axis line
                strokeWidth: 0,
              },
            },
            "& .MuiXAxis-root": {
              // Style for X-Axis
              "& .MuiTypography-root": {
                fill: "white", // Text color of X-Axis labels
                paddingInline: "2rem",
              },
              "& .MuiLine-root": {
                stroke: "white", // Color of X-Axis line

                // width:"2000rem"
                strokeWidth: 0,
              },
            },
            // // bottomAxis Line Styles
            "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
              stroke: "#FFF",
              strokeWidth: 0,
            },
            // // leftAxis Line Styles
            "& .MuiChartsAxis-left .MuiChartsAxis-line": {
              stroke: "#fff",
              strokeWidth: 0,
            },
            "& ": {
              stroke: "#FFF",
              strokeWidth: 1,
              // fontFamily:"Roboto",
              fontWeight: 200,
            },
          }}
          xAxis={[
            {
              scaleType: "band",
              data: [
                " ",
                "",
                "   ",
                "    ",
                "     ",
                "      ",
                "       ",
                "        ",
                "         ",
              ],

              categoryGapRatio: 0.9,
              barGapRatio: 0.1,
              
            },
          ]}
          series={[
            { data: [100, 400, 700, 256, 123, 459, 354, 257, 482] },
            

            // { data: [1, 6, 3] },
            // { data: [2, 5, 6] },
          ]}
          //   width={500}
          height={300}
        /> */}
        <GraphComponent/>
 
        <h1>Active Users</h1>
        <p>
          <span>(+23) </span>
          than last week
        </p>
        <div className="details">
          <div className="content">
            <div className="top">
              <img
                src="data:image/svg+xml,%3Csvg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d_580_2363)'%3E%3Crect x='5.99902' y='2' width='25' height='25' rx='6' fill='%230075FF'/%3E%3C/g%3E%3Cpath d='M14.5818 10.7879H22.3943C22.4855 10.7878 22.5767 10.7936 22.6672 10.8052C22.6366 10.5898 22.5626 10.3829 22.4497 10.1969C22.3369 10.0108 22.1876 9.8496 22.0108 9.72284C21.8339 9.59609 21.6333 9.50646 21.4209 9.45936C21.2085 9.41226 20.9887 9.40866 20.7749 9.44877L14.3499 10.5457H14.3425C13.9392 10.6228 13.5806 10.851 13.3398 11.1836C13.7025 10.9257 14.1367 10.7873 14.5818 10.7879Z' fill='white'/%3E%3Cpath d='M22.394 11.3749H14.5815C14.1673 11.3754 13.7701 11.5401 13.4772 11.8331C13.1843 12.126 13.0195 12.5231 13.019 12.9374V17.6249C13.0195 18.0392 13.1843 18.4363 13.4772 18.7293C13.7701 19.0222 14.1673 19.187 14.5815 19.1874H22.394C22.8083 19.187 23.2055 19.0222 23.4984 18.7293C23.7913 18.4363 23.9561 18.0392 23.9565 17.6249V12.9374C23.9561 12.5231 23.7913 12.126 23.4984 11.8331C23.2055 11.5401 22.8083 11.3754 22.394 11.3749ZM21.2344 16.0624C21.0799 16.0624 20.9288 16.0166 20.8003 15.9307C20.6719 15.8449 20.5717 15.7229 20.5126 15.5801C20.4535 15.4374 20.438 15.2803 20.4681 15.1287C20.4983 14.9772 20.5727 14.838 20.6819 14.7287C20.7912 14.6195 20.9304 14.5451 21.082 14.5149C21.2335 14.4848 21.3906 14.5002 21.5333 14.5594C21.6761 14.6185 21.7981 14.7186 21.884 14.8471C21.9698 14.9756 22.0156 15.1266 22.0156 15.2812C22.0156 15.4884 21.9333 15.6871 21.7868 15.8336C21.6403 15.9801 21.4416 16.0624 21.2344 16.0624Z' fill='white'/%3E%3Cpath d='M13.0312 14.5841V12.1549C13.0312 11.6259 13.3242 10.7389 14.3411 10.5468C15.2041 10.3849 16.0586 10.3849 16.0586 10.3849C16.0586 10.3849 16.6201 10.7755 16.1562 10.7755C15.6924 10.7755 15.7046 11.3737 16.1562 11.3737C16.6079 11.3737 16.1562 11.9474 16.1562 11.9474L14.3374 14.0104L13.0312 14.5841Z' fill='white'/%3E%3Cdefs%3E%3Cfilter id='filter0_d_580_2363' x='0.499023' y='-2.38419e-07' width='36' height='36' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='3.5'/%3E%3CfeGaussianBlur stdDeviation='2.75'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_580_2363'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_580_2363' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E"
                alt="img"
              />
              <h1>Users</h1>
            </div>
            <h1>32,984</h1>
            <hr />
          </div>
          <div className="content">
            <div className="top">
              <img src="data:image/svg+xml,%3Csvg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d_580_2363)'%3E%3Crect x='5.99902' y='2' width='25' height='25' rx='6' fill='%230075FF'/%3E%3C/g%3E%3Cpath d='M23.911 9.18462C23.9066 9.16303 23.8961 9.14316 23.8807 9.12733C23.8654 9.1115 23.8458 9.10038 23.8244 9.09527C22.3944 8.74566 19.0905 9.99151 17.3005 11.7808C16.9812 12.0975 16.6901 12.4414 16.4306 12.8086C15.8786 12.7598 15.3266 12.8006 14.8561 13.0057C13.5287 13.5899 13.1423 15.1143 13.0346 15.7701C13.0285 15.806 13.0308 15.8428 13.0413 15.8776C13.0518 15.9125 13.0703 15.9444 13.0953 15.9709C13.1203 15.9974 13.151 16.0178 13.1852 16.0304C13.2193 16.043 13.256 16.0475 13.2922 16.0435L15.4237 15.8084C15.4253 15.9691 15.435 16.1296 15.4528 16.2894C15.4635 16.4003 15.5128 16.5039 15.592 16.5823L16.4174 17.4058C16.4959 17.4849 16.5995 17.5341 16.7104 17.545C16.8692 17.5627 17.0288 17.5724 17.1886 17.574L16.9547 19.7029C16.9508 19.7391 16.9554 19.7757 16.968 19.8098C16.9806 19.844 17.001 19.8747 17.0274 19.8997C17.0539 19.9246 17.0858 19.9431 17.1207 19.9537C17.1555 19.9642 17.1923 19.9666 17.2282 19.9605C17.8827 19.8555 19.4098 19.469 19.9906 18.1416C20.1957 17.6712 20.2377 17.1219 20.1903 16.5726C20.5585 16.313 20.9033 16.0219 21.2209 15.7024C23.0165 13.9158 24.2553 10.6856 23.911 9.18462ZM19.4294 13.5711C19.2654 13.4072 19.1537 13.1984 19.1084 12.9711C19.0631 12.7437 19.0863 12.5081 19.175 12.2939C19.2637 12.0797 19.4139 11.8967 19.6066 11.7679C19.7993 11.6391 20.0259 11.5703 20.2577 11.5703C20.4895 11.5703 20.7161 11.6391 20.9089 11.7679C21.1016 11.8967 21.2518 12.0797 21.3405 12.2939C21.4291 12.5081 21.4523 12.7437 21.407 12.9711C21.3617 13.1984 21.2501 13.4072 21.0861 13.5711C20.9774 13.68 20.8482 13.7664 20.7061 13.8253C20.564 13.8842 20.4116 13.9146 20.2577 13.9146C20.1039 13.9146 19.9515 13.8842 19.8093 13.8253C19.6672 13.7664 19.5381 13.68 19.4294 13.5711Z' fill='white'/%3E%3Cpath d='M16.3613 18.0023C16.2275 18.1363 16.0129 18.1886 15.7546 18.2333C15.1743 18.3321 14.6619 17.8307 14.7661 17.244C14.8059 17.0216 14.9236 16.7098 14.9968 16.6366C15.0128 16.6209 15.0235 16.6005 15.0273 16.5784C15.0311 16.5563 15.0278 16.5336 15.0179 16.5135C15.0081 16.4933 14.9921 16.4768 14.9723 16.4663C14.9525 16.4557 14.9299 16.4517 14.9077 16.4547C14.5832 16.4944 14.2813 16.6415 14.05 16.8727C13.4761 17.4471 13.4219 19.5787 13.4219 19.5787C13.4219 19.5787 15.5547 19.5245 16.1287 18.9501C16.3605 18.719 16.5078 18.4166 16.5469 18.0917C16.5559 17.9896 16.4316 17.9288 16.3613 18.0023Z' fill='white'/%3E%3Cdefs%3E%3Cfilter id='filter0_d_580_2363' x='0.499023' y='-2.38419e-07' width='36' height='36' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='3.5'/%3E%3CfeGaussianBlur stdDeviation='2.75'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_580_2363'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_580_2363' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E" />
              <h1>Clicks</h1>
            </div>
            <h1>2,42m</h1>
            <hr />
          </div>
          <div className="content">
            <div className="top">
              <img src="data:image/svg+xml,%3Csvg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d_580_2363)'%3E%3Crect x='5.99902' y='2' width='25' height='25' rx='6' fill='%230075FF'/%3E%3C/g%3E%3Cpath d='M16.5469 19.1875C16.9783 19.1875 17.3281 18.8377 17.3281 18.4062C17.3281 17.9747 16.9783 17.625 16.5469 17.625C16.1154 17.625 15.7656 17.9747 15.7656 18.4062C15.7656 18.8377 16.1154 19.1875 16.5469 19.1875Z' fill='white'/%3E%3Cpath d='M22.0156 19.1875C22.4471 19.1875 22.7969 18.8377 22.7969 18.4062C22.7969 17.9747 22.4471 17.625 22.0156 17.625C21.5842 17.625 21.2344 17.9747 21.2344 18.4062C21.2344 18.8377 21.5842 19.1875 22.0156 19.1875Z' fill='white'/%3E%3Cpath d='M23.4023 11.1989C23.3475 11.1317 23.2783 11.0777 23.1999 11.0406C23.1216 11.0035 23.0359 10.9844 22.9492 10.9845H15.5188L15.3691 10.1354C15.3532 10.0449 15.3059 9.96301 15.2355 9.90399C15.1651 9.84496 15.0762 9.81262 14.9844 9.81264H13.4219C13.3183 9.81264 13.2189 9.85379 13.1457 9.92705C13.0724 10.0003 13.0312 10.0997 13.0312 10.2033C13.0312 10.3069 13.0724 10.4062 13.1457 10.4795C13.2189 10.5527 13.3183 10.5939 13.4219 10.5939H14.6567L15.7715 16.9118C15.7874 17.0022 15.8348 17.0841 15.9051 17.1432C15.9755 17.2022 16.0644 17.2345 16.1562 17.2345H22.4062C22.5098 17.2345 22.6092 17.1934 22.6825 17.1201C22.7557 17.0468 22.7969 16.9475 22.7969 16.8439C22.7969 16.7403 22.7557 16.6409 22.6825 16.5677C22.6092 16.4944 22.5098 16.4533 22.4062 16.4533H16.4839L16.3462 15.672H22.2461C22.3816 15.6718 22.5128 15.6249 22.6176 15.539C22.7224 15.4532 22.7944 15.3338 22.8213 15.2011L23.5244 11.6854C23.5414 11.6004 23.5392 11.5126 23.5181 11.4284C23.497 11.3443 23.4574 11.2659 23.4023 11.1989Z' fill='white'/%3E%3Cdefs%3E%3Cfilter id='filter0_d_580_2363' x='0.499023' y='-2.38419e-07' width='36' height='36' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='3.5'/%3E%3CfeGaussianBlur stdDeviation='2.75'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_580_2363'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_580_2363' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E" />
              <h1>Sales</h1>
            </div>
            <h1>2,400$</h1>
            <hr />
          </div>
          <div className="content">
            <div className="top">
              <img src="data:image/svg+xml,%3Csvg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d_580_2363)'%3E%3Crect x='5.99902' y='2' width='25' height='25' rx='6' fill='%230075FF'/%3E%3C/g%3E%3Cpath d='M23.7136 11.1928C23.6855 11.1381 23.6448 11.0909 23.595 11.0548C23.5451 11.0188 23.4874 10.9951 23.4266 10.9856C23.3659 10.976 23.3037 10.981 23.2452 11.0001C23.1867 11.0191 23.1336 11.0517 23.0901 11.0952L21.5901 12.5962C21.5164 12.6687 21.4172 12.7094 21.3138 12.7094C21.2104 12.7094 21.1112 12.6687 21.0376 12.5962L20.3891 11.9468C20.3529 11.9105 20.3241 11.8674 20.3044 11.82C20.2848 11.7726 20.2747 11.7218 20.2747 11.6705C20.2747 11.6192 20.2848 11.5684 20.3044 11.521C20.3241 11.4736 20.3529 11.4305 20.3891 11.3943L21.8828 9.90037C21.9276 9.8556 21.9608 9.80061 21.9796 9.74015C21.9984 9.67969 22.0022 9.61556 21.9907 9.55329C21.9793 9.49102 21.9528 9.43248 21.9137 9.3827C21.8745 9.33293 21.8239 9.29341 21.7661 9.26756C20.6379 8.76316 19.2297 9.02635 18.3418 9.90769C17.5874 10.6567 17.3625 11.8271 17.7253 13.1189C17.7449 13.1878 17.745 13.2607 17.7256 13.3297C17.7063 13.3986 17.6682 13.4608 17.6157 13.5095L13.5512 17.2217C13.3929 17.3638 13.2652 17.5368 13.1759 17.7299C13.0866 17.9231 13.0376 18.1324 13.0318 18.3451C13.0261 18.5578 13.0637 18.7695 13.1425 18.9672C13.2212 19.1648 13.3394 19.3444 13.4899 19.4949C13.6403 19.6454 13.8198 19.7637 14.0175 19.8425C14.2151 19.9214 14.4268 19.9591 14.6395 19.9535C14.8522 19.9478 15.0616 19.8989 15.2547 19.8097C15.4479 19.7205 15.6209 19.5928 15.7632 19.4345L19.5151 15.3611C19.5631 15.3092 19.6243 15.2714 19.6921 15.2517C19.7599 15.2321 19.8319 15.2313 19.9001 15.2495C20.2679 15.3503 20.6472 15.4025 21.0285 15.405C21.844 15.405 22.5595 15.1411 23.0757 14.6325C24.0315 13.6909 24.1772 12.0937 23.7136 11.1928ZM14.6789 19.1672C14.5181 19.1848 14.3559 19.152 14.2145 19.0734C14.0731 18.9948 13.9597 18.8742 13.8897 18.7284C13.8198 18.5825 13.7968 18.4186 13.824 18.2591C13.8513 18.0997 13.9273 17.9526 14.0416 17.8382C14.156 17.7239 14.303 17.6478 14.4625 17.6205C14.6219 17.5932 14.7859 17.6161 14.9317 17.686C15.0776 17.7559 15.1982 17.8693 15.2768 18.0107C15.3555 18.152 15.3883 18.3143 15.3708 18.4751C15.3516 18.652 15.2725 18.817 15.1467 18.9429C15.0209 19.0688 14.8558 19.1479 14.6789 19.1672Z' fill='white'/%3E%3Cdefs%3E%3Cfilter id='filter0_d_580_2363' x='0.499023' y='-2.38419e-07' width='36' height='36' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='3.5'/%3E%3CfeGaussianBlur stdDeviation='2.75'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_580_2363'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_580_2363' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E" />
              <h1>Items</h1>
            </div>
            <h1>320</h1>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
