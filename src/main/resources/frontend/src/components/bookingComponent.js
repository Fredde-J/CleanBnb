import React, { useContext, useState, useEffect } from "react";
import { Form, FormGroup, Col, Row, Button } from "reactstrap";
import Calendar from "react-calendar";

import { ResidenceContext } from "../contexts/ResidenceContext";
import { UserContext } from "../contexts/UserContext";
import { BookingContext } from "../contexts/BookingContext";

import { divStyle1, imgStyle, topPStyle } from "../css/bookingComponentStyle";

const BookingComponent = (props) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [startDateString, setStartDateString] = useState(null);
  const [endDateString, setEndDateString] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [datePrice, setDatePrice] = useState(null);
  const [bookingInfoCorrect, setBookingInfoCorrect] = useState(false);

  const { chosenResidence } = useContext(ResidenceContext);
  const { user } = useContext(UserContext);
  const { bookingInfo, setBookingInfo } = useContext(BookingContext);

  const checkAvailability = (e) => {
    e.preventDefault();

    if (startDateString < chosenResidence.startDate) {
      console.log("Error 1");
      setErrorMessage(
        "Obs! Vänligen välj en start datum inom den tillgänliga perioden"
      );
      setDatePrice(null);
      setBookingInfoCorrect(false);
    } else if (endDateString > chosenResidence.endDate) {
      console.log("error 2");
      setErrorMessage(
        " Obs! Vänligen välj en slut datum inom den tillgänliga perioden"
      );
      setDatePrice(null);
      setBookingInfoCorrect(false);
    } else if (endDateString <= startDateString) {
      console.log("Error 3");
      setErrorMessage("Obs! slut datumet är mindre än start datumet");
      setDatePrice(null);
      setBookingInfoCorrect(false);
    } else if (!endDateString && !startDateString) {
      setErrorMessage("Obs! Välj ett datum för att gå vidare");
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
    console.log("In BookingComponenet. chosenResidence:", chosenResidence);
    
  }, [])
  useEffect(() => {
    if (bookingInfo.endDate) {
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
    <Row>
      <Col xs="12" md={{ size: 8, offset: 2 }}>
        <div style={divStyle1} className="card bg-warning my-3">
          <div className="card-body">
            <p style={topPStyle} className="col-12 text-center">
              Datum
            </p>
            <img
              style={imgStyle}
              src={chosenResidence.images}
              alt=""
              className="card-img-top"
            />
            <h6>Boendet är tillängligt från:</h6>
            <h6>
              {chosenResidence.startDate} till {chosenResidence.endDate}
            </h6>

            <p>Välj datum för inchecking </p>
            <Calendar onClickDay={logCheckInDate} value={checkInDate} />
            <br></br>
            <p>Välj datum för utcheckning </p>
            <Calendar onClickDay={logCheckOutDate} value={checkOutDate} />
            <Form className="my-3">
              <Row form>
                <Col xs="12" md="6">
                  <FormGroup>
                    {!datePrice ? <p></p> : <h1>Pris:{datePrice}kr</h1>}
                    <Button
                      onClick={checkAvailability}
                      color="secondary"
                      block
                      className="col-12 col-md-8 offset-md-2"
                    >
                      Bekräfta datum
                    </Button>
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
  );
};

export default BookingComponent;
