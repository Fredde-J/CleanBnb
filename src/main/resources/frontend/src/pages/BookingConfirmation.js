import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "reactstrap";
import { UserContext } from "../contexts/UserContext";
import { ResidenceContext } from "../contexts/ResidenceContext";
import {
  imgStyle,
  divStyle2,
  pTagStyle1,
  pTagStyle2,
  pTagStyle3,
  pTagStyle4,
  buttonStyle,
} from "../css/ResidenceCardStyle";
const BookingConfirmation = (props) => {
  const { chosenResidence } = useContext(ResidenceContext);

  console.log(chosenResidence);
  

  return (
    <>
      <Row>
        <Col xs="12" md={{ size: 8, offset: 2 }}>
          <div style={divStyle2} className="card my-3 p-3 bg-warning">
              <h2>Bokningsbekräftelse</h2>
            <img
              style={imgStyle}
              className="card-img-top"
              src={chosenResidence.images}
              alt=""
            ></img>
            <div className="card-body row">
              <p style={pTagStyle1} className="col-6">
                {chosenResidence.address.streetName},{" "}
                {chosenResidence.address.streetNumber},
                {chosenResidence.address.city},
              </p>
              <p style={pTagStyle1} className="text-right col-6">
                {chosenResidence.price} / natt
              </p>
              <p style={pTagStyle4} className="text-right col-5">
                (Datum)
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default BookingConfirmation;
