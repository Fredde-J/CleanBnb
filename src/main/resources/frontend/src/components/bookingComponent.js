import React, { useContext, useState, useEffect } from "react";
import { ResidenceContext } from "../contexts/ResidenceContext";
import { Form, FormGroup, Col, Row, Button } from "reactstrap";
import { divStyle1, imgStyle, topPStyle } from "../css/bookingComponentStyle";
import { UserContext } from "../contexts/UserContext";
import Calendar from "react-calendar";

const BookingComponent = (props) => {
  const { chosenResidence } = useContext(ResidenceContext);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [startDateString, setStartDateString] = useState(null);
  const [endDateString, setEndDateString] = useState(null);
  const { user } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [datePrice, setDatePrice] = useState(null);
  const [bookingInfoCorrect, setBookingInfoCorrect] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    startDate: null,
    endDate: null,
    residenceId: null,
    userId: null,
    price: null,
  });

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
  useEffect(() => {
    if (bookingInfo.endDate) {
      fetchBookings(bookingInfo);
    }
    // eslint-disable-next-line
  }, [bookingInfo]);

  const fetchBookings = async (bookingInfo) => {
    let response = await fetch("/rest/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingInfo),
    });
    try {
      response = await response.json();
      props.history.push(
        `/residences/${chosenResidence.residence.residenceId}/bookingConfirmation`
      );
    } catch {
      console.log("Fel inmatning av uppgifter");
    }
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
