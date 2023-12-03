import React from "react";
import c1 from "../assets/images/icons8-video-64 1.png";
import c2 from "../assets/images/icons8-lowest-price-64 1.png";
import c3 from "../assets/images/icons8-test-results-64 1.png";
import c4 from "../assets/images/icons8-online-support-64 1.png";
import c5 from "../assets/images/icons8-shield-64 1.png";
import c6 from "../assets/images/icons8-database-64 1.png";
import { CContainer, CRow, CCol } from "@coreui/react";
import CardOne from "./components/CardOne";

function CyberWorkPlace() {
  return (
    <div>
      <CContainer className="my-5 d-flex flex-column justify-content-center align-items-center">
        <CRow className="w-75">
          <CRow>
            <CCol>
              <div className="text-center txt-1">
                The Cyber Workspace Platform
              </div>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <div className="text-center txt-2 my-2">
                Stay protected, stay productive in the Cyber Workspace.
              </div>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <div className="text-center txt-3">
                Lorem ipsum dolor sit amet consectetur. Neque lectus odio
                pharetra et tellus etiam lectus massa mi. Arcu mi aliquet.
              </div>
            </CCol>
          </CRow>
        </CRow>
        <CRow className="my-4 d-flex flex-row justify-content-center align-items-center">
          <CardOne
            image={c1}
            heading={"Video Guidance"}
            context={
              "Lorem ipsum dolor sit amet consectetur. Pulvinar purus aliquam aut amet. Elit justo"
            }
          />
          <CardOne
            image={c2}
            heading={"Discounts"}
            context={
              "Lorem ipsum dolor sit amet consectetur. Pulvinar purus aliquam aut amet. Elit justo"
            }
          />
          <CardOne
            image={c3}
            heading={"Realistic Exams"}
            context={
              "Lorem ipsum dolor sit amet consectetur. Pulvinar purus aliquam aut amet. Elit justo"
            }
          />
          <CardOne
            image={c4}
            heading={"Live Support"}
            context={
              "Lorem ipsum dolor sit amet consectetur. Pulvinar purus aliquam aut amet. Elit justo"
            }
          />
          <CardOne
            image={c5}
            heading={"Secure Environment"}
            context={
              "Lorem ipsum dolor sit amet consectetur. Pulvinar purus aliquam aut amet. Elit justo"
            }
          />
          <CardOne
            image={c6}
            heading={"Database System"}
            context={
              "Lorem ipsum dolor sit amet consectetur. Pulvinar purus aliquam aut amet. Elit justo"
            }
          />
        </CRow>
      </CContainer>
    </div>
  );
}

export default CyberWorkPlace;
