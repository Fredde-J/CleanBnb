import React, { useContext, useState, useEffect } from "react";
import { Form, FormGroup, Col, Row, Button } from "reactstrap";
import Calendar from "react-calendar";

import { ResidenceContext } from "../contexts/ResidenceContext";
import { UserContext } from "../contexts/UserContext";
import { BookingContext } from "../contexts/BookingContext";

import { cardStyle, imgStyle, pStyle } from "../css/bookingComponentStyle";

const BookingComponent = (props) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [startDateString, setStartDateString] = useState(null);
  const [endDateString, setEndDateString] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [datePrice, setDatePrice] = useState(null);
  const [bookingInfoCorrect, setBookingInfoCorrect] = useState(false);

  const { chosenResidence, setChosenResidence } = useContext(ResidenceContext);
  const { user } = useContext(UserContext);
  const { bookingInfo, setBookingInfo } = useContext(BookingContext);

  const checkAvailability = (e) => {
    e.preventDefault();

    if (startDateString < chosenResidence.startDate) {
      setErrorMessage(
        "Obs! Vänligen välj ett startdatum inom den tillgänliga perioden"
      );
      setDatePrice(null);
      setBookingInfoCorrect(false);
    } else if (endDateString > chosenResidence.endDate) {
      setErrorMessage(
        " Obs! Vänligen välj ett slutdatum inom den tillgänliga perioden"
      );
      setDatePrice(null);
      setBookingInfoCorrect(false);
    } else if (endDateString <= startDateString) {
      setErrorMessage("Obs! Slutdatumet är mindre än startdatumet");
      setDatePrice(null);
      setBookingInfoCorrect(false);
    } else if (checkInDate == null || checkOutDate == null) {
      setErrorMessage(
        "Obs! Välj ett startdatum och ett slutdatum för att gå vidare"
      );
      setBookingInfoCorrect(false);
    } else {
      let days = (checkOutDate - checkInDate) / 86400000;
      console.log(days);

      setDatePrice(days * chosenResidence.residence.price);
      console.log(chosenResidence.residence.price * days);

      setErrorMessage(null);
      setBookingInfoCorrect(true);
    }
  };

  const createBooking = (e) => {
    e.preventDefault();
    setBookingInfo({
      startDate: startDateString,
      endDate: endDateString,
      residenceId: chosenResidence.residence.residenceId,
      userId: user.userId,
      price: datePrice,
    });
  };

  const logCheckInDate = (e) => {
    setCheckInDate(e);
    setBookingInfoCorrect(false);
  };

  const logCheckOutDate = (e) => {
    setCheckOutDate(e);
    setBookingInfoCorrect(false);
  };

  useEffect(() => {
    if (!chosenResidence) {
      setChosenResidence(JSON.parse(localStorage.getItem("chosenResidence")));
    }
  }, []);

  useEffect(() => {
    console.log("In bookingComponent. bookingInfo from Context: ", bookingInfo);
    if (bookingInfo) {
      localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
      props.history.push(
        `/residences/${props.match.params.chosenresidenceId}/bookingConfirmation`
      );
    }
    // eslint-disable-next-line
  }, [bookingInfo]);

  useEffect(() => {
    if (checkInDate) {
      setStartDateString(checkInDate.toLocaleDateString());
    }
  }, [checkInDate]);

  useEffect(() => {
    if (checkOutDate) {
      setEndDateString(checkOutDate.toLocaleDateString());
    }
  }, [checkOutDate]);

  return (
    <>
      {chosenResidence ? (
        <Row>
          <Col xs="12" md={{ size: 8, offset: 2 }}>
            <div style={cardStyle} className="card bg-warning p-3 my-3">
              <img
                style={imgStyle}
                src={chosenResidence.residence.images}
                alt=""
                className="card-img-top"
              />
              <div className="card-body text-center">
                <p style={pStyle}>Boendet är tillängligt från:</p>
                <p style={pStyle} className="mb-3">
                  {chosenResidence.startDate} till {chosenResidence.endDate}
                </p>

                <p style={pStyle}>Välj datum för inchecking </p>
                <Calendar className="mx-auto" onClickDay={logCheckInDate} value={checkInDate} />
                <br></br>
                <p style={pStyle}>Välj datum för utcheckning </p>
                <Calendar className="mx-auto" onClickDay={logCheckOutDate} value={checkOutDate} />
                <Form className="my-3">
                  <Row form>
                    <Col xs="12">
                      <FormGroup>
                        {!datePrice ? <p></p> : <h1>Pris:{datePrice}kr</h1>}
                        {!bookingInfoCorrect && <Button
                          onClick={checkAvailability}
                          color="secondary"
                          block
                          className="col-12 col-md-8 offset-md-2"
                        >
                          Bekräfta datum
                        </Button>}
                      </FormGroup>

                      <FormGroup>
                        {bookingInfoCorrect ? (
                          <Button
                            onClick={createBooking}
                            color="secondary"
                            block
                            className="col-12 col-md-8 offset-md-2"
                          >
                            Gå vidare
                          </Button>
                        ) : (
                          <p>{errorMessage}</p>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default BookingComponent;
