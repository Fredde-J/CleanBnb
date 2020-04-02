import React from 'react';
import { Col } from "reactstrap";
import {
  divStyle1,
  imgStyle,
  topPStyle,
  bottomPStyle
} from "../css/ResidenceCardStyle";

const BookingCard = ()=>{

    return (
      <Col xs="12" md="6">
        <div
          style={divStyle1}
          className="card my-3 p-3"
        >
          <img
            style={imgStyle}
            src="/images/lägenhet1.jpg"
            alt=""
            className="card-img-top"
          />
          <div className="card-body row">
            <p style={topPStyle} className="col-6 text-left">
              Malmö
            </p>
            
            <p style={bottomPStyle} className="col-6">
              5 sängar
            </p>
            <p style={bottomPStyle} className="col-6 text-right">
              2020-04-05 till 2020-04-10
            </p>
          </div>
        </div>
      </Col>
    );

}
export default BookingCard