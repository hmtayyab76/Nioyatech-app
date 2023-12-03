import React from "react";
import { CImage, CCol, CLink } from "@coreui/react";

function CardTwo({ image, title, context, link }) {
  return (
    <CCol xs={12} sm={6} md={4} className="text-start c-card2  py-2 px-4">
      <CImage
        src={image}
        alt="Card image"
        className="c-img mt-4"
        height={64}
        width={64}
      />
      <p className="c-text1 my-3">{title}</p>
      <p className="c-text2 text-start c2-text2">{context}</p>
      <CLink href={link} className="c2-link">
        Read More
      </CLink>
    </CCol>
  );
}

export default CardTwo;
