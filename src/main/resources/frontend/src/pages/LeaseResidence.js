import React, { useState, useEffect, useContext } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import CheckIn from "../components/filterComponents/CheckIn";
import CheckOut from "../components/filterComponents/CheckOut";
import CheckBoxes from "../components/filterComponents/CheckBoxes";
import { UserContext } from "../contexts/UserContextProvider";
//import { AmenityContext   } from "../contexts/AmenityContextProvider"

import "react-calendar/dist/Calendar.css";
import { headStyle, semiHeadStyle } from "../css/addResidenceFormStyle.js";

const LeaseResidence = () => {
  const { user } = useContext(UserContext);
  //const {amenity, resetAmenity} = useContext(AmenityContext);

  // const [rooms, setRooms] = useState(null);
  // const [size, setSize] = useState(null);
  // const [beds, setBeds] = useState(null);
  // const [price, setPrice] = useState(null);

  // const [newResidence, setNewResidence] = useState({
  //   images: "imageslägenhet1.jpg",
  //   rooms: 0,
  //   size: 0,
  //   beds: 0,
  //   user: 0,
  //   price: 0,
  //   address: {
  //     city: "",
  //     country: "",
  //     streetName: "",
  //     streetNumber: "",
  //     zipCode: "",
  //   },
  //   amenity: {
  //     badkar: false,
  //     balkong: false,
  //     diskmaskin: false,
  //     frys: false,
  //     kyl: false,
  //     tv: false,
  //     tvättmaskin: false,
  //     wifi: false,
  //   },
  // });

  const [amenity, setAmenity] = useState({
    badkar: false,
    balkong: false,
    diskmaskin: false,
    frys: false,
    kyl: false,
    tv: false,
    tvättmaskin: false,
    wifi: false,
  });

  const [residence, setResidence] = useState({
    images: "imageslägenhet1.jpg",
    rooms: 0,
    size: 0,
    address: 0,
    beds: 0,
    amenity: 0,
    user: 0,
    price: 0,
  });

  const [addressToCreate, setAddressToCreate] = useState({
    id: null,
    city: "",
    country: "",
    streetName: "",
    streetNumber: "",
    zipCode: "",
  });
  
  const updateAddress = (update) => {
    setAddressToCreate({
      ...addressToCreate,
      ...update,
    });
  };
  const updateAmenity = (update) => {
    setAmenity({
      ...amenity,
      ...update,
    });
  };
  const updateResidence = (update) => {
    setResidence({
      ...residence,
      ...update,
    });
  };

  // useEffect(()=>{
  //   console.log(newResidence)
  // },[newResidence])

  const newAddress = async (address) => {
    let res = await fetch("/rest/addresses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(address),
    });
    res = await res.json();
    //updateResidence({address: res.addressId})
    
    //setAddressToCreate(res)
    residence.address = res.addressId;
    residence.user = user.userId;
  };

  const newAmenity = async (amenity) => {
    let res = await fetch("/rest/amenities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(amenity),
    });
    res = await res.json();
    //updateResidence({ amenity: res.amenityId });
    //console.log('residence i newAmenity', residence)
    residence.amenity = res.amenityId
    
  };

  const residenceToCreate = async (residence) => {
    let res = await fetch("/rest/residences", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(residence),
    });
    res = await res.json();
    //console.log(' residence res', res)
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log('residence först', residence)
    newAddress(addressToCreate).then(()=>{
      console.log('residence innan amenity ', residence)
      newAmenity(amenity).then(()=>{
        setTimeout(residenceToCreate(residence),3000)
        console.log('residence innan skapa residence', residence)
        //residenceToCreate(residence);
      })
    })
    // console.log(amenity);
    // console.log("Residence", residence);
  };

  return (
    <div className="row">
      <div className="col ">
        <Form onSubmit={onSubmitHandler}>
          <Card className="Card bg-white mt-3 mb-3">
            <CardBody>
              <p style={headStyle} className="text-center">
                Hyr ut bostad
              </p>

              <CardHeader style={semiHeadStyle} className="mb-4">
                Adress
              </CardHeader>

              <Row form className="">
                <Col xs={12} md={4} className="mb-3">
                  <Label for="street">Gata</Label>
                  <Input
                    type="text"
                    value={addressToCreate.streetName}
                    onChange={(e) =>
                      updateAddress({ streetName: e.target.value })
                    }
                    id="street"
                    required
                  />
                </Col>
                <Col xs={6} md={4}>
                  <FormGroup className="">
                    <Label for="street-number">Gatunummer</Label>
                    <Input
                      value={addressToCreate.streetNumber}
                      type="text"
                      onChange={(e) =>
                        updateAddress({ streetNumber: e.target.value })
                      }
                      id="street-number"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col xs={6} md={4} className="">
                  <FormGroup>
                    <Label for="zip-code">Postnummer</Label>
                    <Input
                      value={addressToCreate.zipCode}
                      type="text"
                      onChange={(e) =>
                        updateAddress({ zipCode: e.target.value })
                      }
                      id="zip-code"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form className="">
                <Col xs={6} md={6}>
                  <FormGroup className="">
                    <Label for="street">Stad</Label>
                    <Input
                      value={addressToCreate.city}
                      type="text"
                      onChange={(e) => updateAddress({ city: e.target.value })}
                      id="city"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col xs={6} md={6}>
                  <FormGroup>
                    <Label for="country">Land</Label>
                    <Input
                      value={addressToCreate.country}
                      type="text"
                      onChange={(e) =>
                        updateAddress({ country: e.target.value })
                      }
                      id="country"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <CardHeader style={semiHeadStyle} className="mb-4">
                Tillgänglighet
              </CardHeader>

              <Row form className="">
                <Label className="col-6 text-left mb-2">Startdatum</Label>
                <Label className="col-6 text-left mb-2">Slutdatum</Label>
                <CheckIn></CheckIn>
                <CheckOut></CheckOut>
              </Row>

              <CardHeader style={semiHeadStyle} className="mb-4 mt-4">
                Utrymme
              </CardHeader>

              <Row form>
                <Col xs={6} md={4} className="mb-3">
                  <Label for="beds">Antal sängar</Label>
                  <Input
                    value={residence.beds}
                    type="number"
                    onChange={(e) => updateResidence({ beds: e.target.value })}
                    id="beds"
                    required
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Label for="rooms">Antal rum</Label>
                  <Input
                    value={residence.rooms}
                    type="number"
                    onChange={(e) => updateResidence({ rooms: e.target.value })}
                    id="rooms"
                    required
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Label for="rooms">Kvadratmeter</Label>
                  <Input
                    value={residence.size}
                    type="number"
                    onChange={(e) => updateResidence({ size: e.target.value })}
                    id="rooms"
                    required
                  />
                </Col>
              </Row>

              <CardHeader style={semiHeadStyle} className="mb-4 mt-4">
                Pris
              </CardHeader>
              <Col>
                <Label for="price">Pris per natt</Label>
                <Input
                  value={residence.price}
                  type="number"
                  onChange={(e) => updateResidence({ price: e.target.value })}
                  id="price"
                  required
                />
              </Col>

              <CardHeader style={semiHeadStyle} className="mb-4 mt-4">
                Bekvämligheter
              </CardHeader>

              <CheckBoxes onAmenityUpdate={updateAmenity}></CheckBoxes>

              <Button className="col-12" color="warning">
                Lista bostad!
              </Button>
            </CardBody>
          </Card>
        </Form>
      </div>
    </div>
  );
};

export default LeaseResidence;
