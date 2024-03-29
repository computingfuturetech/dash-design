import React from "react";
import "../assets/css/dashboardNav.css";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

export default function DashboardNav() {
  return (
    <div className="dashboardNav">
      <nav>
        <div className="top-nav">
          <div className="logo">
            <img src={logo} alt="VISION UI FREE" />
          </div>
          <div className="horizontal-rule">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="234"
              height="1"
              viewBox="0 0 234 1"
              fill="none"
            >
              <path d="M0 0.5H233.25" stroke="url(#paint0_linear_580_4333)" />
              <defs>
                <linearGradient
                  id="paint0_linear_580_4333"
                  x1="0"
                  y1="0.5"
                  x2="231"
                  y2="0.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E0E1E2" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#E0E1E2" />
                  <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.15625" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="navigations">
            <ul>
              <li>
                <Link to="/">
                  <svg
                    width="42"
                    height="41"
                    viewBox="0 0 42 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_580_2363)">
                      <rect
                        x="6"
                        y="2"
                        width="30"
                        height="30"
                        rx="12"
                        fill="#1A1F37"
                      />
                    </g>
                    <g clipPath="url(#clip0_580_2363)">
                      <path
                        d="M21.1629 12.4675C21.1193 12.4258 21.0612 12.4025 21.0009 12.4025C20.9405 12.4025 20.8825 12.4258 20.8389 12.4675L15.4453 17.6199C15.4224 17.6418 15.4042 17.6682 15.3917 17.6973C15.3793 17.7265 15.3729 17.7578 15.3729 17.7895L15.3721 22.6253C15.3721 22.8739 15.4708 23.1124 15.6467 23.2882C15.8225 23.464 16.0609 23.5628 16.3096 23.5628H19.125C19.2493 23.5628 19.3685 23.5134 19.4565 23.4255C19.5444 23.3376 19.5937 23.2184 19.5937 23.094V19.1097C19.5937 19.0475 19.6184 18.9879 19.6624 18.9439C19.7063 18.9 19.766 18.8753 19.8281 18.8753H22.1719C22.234 18.8753 22.2936 18.9 22.3376 18.9439C22.3816 18.9879 22.4062 19.0475 22.4062 19.1097V23.094C22.4062 23.2184 22.4556 23.3376 22.5435 23.4255C22.6314 23.5134 22.7507 23.5628 22.875 23.5628H25.6893C25.9379 23.5628 26.1764 23.464 26.3522 23.2882C26.528 23.1124 26.6268 22.8739 26.6268 22.6253V17.7895C26.6268 17.7578 26.6204 17.7265 26.608 17.6973C26.5955 17.6682 26.5773 17.6418 26.5544 17.6199L21.1629 12.4675Z"
                        fill="#0075FF"
                      />
                      <path
                        d="M27.8821 16.6537L25.6907 14.5572V11.3759C25.6907 11.2515 25.6413 11.1323 25.5534 11.0444C25.4655 10.9565 25.3463 10.9071 25.222 10.9071H23.8157C23.6914 10.9071 23.5722 10.9565 23.4843 11.0444C23.3964 11.1323 23.347 11.2515 23.347 11.3759V12.3134L21.6501 10.6909C21.4913 10.5303 21.2552 10.4384 21 10.4384C20.7457 10.4384 20.5102 10.5303 20.3514 10.6912L14.1199 16.6531C13.9377 16.8289 13.9149 17.118 14.0807 17.3085C14.1223 17.3565 14.1733 17.3956 14.2305 17.4234C14.2878 17.4511 14.35 17.4669 14.4136 17.4698C14.4771 17.4727 14.5405 17.4627 14.6001 17.4403C14.6596 17.4179 14.7139 17.3836 14.7598 17.3395L20.8389 11.5305C20.8825 11.4888 20.9405 11.4655 21.0009 11.4655C21.0612 11.4655 21.1193 11.4888 21.1629 11.5305L27.2426 17.3395C27.3321 17.4254 27.4521 17.4723 27.5762 17.4699C27.7002 17.4674 27.8183 17.4159 27.9044 17.3266C28.0843 17.1403 28.0693 16.8327 27.8821 16.6537Z"
                        fill="#0075FF"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_580_2363"
                        x="0.5"
                        y="-2.38419e-07"
                        width="41"
                        height="41"
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
                      <clipPath id="clip0_580_2363">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="translate(13.5 9.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/tables">
                  <svg
                    width="42"
                    height="41"
                    viewBox="0 0 42 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_580_2363)">
                      <rect
                        x="6"
                        y="2"
                        width="30"
                        height="30"
                        rx="12"
                        fill="#1A1F37"
                      />
                    </g>
                    <g clipPath="url(#clip0_580_2363)">
                      <path
                        d="M16.5469 24.0316H15.6094C15.4229 24.0316 15.2441 23.9575 15.1122 23.8257C14.9803 23.6938 14.9062 23.515 14.9062 23.3285V19.1097C14.9062 18.9233 14.9803 18.7444 15.1122 18.6126C15.2441 18.4807 15.4229 18.4066 15.6094 18.4066H16.5469C16.7334 18.4066 16.9122 18.4807 17.0441 18.6126C17.1759 18.7444 17.25 18.9233 17.25 19.1097V23.3285C17.25 23.515 17.1759 23.6938 17.0441 23.8257C16.9122 23.9575 16.7334 24.0316 16.5469 24.0316Z"
                        fill="#0075FF"
                      />
                      <path
                        d="M23.1094 24.0308H22.1719C21.9854 24.0308 21.8066 23.9567 21.6747 23.8249C21.5428 23.693 21.4688 23.5142 21.4688 23.3277V16.2964C21.4688 16.11 21.5428 15.9311 21.6747 15.7993C21.8066 15.6674 21.9854 15.5933 22.1719 15.5933H23.1094C23.2959 15.5933 23.4747 15.6674 23.6066 15.7993C23.7384 15.9311 23.8125 16.11 23.8125 16.2964V23.3277C23.8125 23.5142 23.7384 23.693 23.6066 23.8249C23.4747 23.9567 23.2959 24.0308 23.1094 24.0308Z"
                        fill="#0075FF"
                      />
                      <path
                        d="M26.3906 24.0311H25.4531C25.2666 24.0311 25.0878 23.957 24.9559 23.8252C24.8241 23.6933 24.75 23.5145 24.75 23.328V13.0155C24.75 12.829 24.8241 12.6502 24.9559 12.5183C25.0878 12.3865 25.2666 12.3124 25.4531 12.3124H26.3906C26.5771 12.3124 26.7559 12.3865 26.8878 12.5183C27.0197 12.6502 27.0937 12.829 27.0937 13.0155V23.328C27.0937 23.5145 27.0197 23.6933 26.8878 23.8252C26.7559 23.957 26.5771 24.0311 26.3906 24.0311Z"
                        fill="#0075FF"
                      />
                      <path
                        d="M19.8281 24.031H18.8906C18.7041 24.031 18.5253 23.9569 18.3934 23.8251C18.2616 23.6932 18.1875 23.5144 18.1875 23.3279V10.6716C18.1875 10.4852 18.2616 10.3063 18.3934 10.1744C18.5253 10.0426 18.7041 9.96851 18.8906 9.96851H19.8281C20.0146 9.96851 20.1934 10.0426 20.3253 10.1744C20.4572 10.3063 20.5312 10.4852 20.5312 10.6716V23.3279C20.5312 23.5144 20.4572 23.6932 20.3253 23.8251C20.1934 23.9569 20.0146 24.031 19.8281 24.031Z"
                        fill="#0075FF"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_580_2363"
                        x="0.5"
                        y="-2.38419e-07"
                        width="41"
                        height="41"
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
                      <clipPath id="clip0_580_2363">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="translate(13.5 9.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Tables
                </Link>
              </li>
              {/* <li>
                <Link to="/billing">
                  <svg
                    width="42"
                    height="41"
                    viewBox="0 0 42 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_580_2363)">
                      <rect
                        x="6"
                        y="2"
                        width="30"
                        height="30"
                        rx="12"
                        fill="#1A1F37"
                      />
                    </g>
                    <path
                      d="M14.4375 20.5152C14.4375 20.9503 14.6104 21.3676 14.918 21.6753C15.2257 21.983 15.643 22.1558 16.0781 22.1558H25.9219C26.357 22.1558 26.7743 21.983 27.082 21.6753C27.3896 21.3676 27.5625 20.9503 27.5625 20.5152V16.0035H14.4375V20.5152ZM16.3711 18.2886C16.3711 18.0555 16.4637 17.832 16.6285 17.6672C16.7933 17.5023 17.0169 17.4097 17.25 17.4097H18.6562C18.8893 17.4097 19.1129 17.5023 19.2777 17.6672C19.4426 17.832 19.5352 18.0555 19.5352 18.2886V18.8746C19.5352 19.1077 19.4426 19.3312 19.2777 19.4961C19.1129 19.6609 18.8893 19.7535 18.6562 19.7535H17.25C17.0169 19.7535 16.7933 19.6609 16.6285 19.4961C16.4637 19.3312 16.3711 19.1077 16.3711 18.8746V18.2886Z"
                      fill="#0075FF"
                    />
                    <path
                      d="M25.9219 11.843H16.0781C15.643 11.843 15.2257 12.0158 14.918 12.3235C14.6104 12.6312 14.4375 13.0485 14.4375 13.4836V14.2453H27.5625V13.4836C27.5625 13.0485 27.3896 12.6312 27.082 12.3235C26.7743 12.0158 26.357 11.843 25.9219 11.843Z"
                      fill="#0075FF"
                    />
                    <defs>
                      <filter
                        id="filter0_d_580_2363"
                        x="0.5"
                        y="-2.38419e-07"
                        width="41"
                        height="41"
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
                  Billing
                </Link>
              </li> */}
              {/* <li>
                <a href="/">
                  <svg
                    width="42"
                    height="41"
                    viewBox="0 0 42 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_580_2363)">
                      <rect
                        x="6"
                        y="1.99994"
                        width="30"
                        height="30"
                        rx="12"
                        fill="#1A1F37"
                      />
                    </g>
                    <path
                      d="M27.2563 13.0313C27.2226 12.9656 27.1738 12.9089 27.1139 12.8657C27.0541 12.8224 26.9849 12.794 26.912 12.7825C26.8391 12.7711 26.7645 12.7771 26.6943 12.7999C26.6241 12.8228 26.5603 12.8619 26.5081 12.9141L24.7081 14.7153C24.6197 14.8024 24.5006 14.8512 24.3766 14.8512C24.2525 14.8512 24.1334 14.8024 24.0451 14.7153L23.267 13.936C23.2234 13.8925 23.1889 13.8408 23.1653 13.7839C23.1418 13.727 23.1296 13.6661 23.1296 13.6045C23.1296 13.5429 23.1418 13.482 23.1653 13.4251C23.1889 13.3682 23.2234 13.3165 23.267 13.273L25.0593 11.4803C25.1131 11.4266 25.1529 11.3606 25.1755 11.2881C25.1981 11.2155 25.2027 11.1386 25.1889 11.0638C25.1751 10.9891 25.1434 10.9189 25.0964 10.8591C25.0494 10.7994 24.9887 10.752 24.9193 10.7209C23.5655 10.1157 21.8757 10.4315 20.8101 11.4891C19.9049 12.3879 19.635 13.7924 20.0704 15.3425C20.0939 15.4252 20.094 15.5127 20.0708 15.5955C20.0476 15.6782 20.0019 15.7529 19.9388 15.8113L15.0615 20.2659C14.8715 20.4365 14.7182 20.644 14.6111 20.8758C14.5039 21.1075 14.4451 21.3587 14.4382 21.614C14.4313 21.8693 14.4765 22.1232 14.571 22.3605C14.6655 22.5977 14.8073 22.8132 14.9878 22.9938C15.1684 23.1744 15.3838 23.3163 15.621 23.4109C15.8582 23.5055 16.1121 23.5508 16.3674 23.5441C16.6227 23.5373 16.8739 23.4786 17.1057 23.3715C17.3375 23.2644 17.5451 23.1113 17.7158 22.9213L22.2181 18.0331C22.2757 17.9709 22.3491 17.9255 22.4305 17.902C22.5119 17.8784 22.5982 17.8774 22.6801 17.8993C23.1215 18.0202 23.5767 18.0829 24.0342 18.0859C25.0128 18.0859 25.8715 17.7692 26.4908 17.1589C27.6378 16.029 27.8127 14.1124 27.2563 13.0313ZM16.4147 22.6005C16.2218 22.6216 16.027 22.5822 15.8574 22.4879C15.6878 22.3936 15.5516 22.249 15.4677 22.0739C15.3837 21.8989 15.3562 21.7022 15.3889 21.5108C15.4215 21.3195 15.5127 21.143 15.65 21.0058C15.7872 20.8685 15.9636 20.7772 16.1549 20.7445C16.3463 20.7118 16.543 20.7392 16.7181 20.8231C16.8931 20.907 17.0378 21.0431 17.1322 21.2127C17.2266 21.3823 17.266 21.577 17.245 21.77C17.2219 21.9823 17.127 22.1803 16.976 22.3314C16.825 22.4824 16.627 22.5774 16.4147 22.6005Z"
                      fill="#0075FF"
                    />
                    <defs>
                      <filter
                        id="filter0_d_580_2363"
                        x="0.5"
                        y="-6.12736e-05"
                        width="41"
                        height="41"
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
                  RTL
                </a>
              </li> */}
              {/* <h3>ACCOUNT PAGES</h3> */}
              <li>
                <Link to="/profile">
                  <svg
                    width="42"
                    height="41"
                    viewBox="0 0 42 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_580_2363)">
                      <rect
                        x="6"
                        y="2"
                        width="30"
                        height="30"
                        rx="12"
                        fill="#1A1F37"
                      />
                    </g>
                    <path
                      d="M23.2453 11.3917C22.6752 10.7762 21.8789 10.4373 21 10.4373C20.1164 10.4373 19.3175 10.7742 18.75 11.3859C18.1764 12.0043 17.8969 12.8449 17.9625 13.7525C18.0926 15.5431 19.4552 16.9998 21 16.9998C22.5449 16.9998 23.9051 15.5434 24.0372 13.7531C24.1037 12.8537 23.8225 12.0149 23.2453 11.3917Z"
                      fill="#0075FF"
                    />
                    <path
                      d="M26.1564 23.5616H15.8439C15.7089 23.5634 15.5753 23.535 15.4526 23.4786C15.33 23.4222 15.2214 23.3392 15.1349 23.2355C14.9445 23.0079 14.8677 22.6971 14.9246 22.3827C15.1718 21.011 15.9435 19.8588 17.1564 19.0499C18.234 18.3318 19.5989 17.9366 21.0002 17.9366C22.4014 17.9366 23.7664 18.3321 24.8439 19.0499C26.0568 19.8585 26.8285 21.0107 27.0757 22.3824C27.1326 22.6968 27.0558 23.0076 26.8654 23.2352C26.7789 23.3389 26.6704 23.422 26.5478 23.4785C26.4251 23.5349 26.2914 23.5633 26.1564 23.5616Z"
                      fill="#0075FF"
                    />
                    <defs>
                      <filter
                        id="filter0_d_580_2363"
                        x="0.5"
                        y="-2.38419e-07"
                        width="41"
                        height="41"
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
                  Profile
                </Link>
              </li>
              {/* <li>
                <Link to="/signIn">
                  <svg
                    width="42"
                    height="41"
                    viewBox="0 0 42 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_580_2363)">
                      <rect
                        x="6"
                        y="1.99997"
                        width="30"
                        height="30"
                        rx="12"
                        fill="#1A1F37"
                      />
                    </g>
                    <path
                      d="M26.0391 16.0626H21.9375C21.5645 16.0626 21.2069 15.9145 20.9431 15.6507C20.6794 15.387 20.5312 15.0293 20.5312 14.6564V10.5548C20.5312 10.5237 20.5189 10.4939 20.4969 10.4719C20.4749 10.45 20.4451 10.4376 20.4141 10.4376H17.7187C17.2215 10.4376 16.7446 10.6352 16.3929 10.9868C16.0413 11.3384 15.8438 11.8153 15.8438 12.3126V21.6876C15.8438 22.1849 16.0413 22.6618 16.3929 23.0134C16.7446 23.3651 17.2215 23.5626 17.7187 23.5626H24.2812C24.7785 23.5626 25.2554 23.3651 25.6071 23.0134C25.9587 22.6618 26.1562 22.1849 26.1562 21.6876V16.1798C26.1562 16.1487 26.1439 16.1189 26.1219 16.0969C26.0999 16.075 26.0701 16.0626 26.0391 16.0626Z"
                      fill="#0075FF"
                    />
                    <path
                      d="M25.7818 15.0259L21.5687 10.8128C21.5605 10.8046 21.55 10.7991 21.5387 10.7968C21.5274 10.7946 21.5156 10.7957 21.505 10.8002C21.4943 10.8046 21.4851 10.812 21.4787 10.8216C21.4723 10.8312 21.4688 10.8425 21.4688 10.8541V14.6571C21.4688 14.7814 21.5181 14.9006 21.606 14.9885C21.694 15.0765 21.8132 15.1258 21.9375 15.1258H25.7405C25.7521 15.1258 25.7634 15.1223 25.773 15.1159C25.7825 15.1094 25.79 15.1003 25.7944 15.0896C25.7988 15.079 25.8 15.0672 25.7978 15.0559C25.7955 15.0446 25.79 15.0341 25.7818 15.0259Z"
                      fill="#0075FF"
                    />
                    <defs>
                      <filter
                        id="filter0_d_580_2363"
                        x="0.5"
                        y="-3.0756e-05"
                        width="41"
                        height="41"
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
                  Sign In
                </Link>
              </li> */}
              {/* <li>
                <Link to="/signUp">
                  <svg
                    width="42"
                    height="41"
                    viewBox="0 0 42 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_580_2363)">
                      <rect
                        x="6"
                        y="2"
                        width="30"
                        height="30"
                        rx="12"
                        fill="#1A1F37"
                      />
                    </g>
                    <path
                      d="M27.4933 10.6215C27.4879 10.5956 27.4753 10.5718 27.4569 10.5528C27.4384 10.5338 27.415 10.5204 27.3892 10.5143C25.6733 10.0948 21.7086 11.5898 19.5605 13.737C19.1774 14.117 18.8281 14.5297 18.5167 14.9704C17.8543 14.9118 17.1919 14.9607 16.6273 15.2068C15.0345 15.9079 14.5707 17.7372 14.4415 18.5241C14.4342 18.5671 14.4369 18.6113 14.4496 18.6531C14.4622 18.695 14.4844 18.7333 14.5143 18.7651C14.5443 18.7969 14.5812 18.8213 14.6222 18.8364C14.6632 18.8515 14.7072 18.8569 14.7506 18.8522L17.3085 18.5701C17.3103 18.7629 17.322 18.9555 17.3434 19.1472C17.3562 19.2803 17.4153 19.4047 17.5103 19.4988L18.5009 20.487C18.595 20.5819 18.7194 20.6409 18.8524 20.654C19.043 20.6753 19.2346 20.6869 19.4264 20.6888L19.1457 23.2435C19.141 23.2869 19.1465 23.3308 19.1616 23.3718C19.1767 23.4128 19.2011 23.4497 19.2329 23.4796C19.2647 23.5095 19.303 23.5317 19.3448 23.5444C19.3866 23.557 19.4308 23.5598 19.4738 23.5526C20.2593 23.4266 22.0918 22.9628 22.7888 21.37C23.0349 20.8054 23.0852 20.1462 23.0284 19.4871C23.4702 19.1756 23.8839 18.8262 24.265 18.4429C26.4198 16.299 27.9063 12.4227 27.4933 10.6215ZM22.1152 15.8853C21.9185 15.6887 21.7844 15.4381 21.7301 15.1653C21.6758 14.8925 21.7036 14.6097 21.81 14.3527C21.9164 14.0957 22.0966 13.876 22.3279 13.7214C22.5592 13.5669 22.8311 13.4844 23.1093 13.4844C23.3874 13.4844 23.6594 13.5669 23.8906 13.7214C24.1219 13.876 24.3022 14.0957 24.4086 14.3527C24.515 14.6097 24.5428 14.8925 24.4884 15.1653C24.4341 15.4381 24.3001 15.6887 24.1033 15.8853C23.9728 16.016 23.8179 16.1196 23.6473 16.1903C23.4768 16.2611 23.2939 16.2975 23.1093 16.2975C22.9246 16.2975 22.7418 16.2611 22.5712 16.1903C22.4007 16.1196 22.2457 16.016 22.1152 15.8853Z"
                      fill="#0075FF"
                    />
                    <path
                      d="M18.4336 21.2028C18.273 21.3636 18.0155 21.4263 17.7056 21.4799C17.0092 21.5986 16.3942 20.9968 16.5193 20.2928C16.5671 20.0259 16.7083 19.6518 16.7962 19.5639C16.8154 19.5451 16.8282 19.5207 16.8327 19.4941C16.8373 19.4676 16.8334 19.4403 16.8215 19.4162C16.8097 19.392 16.7905 19.3722 16.7668 19.3595C16.743 19.3469 16.7159 19.342 16.6893 19.3457C16.2998 19.3933 15.9375 19.5699 15.6601 19.8472C14.9713 20.5366 14.9062 23.0945 14.9062 23.0945C14.9062 23.0945 17.4656 23.0294 18.1544 22.3401C18.4326 22.0628 18.6094 21.7 18.6562 21.31C18.6671 21.1875 18.518 21.1146 18.4336 21.2028Z"
                      fill="#0075FF"
                    />
                    <defs>
                      <filter
                        id="filter0_d_580_2363"
                        x="0.5"
                        y="-2.38419e-07"
                        width="41"
                        height="41"
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
                  Sign Up
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        {/* <div className="needHelpContainer">
          <img src="data:image/svg+xml,%3Csvg width='36' height='35' viewBox='0 0 36 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='-1.52588e-05' width='35' height='35' rx='12' fill='white'/%3E%3Cpath d='M18 8.49994C13.0312 8.49994 9 12.5312 9 17.4999C9 22.4687 13.0312 26.4999 18 26.4999C22.9687 26.4999 27 22.4687 27 17.4999C27 12.5312 22.9687 8.49994 18 8.49994ZM17.7187 22.7499C17.5333 22.7499 17.3521 22.695 17.1979 22.5919C17.0437 22.4889 16.9236 22.3425 16.8526 22.1712C16.7817 21.9999 16.7631 21.8114 16.7993 21.6295C16.8354 21.4477 16.9247 21.2806 17.0558 21.1495C17.1869 21.0184 17.354 20.9291 17.5359 20.893C17.7177 20.8568 17.9062 20.8753 18.0775 20.9463C18.2488 21.0173 18.3952 21.1374 18.4983 21.2916C18.6013 21.4458 18.6562 21.627 18.6562 21.8124C18.6562 22.0611 18.5575 22.2995 18.3817 22.4754C18.2058 22.6512 17.9674 22.7499 17.7187 22.7499ZM19.2862 17.9687C18.5264 18.4787 18.4219 18.946 18.4219 19.3749C18.4219 19.549 18.3527 19.7159 18.2297 19.839C18.1066 19.962 17.9397 20.0312 17.7656 20.0312C17.5916 20.0312 17.4247 19.962 17.3016 19.839C17.1785 19.7159 17.1094 19.549 17.1094 19.3749C17.1094 18.3479 17.5819 17.5313 18.5541 16.8784C19.4578 16.2718 19.9687 15.8874 19.9687 15.0423C19.9687 14.4676 19.6406 14.0312 18.9614 13.7082C18.8016 13.6323 18.4458 13.5582 18.008 13.5634C17.4586 13.5704 17.032 13.7017 16.7034 13.966C16.0837 14.4648 16.0312 15.0076 16.0312 15.0156C16.0271 15.1017 16.006 15.1863 15.9692 15.2643C15.9324 15.3423 15.8805 15.4123 15.8167 15.4703C15.7528 15.5283 15.6781 15.5732 15.5969 15.6023C15.5157 15.6315 15.4295 15.6443 15.3434 15.6402C15.2572 15.636 15.1727 15.6149 15.0946 15.5781C15.0166 15.5413 14.9466 15.4895 14.8886 15.4256C14.8306 15.3617 14.7857 15.287 14.7566 15.2058C14.7275 15.1246 14.7146 15.0385 14.7187 14.9523C14.7239 14.8384 14.8031 13.8123 15.8798 12.946C16.4381 12.497 17.1483 12.2635 17.9892 12.2532C18.5845 12.2462 19.1437 12.347 19.523 12.526C20.6578 13.0628 21.2812 13.9576 21.2812 15.0423C21.2812 16.6281 20.2214 17.3401 19.2862 17.9687Z' fill='%230075FF'/%3E%3C/svg%3E" />
          <div className="content">
            <h1>Need help?</h1>
            <p>Please check our docs</p>
            <button>DOCUMENTATION</button>
          </div>
        </div> */}
      </nav>
    </div>
  );
}
