import React from "react";
import { Col } from "reactstrap";
import {
  divStyle,
  imgStyle,
  topPStyle,
  bottomPStyle
} from "../css/ResidenceCardStyle";

const ResidenceCard = ({ residence }) => {
  return (
    <Col xs="12" md="6">
      <div style={divStyle} className="card my-3 p-2">
        <img
          style={imgStyle}
          src={residence.images}
          alt=""
          className="card-img-top"
        />
        <div className="card-body row">
          <p style={topPStyle} className="col-6 text-left m-0 p-0">
            {residence.address.city}
          </p>
          <p style={topPStyle} className="col-6 text-right m-0 p-0">
            {residence.price}kr / Natt
          </p>
          <p style={bottomPStyle} className="col-12 m-0 p-0">
            {residence.beds} {residence.beds > 1 ? "st sängar" : "st säng"}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default ResidenceCard;
