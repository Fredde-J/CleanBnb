import React, { useState } from "react";
import { Col } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import {
  divStyle1,
  imgStyle,
  topPStyle,
  bottomPStyle,
} from "../css/bookingCardStyle";

const BookingCard = ({ booking }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let amenityArray = [];

  if (booking) {
    Object.entries(booking.residence.amenity).forEach((array, i) => {
      if (i !== 0) {
        if (array[1]) {
          amenityArray.push(
            array[0].charAt(0).toUpperCase() + array[0].slice(1)
          );
        }
      }
    });
  }

  return (
    <Col xs="12" onClick={toggle}>
      <div style={divStyle1} className="card my-3 p-2">
        <img
          style={imgStyle}
          src={booking.residence.images}
          alt=""
          className="card-img-top"
        />
        <div
          className="card-body"
        >
          <p style={topPStyle} className="col-8">
            {booking.residence.address.city}
          </p>

          <p style={bottomPStyle} className="col-4">
            {booking.residence.beds} sängar
          </p>
          <p style={bottomPStyle} className="col-12">
            {booking.startDate} till {booking.endDate}
          </p>
        </div>
      </div>
      <Modal className="bg-warning border-0" isOpen={modal} toggle={toggle}>
        <ModalHeader className="bg-warning border-0" toggle={toggle}>
          Bokning för: {booking.residence.address.streetName}{" "}
          {booking.residence.address.streetNumber}
          {", "}
          {booking.residence.address.zipCode} {booking.residence.address.city}
        </ModalHeader>
        <ModalBody className="bg-warning border-0">
          <img
            style={imgStyle}
            src={booking.residence.images}
            alt=""
            className="card-img-top mb-4"
          />
          <h2 style={topPStyle}>
            Bokare: {booking.user.firstName} {booking.user.lastName}
          </h2>
          <h3 style={topPStyle}>
            {" "}
            Period: {booking.startDate} - {booking.endDate}
          </h3>
          <h3 style={topPStyle}> Pris: {booking.price}kr</h3>
          <h4 style={topPStyle} className="mt-4 mb-4">
            Lägenhets information
          </h4>
          <p style={bottomPStyle}>Storlek: {booking.residence.size}kvm</p>
          <p style={bottomPStyle}>Antal rum: {booking.residence.rooms} </p>
          <p style={bottomPStyle}>Sängar: {booking.residence.beds}</p>
          <p style={bottomPStyle}>Bekvämligheter</p>
          <p style={bottomPStyle}>{amenityArray.join(", ")}</p>
        </ModalBody>
        <ModalFooter className="bg-warning border-0">
          <Link
            to={"/residences/" + booking.residence.residenceId}
            className="nav-link"
          >
            <Button color="outline-dark">Gå till lägenhetssidan</Button>{" "}
          </Link>
          <Button color="outline-dark" onClick={toggle}>
            Stäng
          </Button>
        </ModalFooter>
      </Modal>
    </Col>
  );
};
export default BookingCard;
