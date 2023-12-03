import React from "react";
import { CContainer, CButton, CRow, CImage, CCol } from "@coreui/react";

import frame1 from "../assets/images/Frame 427319091.png";
import frame2 from "../assets/images/Frame 427319091 (1).png";
function Frames() {
  return (
    <CContainer className="my-5 d-flex flex-column justify-content-center align-items-center">
      <CRow className="d-flex justify-content-center py-2 my-xl-5">
        <CCol
          xs={10}
          lg={4}
          className="shap-img d-flex justify-content-center align-items-center p-2 mb-5 pb-5 mb-lg-0 pb-lg-0"
        >
          <div className="cont w-100">
            <CImage src={frame1} alt="Image" className="w-100" />
            <div className="shape shape1"></div>
            <div className="shape shape3"></div>
          </div>
        </CCol>
        <CCol xs={12} lg={8} className="container-content z">
          <div className="d-flex flex-column h-100 px-4 py-md-4">
            <h2 className="heading-2">Lorem ipsum dolor sit.</h2>
            <p className="para-2 fpara-2">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin ut
              pellentesque sed venenatis arcu. Sagittis dolor vitae integer mi
              sed cursus habitasse. Sed nullam sapien eget fermentum purus
              posuere turpis volutpat nunc.
            </p>
            <CButton className="btn-1">
              <span className="btn-fram text-white">See More</span>
            </CButton>
          </div>
        </CCol>
      </CRow>
      <CRow className="d-flex justify-content-center mt-xl-5">
        <CCol xs={12} lg={8} className="container-content">
          <div className="d-flex flex-column h-100 px-4">
            <h2 className="heading-2">Lorem ipsum dolor sit.</h2>
            <p className="para-2 fpara-2">
              Lorem ipsum dolor sit amet consectetur. Sollicitudin ut
              pellentesque sed venenatis arcu. Sagittis dolor vitae integer mi
              sed cursus habitasse. Sed nullam sapien eget fermentum purus
              posuere turpis volutpat nunc.
            </p>
            <CButton className="btn-1">
              <span className="btn-fram text-white">See More</span>
            </CButton>
          </div>
        </CCol>
        <CCol
          xs={10}
          lg={4}
          className="d-flex justify-content-center align-items-center p-2 mt-5  pt-5 mt-lg-0 pt-lg-0"
        >
          <div className="cont w-100 my-md-5">
            <CImage src={frame2} alt="Image" className="w-100" />
            <span className="shape shape11"></span>
            <span className="shape shape12"></span>
            <span className="shape shape13"></span>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default Frames;
