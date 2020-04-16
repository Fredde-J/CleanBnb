import React, { useContext, useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

import { BookingContext } from "../contexts/BookingContext";
import { ResidenceContext } from "../contexts/ResidenceContext";

import {
  cardStyle,
  imgStyle,
  cardTitleStyle,
  cardTextTop,
  cardTextBottom,
  buttonStyle,
} from "../css/bookingConfirmationStyle";

const BookingConfirmation = (props) => {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [resolve, setResolve] = useState(null);
  const { bookingInfo, setBookingInfo } = useContext(BookingContext);
  const { chosenResidence, setChosenResidence } = useContext(ResidenceContext);

  const confirmBooking = () => {
    setBookingConfirmed(true);
  };

  const backToBooking = () => {
    localStorage.removeItem("bookingInfo");
    setBookingInfo(null);
    console.log("bookingInfo removed.");

    props.history.push(
      `/residences/${chosenResidence.residence.residenceId}/booking`
    );
  };

  const backToStart = () => {
    localStorage.clear();
    setChosenResidence(null);
    setBookingInfo(null);
    props.history.push("/");
  };

  const createBooking = async (bookingInfo) => {
    // eslint-disable-next-line
    let res = await fetch("/rest/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    });
    setResolve(await res.json());
  };

  useEffect(() => {
    if (!bookingInfo) {
      setBookingInfo(JSON.parse(localStorage.getItem("bookingInfo")));
    }
    if (!chosenResidence) {
      setChosenResidence(JSON.parse(localStorage.getItem("chosenResidence")));
    }
  }, []);

  useEffect(() => {
    if (bookingConfirmed) {
      createBooking(bookingInfo);
    }
    // eslint-disable-next-line
  }, [bookingConfirmed]);

  return (
    <>
      {bookingInfo ? (
        <Row>
          <Col xs="12" md={{ size: 8, offset: 2 }}>
            <Card style={cardStyle} color="warning" className="my-5 p-3">
              <CardTitle style={cardTitleStyle} className="text-center">
                {bookingConfirmed
                  ? "Bokningsbekräftelse"
                  : "Bekräfta Bokningen"}
              </CardTitle>
              <CardImg
                style={imgStyle}
                top
                width="100%"
                src="/images/villa1.jpg"
                alt=""
                className=""
              />
              <CardBody>
                <CardText style={cardTextTop}>Datum</CardText>
                <CardText style={cardTextBottom}>
                  {bookingInfo.startDate} - {bookingInfo.endDate}
                </CardText>
                <CardText style={cardTextTop}>Pris</CardText>
                <CardText style={cardTextBottom}>
                  {bookingInfo.price} kr
                </CardText>
                <>
                  {resolve && (
                    <>
                      <CardText style={cardTextTop}>Bokningsid</CardText>
                      <CardText style={cardTextBottom}>
                        {resolve.bookingId}
                      </CardText>
                    </>
                  )}
                </>
                <>
                  {chosenResidence && (
                    <>
                      {" "}
                      <CardText style={cardTextTop}>Adress:</CardText>
                      <CardText style={cardTextBottom}>
                        {chosenResidence.residence.address.streetName}{" "}
                        {chosenResidence.residence.address.streetNumber}
                      </CardText>
                    </>
                  )}
                </>
                {bookingConfirmed ? (
                  <Button
                    style={buttonStyle}
                    color="dark"
                    outline
                    className="col-12 col-md-6 offset-md-3 mt-4"
                    onClick={backToStart}
                  >
                    Startsidan
                  </Button>
                ) : (
                  <>
                    {" "}
                    <Button
                      style={buttonStyle}
                      color="dark"
                      outline
                      className="col-12 col-md-5 mt-4"
                      onClick={backToBooking}
                    >
                      Tillbaka
                    </Button>
                    <Button
                      style={buttonStyle}
                      color="dark"
                      outline
                      className="col-12 col-md-5 offset-md-2 mt-4"
                      onClick={confirmBooking}
                    >
                      Bekräfta bokning
                    </Button>{" "}
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
export default BookingConfirmation;
