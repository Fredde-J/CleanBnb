import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Form, Label, FormGroup, Input } from "reactstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SearchFilter = () => {
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState(0);
  const [modal, setModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleDropDown = () => setDropdownOpen(prevState => !prevState);

  //When you click on a date it sets the date variable to
  //the date you clicked on and useEffect logs when date variable is changed
  //logDate MUST recieve something i.e "e" in this case
  const logDate = e => {
    setDate(e);
  };

  const logPrice = e => {
    setPrice(e.target.value);
  };

  const buttonCalender = {
    fontSize: "1em",
    margin: "20px auto",
    width: "100%"
  }
  const checkBox = {
    fontSize: "0.8em"
  }

  return (
    <div className="container">
      <div className="form-group">
        <p className="text-center">{price}</p>
        <div className="price-range row">
          <p className="col-3">min</p>
          <input
            style={{padding: "0"}}
            type="range"
            className="form-control-range col-6"
            id="prisRange"
            min="0"
            max="500"
            onChange={logPrice}
            value={price}
          />
          <p className="col-3">max</p>
        </div>

        <div className="calender-wrapper text-center row ">

          <div className="col-6 start-date">
            <Button style={buttonCalender} color="warning" onClick={toggle}>
              Startdatum
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                <Calendar onClickDay={logDate} value={date} />
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onClick={toggle}>
                  Do Something
                </Button>{" "}
                <Button color="danger" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>

          <div className="col-6 end-date">
            <Button style={buttonCalender} color="warning" onClick={toggle}>
              Slutdatum
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                <Calendar onClickDay={logDate} value={date} />
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onClick={toggle}>
                  Do Something
                </Button>{" "}
                <Button color="danger" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>

        </div>

        <Dropdown className="text-center" isOpen={dropdownOpen} toggle={toggleDropDown}>
          <DropdownToggle color="warning" caret>
            Sovplatser
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>1-5</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <div style={checkBox} className="row mt-3">
          <Form className="col-12">
            <FormGroup check>
              <Label className="col-4" check>
                <Input type="checkbox"/>{""}Badkar
              </Label>
              <Label className="col-4" check>
                <Input type="checkbox"/>{""}Kök
              </Label>
              <Label className="col-4" check>
                <Input type="checkbox"/>{""}AC
              </Label>
            </FormGroup>
          </Form>
        </div>

        <div style={checkBox} className="row mt-3">
          <Form className="col-12">
            <FormGroup check>
              <Label className="col-4" check>
                <Input type="checkbox"/>{""}Wifi
              </Label>
              <Label className="col-4" check>
                <Input type="checkbox"/>{""}Balkong
              </Label>
              <Label className="col-4" check>
                <Input type="checkbox"/>{""}Tvättmaskin
              </Label>
            </FormGroup>
          </Form>
        </div>
        
      </div>
    </div>
  );
};

export default SearchFilter;
