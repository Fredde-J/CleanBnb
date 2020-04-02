import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader } from 'reactstrap';
import CheckIn from "../components/filterComponents/CheckIn";
import CheckOut from "../components/filterComponents/CheckOut";
import CheckBoxes from "../components/filterComponents/CheckBoxes";


import "react-calendar/dist/Calendar.css";
import { headStyle, semiHeadStyle} from '../css/addResidenceFormStyle.js'


const LeaseResidence = () => {

  const [rooms, setRooms] = useState(null)
  const [size, setSize] = useState(null)
  const [address_address_id, setAddres_addres_id] = useState(null)
  const [beds, setBeds] = useState(null)
  const [amenity_amenity_id, setAmenity_amenity_id] = useState(null)
  const [user_user_id, setUser_user_id] = useState(null)
  const [price, setPrice] = useState(null)

  const [street_name, setStreetName] = useState(null)
  const [street_number, setStreetNumber] = useState(null)
  const [zip_code, setZipCode] = useState(null)
  const [city, setCity] = useState(null)
  const [country, setCountry] = useState(null)
  
  const newResidence = async (e) => {
    
    e.preventDefault()

    

      const address = {
        street_name,
        street_number,
        zip_code,
        city,
        country
      }

    const residence = {
      //images,
      rooms,
      size,
      address_address_id,
      beds,
      amenity_amenity_id,
      user_user_id,
      price
    }

    console.log('Address:', address)
    console.log('Residence:', residence)

    // let res = await fetch('/rest/residences', {
    //   method: "POST",
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(residence)
    // })
    // res = await res.json()
    
  }

  return ( 
      <div className="row">
        <div className="col ">
          <Form onSubmit={newResidence}>
          <Card className="Card bg-white mt-3 mb-3">
            <CardBody>

            <p style={headStyle} className="text-center">Hyr ut bostad</p>

            <CardHeader style={semiHeadStyle}className="mb-4">Adress</CardHeader>

            <Row form className="">
              <Col xs={12} md={4} className="mb-3">
                  <Label for="street">Gata</Label>
                  <Input type="text" onChange={e => setStreetName(e.target.value)} id="street" required />
              </Col>
              <Col xs={6} md={4}>
                <FormGroup className="">
                  <Label for="street-number">Gatunummer</Label>
                  <Input type="text" onChange={e => setStreetNumber(e.target.value)} id="street-number" required />
                </FormGroup>
              </Col>
              <Col xs={6} md={4} className="">
                <FormGroup>
                  <Label for="zip-code">Postnummer</Label>
                  <Input type="text" onChange={e => setZipCode(e.target.value)} id="zip-code" required/>
                  
                </FormGroup>
              </Col>
            </Row>

            <Row form className="">
              <Col xs={6} md={6}>
                <FormGroup className="">
                  <Label for="street">Stad</Label>
                  <Input type="text" onChange={e => setCity(e.target.value)} id="city" required/>
                </FormGroup>
              </Col>
              <Col xs={6} md={6}>
                <FormGroup>
                  <Label for="country">Land</Label>
                  <Input type="text" onChange={e => setCountry(e.target.value)} id="country" required />
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
              <Col xs={6} md={4} className="mb-3">
               <Label for="beds">Antal sängar</Label>
               <Input type="number" onChange={e => setBeds(e.target.value)} id="beds" required/>
              </Col>
              <Col xs={6} md={4}>
               <Label for="rooms">Antal rum</Label>
               <Input type="number" onChange={e => setRooms(e.target.value)} id="rooms" required/>
              </Col>
              <Col xs={6} md={4}>
               <Label for="rooms">Kvadratmeter</Label>
               <Input type="number" onChange={e => setSize(e.target.value)} id="rooms" required/>
              </Col>
            </Row>

            <CardHeader style={semiHeadStyle} className="mb-4 mt-4">Pris</CardHeader>
            <Col>
              <Label for="price">Pris per natt</Label>
              <Input type="number" onChange={e => setPrice(e.target.value)} id="price" required/>
            </Col>

            <CardHeader style={semiHeadStyle} className="mb-4 mt-4">Bekvämligheter</CardHeader>
            
            <CheckBoxes></CheckBoxes>

            <Button className="col-12" color="warning">Lista bostad!</Button>
            </CardBody>
          
          </Card>
          </Form>
          </div>
        

      </div>

   );
}
 
export default LeaseResidence;
