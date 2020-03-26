import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SearchFilter = () => {
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  //When you click on a date it sets the date variable to
  //the date you clicked on and useEffect logs when date variable is changed
  //logDate MUST recieve something i.e "e" in this case
  const logDate = e => {
    setDate(e);
  };

  const showOrNot = () => {
    setShow(!show);
  };

  // useEffect(() =>{
  //   console.log(date)
  // },[date])

  const logPrice = e => {
    setPrice(e.target.value);
  };

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
        <div className="calender-wrapper row">
          <div className="col-6 start-date p-0">
            <Button color="warning" onClick={toggle}>
              Välj Startdatum
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
          <div className="col-6 end-date p-0">
            <Button color="warning" onClick={toggle}>
              Välj Slutdatum
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
      </div>
      <div className="form-group"></div>
    </div>
  );
};

export default SearchFilter;
