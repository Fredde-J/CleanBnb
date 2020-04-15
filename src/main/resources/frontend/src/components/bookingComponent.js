import React, { useContext, useState, useEffect } from "react";
import { ResidenceContext } from "../contexts/ResidenceContext";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
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
  const [price, setPrice] = useState(null);
  const [bookingInfoCorrect,setBookingInfoCorrect] = useState(false)
  const [bookingInfo, setBookingInfo] = useState({
    startDate: null,
    endDate: null,
    residenceId: null,
    userId: null,
  });

  const checkAvailability = (e) => {
    e.preventDefault();

     if (startDateString < chosenResidence.startDate) {
       console.log("Error 1");
       setErrorMessage(
         "Obs! Vänligen välj en start datum inom den tillgänliga perioden"
       );
       setPrice(null);
       setBookingInfoCorrect(false)
     } else if (endDateString > chosenResidence.endDate) {
       console.log("error 2");
       setErrorMessage(
         " Obs! Vänligen välj en slut datum inom den tillgänliga perioden"
       );
       setPrice(null);
       setBookingInfoCorrect(false);
     } else if (endDateString <= startDateString) {
       console.log("Error 3");
       setErrorMessage("Obs! slut datumet är mindre än start datumet");
       setPrice(null);
       setBookingInfoCorrect(false);
     } else {
       let days = (checkOutDate - checkInDate) / 86400000;
       console.log(days);

       setPrice(days * chosenResidence.residence.price);
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
      });

      props.history.push(
        `/residences/${chosenResidence.residence.residenceId}/bookingConfirmation`
      );
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

  useEffect(() => {
    if (startDateString) {
      console.log(startDateString);
    }
    // eslint-disable-next-line
  }, [startDateString]);
  useEffect(() => {
    if (endDateString) {
      console.log(endDateString);
    }
    // eslint-disable-next-line
  }, [endDateString]);
  useEffect(() => {
    console.log(errorMessage);
    // eslint-disable-next-line
  }, [errorMessage]);
  useEffect(() => {
    console.log(price);
  }, [price]);
  useEffect(() =>{
    console.log(bookingInfoCorrect)

  },[bookingInfoCorrect])

  return (
    <Row>
      <Col xs="12" md={{ size: 8, offset: 2 }}>
        <div style={divStyle1} className="card bg-warning my-3">
          <div className="card-body">
            <p style={topPStyle} className="col-12 text-center">
              Dina Uppgifter
            </p>
            <img
              style={imgStyle}
              src={chosenResidence.images}
              alt=""
              className="card-img-top"
            />
            <p></p>
            <p>Välj datum för in checking {chosenResidence.startDate}</p>
            <Calendar onClickDay={logCheckInDate} value={checkInDate} />
            <p>Välj datum för ut checkning {chosenResidence.endDate}</p>
            <Calendar onClickDay={logCheckOutDate} value={checkOutDate} />

            <Form className="my-3" >
              <Row form>
                <Col xs="12" md="6">
                  <FormGroup>
                    {!price ? <p></p> : <h1>Pris:{price}kr</h1>}
                    <Button
                      onClick={checkAvailability}
                      color="secondary"
                      block
                      className="col-12 col-md-8 offset-md-2"
                    >
                      Bekräfta datum
                    </Button>
                  </FormGroup>

                  <FormGroup >
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
