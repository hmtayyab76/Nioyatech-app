import React from "react";
import { CImage, CCol } from "@coreui/react";

function CardOne({ image, heading, context }) {
  return (
    <CCol xs={12} sm={6} md={4} className="text-center c-card ">
      <CImage
        src={image}
        alt="Card image"
        className="c-img"
        height={64}
        width={64}
      />
      <p className="c-text1">{heading}</p>
      <p className="c-text2 ">{context}</p>
    </CCol>
  );
}

export default CardOne;
