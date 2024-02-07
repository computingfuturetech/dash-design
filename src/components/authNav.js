import React from "react";
import Logo from "../assets/images/Logo.png";
import "../assets/css/authNav.css";
import { Link } from "react-router-dom";

export default function AuthNav() {
  return (
    <>
      <div className="signUpNav">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="middle-section">
            <ul>
              <li>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_580_2510)">
                      <path
                        d="M10.2225 3.6231C10.2354 3.61554 10.2462 3.6047 10.2537 3.59168C10.2612 3.57865 10.2651 3.56389 10.2651 3.54888C10.2651 3.53386 10.2612 3.5191 10.2537 3.50608C10.2462 3.49305 10.2354 3.48221 10.2225 3.47465L6.94095 1.56812C6.73098 1.44642 6.4926 1.38232 6.24991 1.38232C6.00722 1.38232 5.76883 1.44642 5.55886 1.56812L2.27798 3.47465C2.26501 3.48221 2.25425 3.49305 2.24677 3.50608C2.23929 3.5191 2.23535 3.53386 2.23535 3.54888C2.23535 3.56389 2.23929 3.57865 2.24677 3.59168C2.25425 3.6047 2.26501 3.61554 2.27798 3.6231L6.20704 5.93439C6.22026 5.94218 6.23532 5.94628 6.25066 5.94628C6.266 5.94628 6.28105 5.94218 6.29427 5.93439L10.2225 3.6231Z"
                        fill="white"
                      />
                      <path
                        d="M1.91016 4.20738C1.89705 4.19981 1.88218 4.19584 1.86705 4.19586C1.85192 4.19589 1.83706 4.19991 1.82398 4.20751C1.8109 4.21512 1.80006 4.22605 1.79256 4.23919C1.78505 4.25233 1.78115 4.26722 1.78125 4.28236V8.01827C1.78158 8.19831 1.82903 8.37512 1.91888 8.53112C2.00874 8.68713 2.13787 8.81689 2.29344 8.90751L5.77735 10.9964C5.7904 11.004 5.80521 11.0079 5.82029 11.0079C5.83537 11.008 5.85018 11.004 5.86325 10.9965C5.87631 10.9889 5.88716 10.9781 5.89471 10.965C5.90225 10.952 5.90624 10.9372 5.90625 10.9221V6.58763C5.90624 6.57256 5.90226 6.55776 5.89472 6.54471C5.88717 6.53166 5.87633 6.52083 5.86328 6.51329L1.91016 4.20738Z"
                        fill="white"
                      />
                      <path
                        d="M6.59375 6.60272V10.9211C6.59377 10.9362 6.59775 10.951 6.6053 10.964C6.61285 10.9771 6.6237 10.9879 6.63676 10.9954C6.64982 11.003 6.66463 11.0069 6.67971 11.0069C6.69479 11.0069 6.7096 11.003 6.72266 10.9954L10.2063 8.90649C10.3618 8.81599 10.4909 8.68641 10.5808 8.53061C10.6706 8.37481 10.7182 8.1982 10.7187 8.01833V4.28241C10.7187 4.26735 10.7147 4.25257 10.7071 4.23955C10.6996 4.22653 10.6887 4.21572 10.6756 4.20822C10.6626 4.20071 10.6478 4.19676 10.6327 4.19678C10.6177 4.19679 10.6029 4.20076 10.5898 4.20829L6.63672 6.5286C6.6237 6.53612 6.61288 6.54692 6.60534 6.55993C6.5978 6.57293 6.5938 6.58769 6.59375 6.60272Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_580_2510">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(0.75 0.695251)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  DASHBOARD
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_580_2502)">
                      <path
                        d="M7.89658 2.08253C7.4785 1.63114 6.89455 1.38257 6.25002 1.38257C5.60205 1.38257 5.01617 1.62964 4.60002 2.07823C4.17936 2.53177 3.9744 3.14815 4.02252 3.81374C4.11791 5.12686 5.11715 6.19507 6.25002 6.19507C7.38289 6.19507 8.38041 5.12708 8.47731 3.81417C8.52607 3.1546 8.31982 2.5395 7.89658 2.08253Z"
                        fill="white"
                      />
                      <path
                        d="M10.0314 11.0071H2.46887C2.36989 11.0084 2.27186 10.9876 2.18192 10.9462C2.09198 10.9048 2.01239 10.8439 1.94895 10.768C1.8093 10.601 1.75301 10.3731 1.79469 10.1425C1.97602 9.13665 2.54192 8.29167 3.43137 7.69849C4.22157 7.1719 5.22252 6.88208 6.25012 6.88208C7.27772 6.88208 8.27867 7.17212 9.06887 7.69849C9.95832 8.29145 10.5242 9.13643 10.7055 10.1423C10.7472 10.3729 10.6909 10.6008 10.5513 10.7677C10.4879 10.8438 10.4083 10.9047 10.3184 10.9461C10.2284 10.9875 10.1304 11.0083 10.0314 11.0071Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_580_2502">
                        <rect
                          width="11"
                          height="11"
                          fill="white"
                          transform="translate(0.75 0.695251)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  PROFILE
                </Link>
              </li>
              <li>
                <Link to="/signUp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M5.75 1.72595C3.28596 1.72595 1.28125 3.73066 1.28125 6.1947C1.28125 8.65874 3.28596 10.6635 5.75 10.6635C8.21404 10.6635 10.2187 8.65874 10.2187 6.1947C10.2187 3.73066 8.21404 1.72595 5.75 1.72595ZM4.67105 4.23576C4.94326 3.94722 5.32633 3.78845 5.75 3.78845C6.17367 3.78845 6.5533 3.9483 6.82658 4.23833C7.10351 4.53224 7.23822 4.92712 7.20643 5.35165C7.14283 6.1947 6.48971 6.8822 5.75 6.8822C5.01029 6.8822 4.35588 6.1947 4.29357 5.35144C4.26199 4.92347 4.39648 4.5273 4.67105 4.23576ZM5.75 9.97595C5.24522 9.97628 4.74551 9.87525 4.2805 9.67884C3.8155 9.48243 3.39467 9.19465 3.04297 8.83255C3.2444 8.5453 3.50105 8.30106 3.79793 8.11412C4.34557 7.76306 5.03865 7.5697 5.75 7.5697C6.46135 7.5697 7.15443 7.76306 7.70143 8.11412C7.99855 8.30098 8.25543 8.54522 8.45703 8.83255C8.10536 9.19469 7.68454 9.4825 7.21953 9.67891C6.75451 9.87532 6.25479 9.97633 5.75 9.97595Z"
                      fill="white"
                    />
                  </svg>
                  SIGNUP
                </Link>
              </li>
              <li>
                <Link to="/signIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M5.43623 4.28716C5.43623 4.56646 5.43623 4.83716 5.52432 5.09068C4.59834 6.17778 2.15342 9.05025 1.92568 9.26939C1.88042 9.31 1.84421 9.35968 1.81941 9.4152C1.79461 9.47072 1.78178 9.53084 1.78174 9.59165C1.78174 9.77427 1.89346 9.95044 1.98799 10.0493C2.12979 10.1975 2.73564 10.7583 2.84736 10.6508C3.17822 10.3286 3.24482 10.2426 3.38018 10.1094C3.58428 9.90962 3.35869 9.50142 3.42959 9.33599C3.50049 9.17056 3.57568 9.13833 3.69814 9.11255C3.82061 9.08677 4.0376 9.17485 4.20732 9.177C4.38564 9.17915 4.48232 9.10396 4.61553 8.97935C4.72295 8.88052 4.80029 8.78814 4.80244 8.64419C4.80674 8.45083 4.52744 8.19517 4.73584 7.99107C4.94424 7.78696 5.24502 8.12427 5.46631 8.09849C5.6876 8.07271 5.95615 7.76548 5.98408 7.63443C6.01201 7.50337 5.73271 7.16607 5.77568 6.97485C5.79072 6.9104 5.92178 6.76001 6.02061 6.73853C6.11943 6.71704 6.55771 6.88677 6.65654 6.86528C6.77685 6.8395 6.9165 6.71275 7.03037 6.64185C7.36338 6.78579 7.66631 6.8438 8.05518 6.8438C9.52685 6.8438 10.7192 5.69654 10.7192 4.28286C10.7192 2.86919 9.52685 1.72687 8.05518 1.72687C6.5835 1.72687 5.43623 2.87349 5.43623 4.28716ZM9.34424 3.78937C9.34424 3.92534 9.30392 4.05826 9.22837 4.17132C9.15283 4.28438 9.04546 4.3725 8.91983 4.42453C8.79421 4.47657 8.65597 4.49018 8.52261 4.46366C8.38925 4.43713 8.26675 4.37165 8.1706 4.2755C8.07445 4.17935 8.00898 4.05685 7.98245 3.92349C7.95592 3.79013 7.96954 3.6519 8.02157 3.52627C8.07361 3.40065 8.16172 3.29328 8.27478 3.21773C8.38784 3.14219 8.52076 3.10187 8.65674 3.10187C8.83907 3.10187 9.01394 3.1743 9.14287 3.30323C9.2718 3.43216 9.34424 3.60703 9.34424 3.78937Z"
                      fill="white"
                    />
                  </svg>
                  SIGNIN
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-section">
            <button>Free Download</button>
          </div>
        </nav>
      </div>
    </>
  );
}
