import React from "react";
import DashboardNav from "../../components/dashboardNav";
import "../../assets/css/dashboard.css";
import DashboardTopNav from "../../components/dashboardtopNav";
import DashboardTopInfo from "../../components/dashboardTopInfo";
import DashboardSecondSection from "../../components/dashboardSecondSection";
import DashboardThirdSection from "../../components/dashboardThirdSection";
import DashboardLastSection from "../../components/dashboardLastSection";
import { useEffect,useState } from "react";
import Loading from "../../components/loading";

export default function Dashboard() {

  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    // setIsLoading1(false);
    if (localStorage.getItem("login")) {
      setIsLoading(false);
      const jwt = JSON.parse(localStorage.getItem("login"));
      const token = jwt.token;
      const jwtpayload = JSON.parse(window.atob(token.split('.')[1]))
      if (jwtpayload.exp * 1000 < Date.now()) {
        console.log("Token expired");
        localStorage.removeItem("login");
        window.location.href = "/signIn";
        setIsLoading(false);
      }
  
    }
    else {
      window.location.href = "/signIn";
    }
  },[localStorage.getItem("login")])

  
  return (
    isLoading ? <Loading />:
    <div className="main-container">
      <div className="left-nav">
        <DashboardTopNav page = "Dashboard"/>
      </div>
      <div className="top-nav">
        <DashboardNav />
      </div>
      {/* <div className="topInfo-section">
        <ul>
          <li>
            <DashboardTopInfo
              title={`Today's Money`}
              amount={`$ 53,000`}
              change={`+55%`}
              icon={
                <svg
                  width="56"
                  height="56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g >
                    <rect
                      x="5.5"
                      y="2"
                      width="45"
                      height="45"
                      rx="12"
                      fill="#0075FF"
                    />
                  </g>
                  <path
                    d="M20.9464 17.8182H35.0089C35.1732 17.8181 35.3373 17.8285 35.5002 17.8494C35.445 17.4617 35.3118 17.0892 35.1088 16.7543C34.9057 16.4195 34.6369 16.1292 34.3186 15.9011C34.0003 15.6729 33.6391 15.5116 33.2568 15.4268C32.8745 15.342 32.4789 15.3356 32.094 15.4078L20.529 17.3822H20.5158C19.7898 17.521 19.1443 17.9318 18.7109 18.5305C19.3638 18.0662 20.1453 17.8171 20.9464 17.8182Z"
                    fill="white"
                  />
                  <path
                    d="M35.0093 18.8749H20.9468C20.2011 18.8757 19.4862 19.1723 18.9589 19.6995C18.4317 20.2268 18.1351 20.9417 18.1343 21.6874V30.1249C18.1351 30.8705 18.4317 31.5854 18.9589 32.1127C19.4862 32.64 20.2011 32.9366 20.9468 32.9374H35.0093C35.7549 32.9366 36.4698 32.64 36.9971 32.1127C37.5244 31.5854 37.821 30.8705 37.8218 30.1249V21.6874C37.821 20.9417 37.5244 20.2268 36.9971 19.6995C36.4698 19.1723 35.7549 18.8757 35.0093 18.8749ZM32.9219 27.3124C32.6437 27.3124 32.3719 27.2299 32.1406 27.0754C31.9093 26.9209 31.7291 26.7012 31.6227 26.4443C31.5162 26.1873 31.4884 25.9046 31.5426 25.6318C31.5969 25.359 31.7308 25.1084 31.9275 24.9118C32.1242 24.7151 32.3747 24.5812 32.6475 24.5269C32.9203 24.4726 33.2031 24.5005 33.46 24.6069C33.717 24.7134 33.9366 24.8936 34.0911 25.1249C34.2456 25.3561 34.3281 25.628 34.3281 25.9061C34.3281 26.2791 34.18 26.6368 33.9162 26.9005C33.6525 27.1642 33.2948 27.3124 32.9219 27.3124Z"
                    fill="white"
                  />
                  <path
                    d="M18.1562 24.6514V20.2788C18.1562 19.3265 18.6836 17.73 20.5139 17.3841C22.0674 17.0928 23.6055 17.0928 23.6055 17.0928C23.6055 17.0928 24.6162 17.7959 23.7812 17.7959C22.9463 17.7959 22.9683 18.8726 23.7812 18.8726C24.5942 18.8726 23.7812 19.9053 23.7812 19.9053L20.5073 23.6187L18.1562 24.6514Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_580_2363"
                      x="-4.76837e-07"
                      y="-2.38419e-07"
                      width="56"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="3.5" />
                      <feGaussianBlur stdDeviation="2.75" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_580_2363"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_580_2363"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
            />
            </li>
            <li>
            <DashboardTopInfo
              title={`Today's Users`}
              amount={`2,300`}
              change={`+5%`}
              icon={
                <svg
                  width="56"
                  height="56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g >
                    <rect
                      x="5.5"
                      y="2"
                      width="45"
                      height="45"
                      rx="12"
                      fill="#0075FF"
                    />
                  </g>
                  <path
                    d="M28 15.3586C22.952 15.3586 18.8594 19.4512 18.8594 24.4992C18.8594 29.5472 22.952 33.6398 28 33.6398C33.048 33.6398 37.1406 29.5472 37.1406 24.4992C37.1406 19.4512 33.048 15.3586 28 15.3586Z"
                    fill="white"
                    stroke="#0075FF"
                    strokeWidth="0.75"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M28.0001 15.3586C25.4482 15.3586 23.0488 19.4512 23.0488 24.4992C23.0488 29.5472 25.4482 33.6398 28.0001 33.6398C30.552 33.6398 32.9515 29.5472 32.9515 24.4992C32.9515 19.4512 30.552 15.3586 28.0001 15.3586Z"
                    fill="white"
                    stroke="#0075FF"
                    strokeWidth="0.75"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M21.9062 18.4055C23.5867 19.5986 25.7022 20.3101 28.0001 20.3101C30.298 20.3101 32.4136 19.5986 34.094 18.4055"
                    fill="white"
                  />
                  <path
                    d="M21.9062 18.4055C23.5867 19.5986 25.7022 20.3101 28.0001 20.3101C30.298 20.3101 32.4136 19.5986 34.094 18.4055"
                    stroke="#0075FF"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34.094 30.5944C32.4136 29.4013 30.298 28.6898 28.0001 28.6898C25.7022 28.6898 23.5867 29.4013 21.9062 30.5944"
                    stroke="#0075FF"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 15.3586V33.6398"
                    stroke="#0075FF"
                    strokeWidth="0.75"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M37.1406 24.499H18.8594"
                    stroke="#0075FF"
                    strokeWidth="0.75"
                    strokeMiterlimit="10"
                  />
                  <defs>
                    <filter
                      id="filter0_d_580_2363"
                      x="-4.76837e-07"
                      y="-2.38419e-07"
                      width="56"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="3.5" />
                      <feGaussianBlur stdDeviation="2.75" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_580_2363"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_580_2363"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
            />
            </li>
            <li>
            <DashboardTopInfo
              title={`New Clients`}
              amount={`+ 3,052`}
              change={`+14%`}
              icon={
                <svg
                  width="56"
                  height="56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g >
                    <rect
                      x="5.5"
                      y="2"
                      width="45"
                      height="45"
                      rx="12"
                      fill="#0075FF"
                    />
                  </g>
                  <path
                    d="M29.4062 23.1057H35.5586C35.6021 23.1057 35.6438 23.123 35.6746 23.1538C35.7054 23.1845 35.7227 23.2263 35.7227 23.2698V31.5315C35.7227 32.2743 35.4276 32.9867 34.9023 33.5119C34.3771 34.0372 33.6647 34.3323 32.9219 34.3323H23.0781C22.3353 34.3323 21.6229 34.0372 21.0977 33.5119C20.5724 32.9867 20.2773 32.2743 20.2773 31.5315V17.469C20.2773 16.7262 20.5724 16.0138 21.0977 15.4885C21.6229 14.9633 22.3353 14.6682 23.0781 14.6682H27.1211C27.1646 14.6682 27.2063 14.6855 27.2371 14.7163C27.2679 14.747 27.2852 14.7888 27.2852 14.8323V20.9846C27.2852 21.5472 27.5086 22.0867 27.9064 22.4845C28.3042 22.8822 28.8437 23.1057 29.4062 23.1057ZM24.4844 30.137H31.5156C31.7052 30.137 31.887 30.0616 32.0211 29.9276C32.1552 29.7935 32.2305 29.6117 32.2305 29.4221C32.2305 29.2325 32.1552 29.0507 32.0211 28.9166C31.887 28.7826 31.7052 28.7073 31.5156 28.7073H24.4844C24.2948 28.7073 24.113 28.7826 23.9789 28.9166C23.8448 29.0507 23.7695 29.2325 23.7695 29.4221C23.7695 29.6117 23.8448 29.7935 23.9789 29.9276C24.113 30.0616 24.2948 30.137 24.4844 30.137ZM24.4844 26.6213H31.5156C31.7052 26.6213 31.887 26.546 32.0211 26.412C32.1552 26.2779 32.2305 26.0961 32.2305 25.9065C32.2305 25.7169 32.1552 25.5351 32.0211 25.401C31.887 25.267 31.7052 25.1916 31.5156 25.1916H24.4844C24.2948 25.1916 24.113 25.267 23.9789 25.401C23.8448 25.5351 23.7695 25.7169 23.7695 25.9065C23.7695 26.0961 23.8448 26.2779 23.9789 26.412C24.113 26.546 24.2948 26.6213 24.4844 26.6213Z"
                    fill="white"
                    stroke="#0075FF"
                    strokeWidth="0.0234375"
                  />
                  <path
                    d="M28.8447 15.2275L35.1644 21.5473L28.8447 15.2275ZM28.8447 15.2275C28.8447 15.2275 28.8447 15.2275 28.8447 15.2275M28.8447 15.2275L28.8447 15.2275M28.8447 15.2275C28.8341 15.2169 28.8205 15.2097 28.8058 15.2068C28.7911 15.2039 28.7758 15.2054 28.7619 15.2112C28.748 15.2169 28.7362 15.2266 28.7278 15.2391C28.7194 15.2515 28.7149 15.2662 28.7148 15.2812V20.9857C28.7148 21.1691 28.7877 21.345 28.9174 21.4746C29.047 21.6043 29.2229 21.6771 29.4063 21.6771H35.1107C35.1258 21.6771 35.1404 21.6726 35.1529 21.6642C35.1654 21.6558 35.1751 21.6439 35.1808 21.6301C35.1866 21.6162 35.1881 21.6009 35.1851 21.5862C35.1822 21.5715 35.175 21.5579 35.1645 21.5473L28.8447 15.2275Z"
                    fill="white"
                    stroke="#0075FF"
                    strokeWidth="0.0234375"
                  />
                  <defs>
                    <filter
                      id="filter0_d_580_2363"
                      x="-4.76837e-07"
                      y="-2.38419e-07"
                      width="56"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="3.5" />
                      <feGaussianBlur stdDeviation="2.75" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_580_2363"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_580_2363"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
            />
            </li>
            <li>
            <DashboardTopInfo
              title={`Total Sales`}
              amount={`$ 173,000`}
              change={`+8%`}
              icon={
                <svg
                  width="56"
                  height="56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <rect
                      x="5.5"
                      y="2"
                      width="45"
                      height="45"
                      rx="12"
                      fill="#0075FF"
                    />
                  </g>
                  <path
                    d="M24.4844 32.9374C25.261 32.9374 25.8906 32.3078 25.8906 31.5311C25.8906 30.7545 25.261 30.1249 24.4844 30.1249C23.7077 30.1249 23.0781 30.7545 23.0781 31.5311C23.0781 32.3078 23.7077 32.9374 24.4844 32.9374Z"
                    fill="white"
                  />
                  <path
                    d="M34.3281 32.9374C35.1048 32.9374 35.7344 32.3078 35.7344 31.5311C35.7344 30.7545 35.1048 30.1249 34.3281 30.1249C33.5515 30.1249 32.9219 30.7545 32.9219 31.5311C32.9219 32.3078 33.5515 32.9374 34.3281 32.9374Z"
                    fill="white"
                  />
                  <path
                    d="M36.8242 18.558C36.7254 18.4371 36.601 18.3398 36.4599 18.2731C36.3188 18.2063 36.1647 18.1718 36.0086 18.1721H22.6338L22.3645 16.6437C22.3357 16.4809 22.2506 16.3334 22.1239 16.2272C21.9972 16.1209 21.8372 16.0627 21.6719 16.0627H18.8594C18.6729 16.0627 18.4941 16.1368 18.3622 16.2687C18.2303 16.4005 18.1562 16.5794 18.1562 16.7659C18.1562 16.9523 18.2303 17.1312 18.3622 17.2631C18.4941 17.3949 18.6729 17.469 18.8594 17.469H21.0821L23.0887 28.8412C23.1174 29.004 23.2026 29.1514 23.3292 29.2577C23.4559 29.3639 23.6159 29.4221 23.7812 29.4221H35.0312C35.2177 29.4221 35.3966 29.348 35.5284 29.2162C35.6603 29.0843 35.7344 28.9055 35.7344 28.719C35.7344 28.5325 35.6603 28.3537 35.5284 28.2218C35.3966 28.0899 35.2177 28.0159 35.0312 28.0159H24.371L24.1231 26.6096H34.743C34.9868 26.6093 35.2231 26.5248 35.4117 26.3703C35.6004 26.2158 35.7299 26.0009 35.7783 25.7619L37.0439 19.4338C37.0744 19.2806 37.0705 19.1226 37.0325 18.9712C36.9945 18.8197 36.9234 18.6786 36.8242 18.558Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_580_2363"
                      x="-4.76837e-07"
                      y="-2.38419e-07"
                      width="56"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="3.5" />
                      <feGaussianBlur stdDeviation="2.75" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_580_2363"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_580_2363"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
            />
          </li>
        </ul>
      </div> */}
      {/* <div className="second-section">
        <DashboardSecondSection />
      </div> */}
      <div className="third-section">
        <DashboardThirdSection/>
      </div>
      {/* <div className="last-section">
        <DashboardLastSection/>
      </div> */}
    </div>
  );
}
