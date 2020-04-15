import React, { useState, useEffect, useContext } from "react";
import { Col } from "reactstrap";
import {
  divStyle1,
  imgStyle,
  topPStyle,
  bottomPStyle
} from "../css/ResidenceCardStyle";

const BookingCard = ({booking})=>{

  console.log(booking)
  
  useEffect(() => {
    console.log(booking)
  },[booking])

    return (
      <Col xs="12">
        <div
          style={divStyle1}
          className="card my-3 p-3"
        >
          <img
            style={imgStyle}
            src={booking.residence.images}
            alt=""
            className="card-img-top"
          />
          <div className="card-body row">
            <p style={topPStyle} className="col-6 text-left">
              {booking.residence.address.city}
            </p>
            
            <p style={bottomPStyle} className="col-6">
              {booking.residence.beds} sängar
            </p>
            <p style={bottomPStyle} className="col-6 text-right">
              {booking.startDate} till {booking.endDate}
            </p>
          </div>
        </div>
      </Col>
    );

}
export default BookingCard