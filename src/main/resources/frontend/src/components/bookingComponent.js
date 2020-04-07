import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Button,
  CardImg,
} from "reactstrap";
import {
  divStyle1,
  imgStyle,
  residence,
  topPStyle,
} from "../css/ResidenceCardStyle";

const bookingComponent = () => {
  //const goToBookingPage = id => {
  //history.push(`/residences/${id}`);

  return (
    <div style={divStyle1} className="card col-sm-9 col-md-6 offset-md-3">
      <div className="card-body row">
        <p style={topPStyle} className="col-12 text-center">
          Boka bostad
        </p>
        <div style={{ imgStyle }} className="Card bg-warning my-3">
          <img src="/images/lägenhet1.jpg" alt="" className="card-img-top" />
          <div className="card-body row">
            <p style={topPStyle} className="col-3 text-center"></p>
            <h5 className="card-title col-6 text-center">
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="name">Förnamn</Label>
                      <Input type="text" name="name" id="firstName" />
                      <div className="bookingStyle"></div>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="lastName">Efternamn:</Label>
                      <Input type="lastname" name="lastname" id="lastName" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="phone">Telefon:</Label>
                      <Input type="number" name="number" id="phoneNumber" display="inline-block" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="email">Email:</Label>
                      <Input type="email" name="email" id="emailAdress" />
                    </FormGroup>
                  </Col>
                </Row>

                <Button color="secondary" size="lg" block>
                  Fortsätt
                </Button>
              </Form>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookingComponent;
