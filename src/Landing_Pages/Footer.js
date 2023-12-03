import React from "react";

import { CContainer, CRow, CImage, CCol, CLink } from "@coreui/react";

import flink1 from "../assets/images/youtube (1) 1.png";
import flink2 from "../assets/images/linkedin (1) 1.png";
import flink3 from "../assets/images/facebook (1) 1.png";
import flink4 from "../assets/images/twitter (1) 1.png";
import logowhite from "../assets/images/logo-light.png";

function Footer() {
  return (
    <CContainer fluid className="bg_blue">
      <CContainer>
        <CRow className="justify-content-between py-4">
          <CCol xs={12} md={4} className="mt-3">
            <div className="footer-logo">
              <CImage
                src={logowhite}
                alt="Logo"
                style={{ width: "182px", height: "33px" }}
              />
            </div>
            <p className="logodes mt-2 mx-2">
              {" "}
              Copyright © 2022 NioyaTech. All Rights Reserved.
            </p>
          </CCol>
          <CCol
            xs={12}
            md={8}
            className="d-flex justify-content-xs-center justify-content-sm-between justify-content-between justify-content-md-end mt-3"
          >
            <div className="mx-4">
              <h4 className="foot-links-h text-white">Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <CLink href="https://example.com" className="foot-links">
                    About Us
                  </CLink>
                </li>
                <li>
                  <CLink href="https://example.com" className="foot-links">
                    Contact Us
                  </CLink>
                </li>
                <li>
                  <CLink href="https://example.com" className="foot-links">
                    Privacy Policy
                  </CLink>
                </li>
                <li>
                  <CLink href="https://example.com" className="foot-links">
                    Term of Use
                  </CLink>
                </li>
              </ul>
            </div>
            <div className="mx-4">
              <h4 className="foot-links-h text-white">Follow Us</h4>
              <ul className=" list-unstyled">
                <li>
                  <CImage
                    src={flink1}
                    alt="Image"
                    width={16}
                    height={16}
                    fluid
                  />
                  <CLink href="https://example.com" className="foot-links mx-2">
                    Youtube
                  </CLink>
                </li>
                <li>
                  <CImage
                    src={flink2}
                    alt="Image"
                    width={16}
                    height={16}
                    fluid
                  />
                  <CLink href="https://example.com" className="foot-links mx-2">
                    Linkdin
                  </CLink>
                </li>
                <li>
                  <CImage
                    src={flink3}
                    alt="Image"
                    width={16}
                    height={16}
                    fluid
                  />
                  <CLink href="https://example.com" className="foot-links mx-2">
                    Facebook
                  </CLink>
                </li>
                <li>
                  <CImage
                    src={flink4}
                    alt="Image"
                    width={16}
                    height={16}
                    fluid
                  />
                  <CLink href="https://example.com" className="foot-links mx-2">
                    Twitter
                  </CLink>
                </li>
              </ul>
            </div>
          </CCol>
          <CCol xs={12} md={4} className=""></CCol>
        </CRow>
      </CContainer>
    </CContainer>
  );
}

export default Footer;
