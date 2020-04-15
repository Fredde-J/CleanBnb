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
import { ResidenceContext } from "../contexts/ResidenceContext";
import { BookingContext } from "../contexts/BookingContext";
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
  const { chosenResidence } = useContext(ResidenceContext);
  const { bookingInfo } = useContext(BookingContext);

  const confirmBooking = () => {
    setBookingConfirmed(true);
  };

  const createBooking = async (bookingInfo) => {
    // eslint-disable-next-line
    await fetch("/rest/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    });
  };

  useEffect(() => {
    console.log(bookingInfo);
  }, [])
  useEffect(() => {
    if (bookingConfirmed) {
      createBooking(bookingInfo);
    }
    // eslint-disable-next-line
  }, [bookingConfirmed]);

  console.log(chosenResidence);

  return (
    <Row>
      <Col xs="12" md={{ size: 8, offset: 2 }}>
        <Card style={cardStyle} color="warning" className="my-5 p-3">
          <CardTitle style={cardTitleStyle} className="text-center">
            {bookingConfirmed ? "Bokningsbekräftelse" : "Bekräfta Bokningen"}
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
            <CardText style={cardTextBottom}>23 mars - 28 mars 2020</CardText>
            <CardText style={cardTextTop}>Pris</CardText>
            <CardText style={cardTextBottom}>2000 kr</CardText>
            <CardText style={cardTextTop}>Bokningsid</CardText>
            <CardText style={cardTextBottom}>zhzhzhzhz</CardText>
            <CardText style={cardTextTop}>Adress:</CardText>
            <CardText style={cardTextBottom}>Lertegelv 7B</CardText>
            {bookingConfirmed ? (
              <Button
                style={buttonStyle}
                color="dark"
                outline
                className="col-12 col-md-6 offset-md-3 mt-4"
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
  );
};
export default BookingConfirmation;
