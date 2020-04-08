import React, { useContext,useState,useEffect } from "react";
import { ResidenceContext } from "../contexts/ResidenceContext";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
import { divStyle1, imgStyle, topPStyle } from "../css/bookingComponentStyle";
import { UserContext } from "../contexts/UserContext";
import {BookingContext} from "../contexts/BookingContext";

const BookingComponent = (props) => {
  const { chosenResidence } = useContext(ResidenceContext);
  const { user } = useContext(UserContext);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [residenceId, setResidenceId] = useState("");
  const [userId, setUserId] = useState("");
  const {setBooking} = useContext(BookingContext)
  
  const bookingInfo = {
    startDate,
    endDate,
    residenceId,
    userId,
  };

 

  if (!chosenResidence) {
    console.log("not here");
  }
  console.log(chosenResidence);

  const goToBookingConfirmation =async(e)=>{
    e.preventDefault();
    
     setStartDate("2020-05-05")
     setEndDate("2020-05-10")
     setResidenceId(chosenResidence.residenceId)
     setUserId(user.userId)
    fetchBookings(bookingInfo);
  
  }
   useEffect(() => {
     console.log(bookingInfo);
   }, [bookingInfo]);

 

  const fetchBookings = async bookingInfo =>{
    let response = await fetch("/rest/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingInfo),
    });
      try {
            response = await response.json();
            setBooking(response);
           // props.history.push(
           //   `/account/${chosenResidence.residenceId}/bookingConfirmation`
            //);
          } catch {
        console.log("Fel inmatning av uppgifter");
      }
  }
  

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
            <Form className="my-3">
              <Row form>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label for="name">Förnamn</Label>
                    {user ? (
                      <Input
                        type="text"
                        name="name"
                        id="firstName"
                        value={user.firstName}
                      />
                    ) : (
                      <Input type="text" name="name" id="firstName" />
                    )}
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Efternamn:</Label>
                    {user ? (
                      <Input
                        type="lastname"
                        name="lastname"
                        id="lastName"
                        value={user.lastName}
                      />
                    ) : (
                      <Input type="lastname" name="lastname" id="lastName" />
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label for="email">Email:</Label>

                    {user ? (
                      <Input
                        type="email"
                        name="email"
                        id="emailAdress"
                        value={user.username}
                      />
                    ) : (
                      <Input type="email" name="email" id="emailAdress" />
                    )}
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label for="phone">Telefon:</Label>
                    <Input
                      type="number"
                      name="number"
                      id="phoneNumber"
                      display="inline-block"
                      
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Button
                color="secondary"
                block
                className="col-12 col-md-8 offset-md-2"
                onClick={goToBookingConfirmation}
              >
                Fortsätt
              </Button>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BookingComponent;
