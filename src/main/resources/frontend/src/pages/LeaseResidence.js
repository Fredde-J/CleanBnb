import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader } from 'reactstrap';
import CheckIn from "../components/filterComponents/CheckIn";
import CheckOut from "../components/filterComponents/CheckOut";
import CheckBoxes from "../components/filterComponents/CheckBoxes";


import "react-calendar/dist/Calendar.css";


const LeaseResidence = () => {

  const headStyle = {
    fontSize: "2.2em"
  }

  const semiHeadStyle = {
    fontSize: "1.1em",
    color: "warning",
    fontStyle: "oblique",
  }

  const btnStyle = {

  }

 

  return ( 
      <div className="row">
        <div className="col ">
          <Card className="Card bg-white mt-3 mb-3">
            <CardBody>

            <p style={headStyle} className="text-center">Hyr ut bostad</p>

            <CardHeader style={semiHeadStyle}className="mb-4">Adress</CardHeader>

            <Row form className="">
              <Col xs={6} md={6}>
                <FormGroup className="">
                  <Label for="street">Gata</Label>
                  <Input type="text" id="street" />
                </FormGroup>
              </Col>
              <Col xs={6} md={6}>
                <FormGroup>
                  <Label for="street">Stad</Label>
                  <Input type="text" id="city" />
                </FormGroup>
              </Col>
            </Row>

            <Row form className="">
              <Col xs={6} md={6}>
                <FormGroup className="">
                  <Label for="zip-code">Postnummer</Label>
                  <Input type="text" id="zip-code" />
                </FormGroup>
              </Col>
              <Col xs={6} md={6}>
                <FormGroup>
                  <Label for="country">Land</Label>
                  <Input type="text" id="country" />
                </FormGroup>
              </Col>
            </Row>

            <CardHeader style={semiHeadStyle} className="mb-4">Tillgänglighet</CardHeader>

            <Row form className="">
              <Label className="col-6 text-left mb-2">Startdatum</Label>
              <Label className="col-6 text-left mb-2">Slutdatum</Label>
              <CheckIn></CheckIn>
              <CheckOut></CheckOut>
            </Row>

            <CardHeader style={semiHeadStyle} className="mb-4 mt-4">Utrymme</CardHeader>

            <Row form>
              <Col>
               <Label for="beds">Antal sängar</Label>
               <Input type="text" id="beds" />
              </Col>
              <Col>
               <Label for="rooms">Antal rum</Label>
               <Input type="text" id="rooms" />
              </Col>
            </Row>

            <CardHeader style={semiHeadStyle} className="mb-4 mt-4">Bekvämligheter</CardHeader>
            
            <CheckBoxes></CheckBoxes>

            <Button className="col-12" color="warning">Lista bostad!</Button>
            </CardBody>
          
          </Card>
          </div>
        

      </div>

   );
}
 
export default LeaseResidence;
