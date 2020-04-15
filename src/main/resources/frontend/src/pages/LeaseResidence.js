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
import { UserContext } from "../contexts/UserContext";

import "react-calendar/dist/Calendar.css";
import { headStyle, semiHeadStyle } from "../css/addResidenceFormStyle.js";
import {
  getNewAddressId,
  getNewAmenityId,
  getNewResidenceId,
  getNewAvailabilityId,
} from "../components/createEntities";

const LeaseResidence = (props) => {
  const { user } = useContext(UserContext);
  let images = [];

  const filesChange = async (fileList) => {
    const formData = new FormData();

    if (!fileList.length) return;

    images = []

    Array.from(Array(fileList.length).keys()).map((x) => {
      formData.append("files", fileList[x], fileList[x].name);
    });

    let response = await fetch("/api/upload-files", {
      method: "POST",
      body: formData,
    }).catch(console.warn);

    response = await response.json();
    console.log('response', response)
    images = response;
  };

  const [availabilty, setAvailabilty] = useState({
    endDate: "",
    startDate: "",
    residenceId: 0,
  });
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
    images: null,
    rooms: 0,
    size: 0,
    addressId: 0,
    beds: 0,
    amenityId: 0,
    userId: 0,
    price: 0,
  });
  const [addressToCreate, setAddressToCreate] = useState({
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
  const updateAvailability = (update) => {
    setAvailabilty({
      ...availabilty,
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!user) {
      props.history.push("/preform-login");
    } else {
      let addressId = await getNewAddressId(addressToCreate);
      residence.addressId = addressId;
      residence.userId = user.userId;
      console.log("Residence object after getNewaddressId", residence);

      residence.images = images[0];
      console.log('images',images, 'residence-images', residence.images)

      let amenityId = await getNewAmenityId(amenity);
      residence.amenityId = amenityId;
      console.log("Residence object after getNewAmenityId", residence);

      let residenceId = await getNewResidenceId(residence);
      availabilty.residenceId = residenceId;
      console.log("ResidenceId after getNewResidenceId", residenceId);

      let availabiltyFromDb = await getNewAvailabilityId(availabilty);
      console.log("availabilityId after getNewAvailability", availabiltyFromDb);
    }
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
                <Col xs={12} md={4} l={3} className="mb-3">
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
                <CheckIn onAvailabilityUpdate={updateAvailability}></CheckIn>
                <CheckOut onAvailabilityUpdate={updateAvailability}></CheckOut>
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
                    onChange={(e) => updateResidence({ beds: +e.target.value })}
                    id="beds"
                    required
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Label for="rooms">Antal rum</Label>
                  <Input
                    value={residence.rooms}
                    type="number"
                    onChange={(e) =>
                      updateResidence({ rooms: +e.target.value })
                    }
                    id="rooms"
                    required
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Label for="rooms">Kvadratmeter</Label>
                  <Input
                    value={residence.size}
                    type="number"
                    onChange={(e) => updateResidence({ size: +e.target.value })}
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
                  onChange={(e) => updateResidence({ price: +e.target.value })}
                  id="price"
                  required
                />
              </Col>

              <CardHeader style={semiHeadStyle} className="mb-4 mt-4">
                Bekvämligheter
              </CardHeader>

              <CheckBoxes onAmenityUpdate={updateAmenity}></CheckBoxes>

              <Col className="mb-4 mt-4">
                <Label for="files">Ladda upp bild på bostad:</Label>
                <Input
                  type="file"
                  name="file"
                  id="files"
                  accept=".png,.jpg,.jpeg,.gif,.bmp,.jfif"
                  multiple
                  required
                  onChange={(e) => filesChange(e.target.files)}
                />
              </Col>
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