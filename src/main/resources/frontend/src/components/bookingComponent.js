import React, { useContext } from "react";
import { ResidenceContext } from "../contexts/ResidenceContext";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
import { divStyle1, imgStyle, topPStyle } from "../css/bookingComponentStyle";
import { UserContext } from "../contexts/UserContext";

const BookingComponent = (props) => {
  const { chosenResidence } = useContext(ResidenceContext);
  const { user } = useContext(UserContext);
  console.log(user);

  if (!chosenResidence) {
    console.log("not here");
  }
  console.log(chosenResidence);

  const goToBookingConfirmation =()=>{
   props.history.push(
     `/account/${chosenResidence.residenceId}/bookingConfirmation`
   );
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
