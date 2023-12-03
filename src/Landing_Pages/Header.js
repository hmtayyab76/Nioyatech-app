import { React, useEffect, useState } from "react";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarNav,
  CNavLink,
  CForm,
  CButton,
  CRow,
  CImage,
  CCol,
} from "@coreui/react";

import PersonCImage from "../assets/images/Group 10.png";
import btn_vector from "../assets/images/Vector.png";
import moon from "../assets/images/moon.png";
import sun from "../assets/images/sun (1) 1.png";
import menu from "../assets/images/bars-solid.svg";
import xmark from "../assets/images/xmark-solid.svg";
import logodark from "../assets/images/logo-light 1.png";
import logowhite from "../assets/images/logo-light.png";
import circle_1 from "../assets/images/circles.png";
import circle_2 from "../assets/images/circles (1).png";

function Header() {
  const [theme, setTheme] = useState("light");
  const [themeimg, setThemeimg] = useState(false);
  const [logo, setlogo] = useState(false);
  const [xm, setxm] = useState(true);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    setThemeimg(!themeimg);
    setlogo(!logo);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const handleMenuClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
    setxm(!xm);
  };
  return (
    <div>
      <CNavbar>
        <CContainer className="d-flex justify-content-between">
          <CNavbarBrand className="d-flex align-items-center ">
            <CImage
              src={logo ? logowhite : logodark}
              alt="Logo"
              style={{ width: "182px", height: "33px" }}
            />
            <span className="line"></span>
            <span className="logo-txt">Cyber Workspace</span>
          </CNavbarBrand>
          <CImage
            src={xm ? xmark : menu}
            alt="Image"
            width={20}
            height={20}
            className={`CImage-fluid mx-4 d-xl-none d-flex `}
            id="menu"
            onClick={handleMenuClick}
          />

          {isNavbarOpen && (
            <div className="NavContent">
              <CNavbarNav className="d-flex navlinks">
                <CNavLink className="nav-link-custom2">About Us</CNavLink>
                <CNavLink className="nav-link-custom2">Contact Us</CNavLink>
                <CNavLink className="nav-link-custom2">Platforms</CNavLink>
                <CNavLink className="nav-link-custom2">Solutions</CNavLink>
                <CNavLink className="nav-link-custom2">Pricing</CNavLink>
              </CNavbarNav>

              <CForm className="d-flex align-items-center form">
                <CImage
                  src={themeimg ? sun : moon}
                  alt="Image"
                  width={20}
                  height={20}
                  className="CImage-fluid mx-4"
                  onClick={toggleTheme}
                />

                <CButton className="mx-3 login-btn nav-btn">LOG IN</CButton>
                <CButton className="signup-btn nav-btn mx-1">SIGN UP</CButton>
              </CForm>
            </div>
          )}
        </CContainer>
      </CNavbar>

      <CContainer fluid className="bg_blue">
        <CContainer>
          <CRow className="d-flex justify-content-center align-items-center pt-3 pb-5">
            <CCol xs="12" lg="8" className="container-content">
              <h2 className="heading-1">
                Secure Your Workspace and Increase Your Productivity.
              </h2>
              <p className="para-1 my-4">
                Lorem ipsum dolor sit amet consectetur. Id orci tincidunt id
                quam ridiculus sed iaculis.
              </p>
              <CButton className="btn-1 d-flex align-items-center justify-content-center">
                <CImage
                  src={btn_vector}
                  alt="Image"
                  className="CImage-fluid mx-1"
                />
                <span className="mx-1 text-white">GET STARTED</span>
              </CButton>
            </CCol>
            <CCol
              xs="10"
              lg="4"
              className="d-flex justify-content-center align-items-center"
            >
              <div className="position-relative z-3">
                <CImage src={circle_2} alt="Image" className="circle-2 z-0" />

                <CImage src={circle_1} alt="Image" className="circle-1 z-0" />
                <CImage
                  src={PersonCImage}
                  alt="Image"
                  className="w-100 p-img"
                />
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </CContainer>
    </div>
  );
}

export default Header;
