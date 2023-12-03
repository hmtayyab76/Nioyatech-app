import React from "react";
import { CContainer, CButton, CRow, CCol } from "@coreui/react";
import c11 from "../assets/images/icons8-diploma-64 (1) 1.png";
import c12 from "../assets/images/icons8-diploma-64 (2) 1.png";
import c13 from "../assets/images/icons8-diploma-64 1.png";
import CardTwo from "./components/CardTwo";
function Courses() {
  return (
    <CContainer className=" d-flex flex-column justify-content-center align-items-center">
      <CRow>
        <CCol>
          <div className="text-center txt-2 my-2">
            Check our courses, which is located in innovation.
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <div className="text-center txt-3">
            Lorem ipsum dolor sit amet consectetur. Neque lectus odio.
          </div>
        </CCol>
      </CRow>
      <CRow className="mt-4 d-flex justify-content-center align-items-center flex-wrap">
        <CardTwo
          image={c11}
          title={"UX/UI Designer"}
          context={
            "Lorem ipsum dolor sit amet consectetur. Nibh id arcu massa egestas eget faucibus amet condimentum. Scelerisque mattis eget dictum suspendisse auctor vitae faucibus."
          }
          link={"https://example.com"}
        />
        <CardTwo
          image={c12}
          title={"Full Stack Developer"}
          context={
            "Lorem ipsum dolor sit amet consectetur. Nibh id arcu massa egestas eget faucibus amet condimentum. Scelerisque mattis eget dictum suspendisse auctor vitae faucibus."
          }
          link={"https://example.com"}
        />
        <CardTwo
          image={c13}
          title={"Web Developer"}
          context={
            "Lorem ipsum dolor sit amet consectetur. Nibh id arcu massa egestas eget faucibus amet condimentum. Scelerisque mattis eget dictum suspendisse auctor vitae faucibus."
          }
          link={"https://example.com"}
        />
      </CRow>
      <CRow>
        <CCol>
          <CButton className="btn-1 w-auto px-3 mt-4">
            <span className="btn-fram text-white">explore all courses</span>
          </CButton>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default Courses;
