import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CheckOut = () => {
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [nestedModalOut, setNestedModalOut] = useState(false);

  const toggleNestedOut = () => {
    setNestedModalOut(!nestedModalOut);
  };

  const logCheckOutDate = e => {
    setCheckOutDate(e);
  };

  useEffect(() => {
    console.log("CheckOut: ", checkOutDate);
  }, [checkOutDate]);

  return (
    <div className="col-6">
      <Button color="warning" onClick={toggleNestedOut} className="col-12">
        Utcheckning
      </Button>
      <Modal isOpen={nestedModalOut} toggle={toggleNestedOut}>
        <ModalHeader>Välj Datum för Utcheckning</ModalHeader>
        <ModalBody>
          <Calendar onClickDay={logCheckOutDate} value={checkOutDate} />
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={toggleNestedOut}>
            Done
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CheckOut;
