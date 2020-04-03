import React, { useState, useEffect, useContext } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardHeader } from 'reactstrap';
import CheckIn from "../components/filterComponents/CheckIn";
import CheckOut from "../components/filterComponents/CheckOut";
import CheckBoxes from "../components/filterComponents/CheckBoxes";
import { UserContext } from "../contexts/UserContextProvider"


import "react-calendar/dist/Calendar.css";
import { headStyle, semiHeadStyle} from '../css/addResidenceFormStyle.js'


const LeaseResidence = () => {

  // Setting all the residence object values from form 
  // to be able to POST and create a Residence in the DB
  const [rooms, setRooms] = useState(null)
  const [size, setSize] = useState(null)
  //const [address, setAddress] = useState(null)
  const [beds, setBeds] = useState(null)
  const [amenity, setAmenity] = useState(null)
 // const [user, setUser] = useState(null)
  const [price, setPrice] = useState(null)

  // Setting all the address object values from form
  // to be able to POST and create an Address in the DB
  const [streetName, setStreetName] = useState(null)
  const [streetNumber, setStreetNumber] = useState(null)
  const [zipCode, setZipCode] = useState(null)
  const [city, setCity] = useState(null)
  const [country, setCountry] = useState(null)

  // importing user from usercontext to see which user that is logged in
  const {user} = useContext(UserContext)
  
  const newResidence = (e) => {
    
    e.preventDefault()

    const address = {
      city,
      country,
      streetName,
      streetNumber,
      zipCode,
    }

    const residence = {
      //images,
      rooms,
      size,
      address,
      beds,
      amenity,
      user: user.userId,
      price
    }

    // TODO: fix addressContextProvider and update so I can get a hold of the id
    
    newAddress(address);

    async function newAddress (address){

      let res = await fetch('/rest/addresses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(address)
      })
      res = await res.json()
      
      residence.address = res.addressId;
    }

    console.log(residence)

    



   
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
