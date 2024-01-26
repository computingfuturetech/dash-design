import React from 'react'
import "../assets/css/signUp.css";

export default function SignUp() {
  return (
    <div className="content">
            <div className="greetings">
              <h1>Welcome!</h1>
              <p>
                Use these awesome forms to login or create new <br /> account in
                your project for free.
              </p>
            </div>
            <div className="form">
              <h1>Register with</h1>
              <div className="social">
                <a href="/">
                  <svg
                    width="79"
                    height="80"
                    viewBox="0 0 79 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_580_2363)">
                      <rect
                        x="2"
                        y="2.5"
                        width="75"
                        height="75"
                        rx="20"
                        fill="url(#paint0_linear_580_2363)"
                        fill-opacity="0.1"
                      />
                      <rect
                        x="1"
                        y="1.5"
                        width="77"
                        height="77"
                        rx="21"
                        stroke="url(#paint1_radial_580_2363)"
                        stroke-width="2"
                      />
                    </g>
                    <g clip-path="url(#clip0_580_2363)">
                      <path
                        d="M52.4163 40C52.4163 32.87 46.6297 27.0833 39.4997 27.0833C32.3697 27.0833 26.583 32.87 26.583 40C26.583 46.2516 31.0263 51.4571 36.9163 52.6583V43.875H34.333V40H36.9163V36.7708C36.9163 34.2779 38.9443 32.25 41.4372 32.25H44.6663V36.125H42.083C41.3726 36.125 40.7913 36.7062 40.7913 37.4166V40H44.6663V43.875H40.7913V52.8521C47.3143 52.2062 52.4163 46.7037 52.4163 40Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_580_2363"
                        x="-42"
                        y="-41.5"
                        width="163"
                        height="163"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="21"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_580_2363"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_580_2363"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_580_2363"
                        x1="-32.0253"
                        y1="11.6071"
                        x2="48.2886"
                        y2="65.041"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.0001"
                          stop-color="white"
                          stop-opacity="0"
                        />
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0.39"
                        />
                      </linearGradient>
                      <radialGradient
                        id="paint1_radial_580_2363"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(39.5 40) rotate(-132.581) scale(70.7181 54.8602)"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </radialGradient>
                      <clipPath id="clip0_580_2363">
                        <rect
                          width="31"
                          height="31"
                          fill="white"
                          transform="translate(24 24.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="/">
                  <svg
                    width="79"
                    height="80"
                    viewBox="0 0 79 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_580_2363)">
                      <rect
                        x="2"
                        y="2.5"
                        width="75"
                        height="75"
                        rx="20"
                        fill="url(#paint0_linear_580_2363)"
                        fill-opacity="0.1"
                      />
                      <rect
                        x="1"
                        y="1.5"
                        width="77"
                        height="77"
                        rx="21"
                        stroke="url(#paint1_radial_580_2363)"
                        stroke-width="2"
                      />
                    </g>
                    <path
                      d="M45.1384 32.7846C42.6972 32.7846 41.6654 33.9495 39.9653 33.9495C38.2221 33.9495 36.8925 32.7931 34.777 32.7931C32.7063 32.7931 30.4982 34.0573 29.0959 36.211C27.1269 39.248 27.4611 44.9678 30.6501 49.8407C31.7909 51.585 33.3142 53.5413 35.3123 53.5625H35.3486C37.0851 53.5625 37.6009 52.4254 39.9907 52.4121H40.027C42.3811 52.4121 42.8534 53.5558 44.5826 53.5558H44.6189C46.617 53.5346 48.2221 51.367 49.3628 49.6294C50.1838 48.3797 50.4889 47.7524 51.1186 46.3386C46.5056 44.5876 45.7645 38.0479 50.3267 35.5407C48.9341 33.797 46.9772 32.787 45.1324 32.787L45.1384 32.7846Z"
                      fill="white"
                    />
                    <path
                      d="M44.6008 26.439C43.1477 26.5377 41.4524 27.4629 40.4594 28.6708C39.5585 29.7655 38.8174 31.3893 39.108 32.9642H39.2243C40.7719 32.9642 42.3558 32.0323 43.2809 30.8384C44.1722 29.7019 44.8479 28.0913 44.6008 26.439Z"
                      fill="white"
                    />
                    <defs>
                      <filter
                        id="filter0_b_580_2363"
                        x="-42"
                        y="-41.5"
                        width="163"
                        height="163"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="21"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_580_2363"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_580_2363"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_580_2363"
                        x1="-32.0253"
                        y1="11.6071"
                        x2="48.2886"
                        y2="65.041"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.0001"
                          stop-color="white"
                          stop-opacity="0"
                        />
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0.39"
                        />
                      </linearGradient>
                      <radialGradient
                        id="paint1_radial_580_2363"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(39.5 40) rotate(-132.581) scale(70.7181 54.8602)"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
                <a href="/">
                  <svg
                    width="79"
                    height="80"
                    viewBox="0 0 79 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_580_2363)">
                      <rect
                        x="2"
                        y="2.5"
                        width="75"
                        height="75"
                        rx="20"
                        fill="url(#paint0_linear_580_2363)"
                        fill-opacity="0.1"
                      />
                      <rect
                        x="1"
                        y="1.5"
                        width="77"
                        height="77"
                        rx="21"
                        stroke="url(#paint1_radial_580_2363)"
                        stroke-width="2"
                      />
                    </g>
                    <path
                      d="M49.6794 38.3817L49.5734 37.9322H39.8028V42.0675H45.6406C45.0345 44.9457 42.222 46.4607 39.9247 46.4607C38.2531 46.4607 36.4911 45.7575 35.3248 44.6274C34.7095 44.0216 34.2197 43.3004 33.8835 42.505C33.5473 41.7097 33.3713 40.8558 33.3655 39.9924C33.3655 38.2505 34.1483 36.5082 35.2873 35.3621C36.4264 34.216 38.1467 33.5747 39.8572 33.5747C41.8161 33.5747 43.22 34.6149 43.745 35.0893L46.6836 32.1661C45.8216 31.4086 43.4534 29.4999 39.7625 29.4999C36.9148 29.4999 34.1844 30.5907 32.1884 32.58C30.2187 34.5389 29.1992 37.3716 29.1992 39.9999C29.1992 42.6282 30.1639 45.3192 32.0727 47.2936C34.1122 49.3992 37.0006 50.4999 39.9748 50.4999C42.6809 50.4999 45.2459 49.4396 47.0741 47.5158C48.8712 45.6221 49.8008 43.0017 49.8008 40.2549C49.8008 39.0985 49.6845 38.4117 49.6794 38.3817Z"
                      fill="white"
                    />
                    <defs>
                      <filter
                        id="filter0_b_580_2363"
                        x="-42"
                        y="-41.5"
                        width="163"
                        height="163"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="21"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_580_2363"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_580_2363"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_580_2363"
                        x1="-32.0253"
                        y1="11.6071"
                        x2="48.2886"
                        y2="65.041"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.0001"
                          stop-color="white"
                          stop-opacity="0"
                        />
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0.39"
                        />
                      </linearGradient>
                      <radialGradient
                        id="paint1_radial_580_2363"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(39.5 40) rotate(-132.581) scale(70.7181 54.8602)"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="or">
                <span>or</span>
              </div>
              <div className="form-content">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your full name" />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Your password"
                />
              </div>
              <div className="form-btn">
                <button>SIGN UP</button>
                </div>
                <div className="signIn">
                <p>Already have an account? <a href="/">Sign In</a></p>
                </div>
              </div>
              <p>
                @ 2021, Made by Simmmple & Creative Tim for a better web
              </p>
              <div className="links">
                <a href="/">Marketplace</a>
                <a href="/">Blog</a>
                <a href="/">License</a>
              </div>

          </div>
  )
}
