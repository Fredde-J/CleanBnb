import React from 'react';
import { Col } from "reactstrap";
import {
  divStyle1,
  imgStyle,
  topPStyle,
  bottomPStyle,
} from "../css/ResidenceCardStyle";

const confirmPage = ({leaseObject}) => {
  return (
    <div>
      <h2>Din listning!</h2>
      <Col xs="12" md="6">
        <div
          style={divStyle1}
          className="card my-3 p-3"
        >
          <img
            style={imgStyle}
            src={leaseObject.residence.images}
            alt=""
            className="card-img-top"
          />
          <div className="card-body row">
            <p style={topPStyle} className="col-6 text-left">
              {leaseObject.residence.address
                ? leaseObject.residence.address.city
                : "Address"}
            </p>
            <p style={topPStyle} className="col-6 text-right">
              {leaseObject.residence.price}kr / Natt
            </p>
            <p style={bottomPStyle} className="col-4">
              {leaseObject.residence.beds}{" "}
              {leaseObject.residence.beds > 1 ? "st sängar" : "st säng"}
            </p>
            <p style={bottomPStyle} className="col-8 text-right">
              {leaseObject.startDate} - {leaseObject.endDate}
            </p>
          </div>
        </div>
      </Col>
    </div>
  );
}
 
export default confirmPage;