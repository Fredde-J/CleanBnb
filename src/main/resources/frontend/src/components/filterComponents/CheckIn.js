import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CheckIn = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [nestedModalIn, setNestedModalIn] = useState(false);

  const toggleNestedIn = () => {
    setNestedModalIn(!nestedModalIn);
  };

   const logCheckInDate = e => {
     setCheckInDate(e);
  };

  useEffect(() => {
    console.log("CheckIn: ", checkInDate);
    
  }, [checkInDate])
  


  return (
    <div className="col-6">
      <Button color="warning" onClick={toggleNestedIn} className="col-12">
        Incheckning
      </Button>
      <Modal isOpen={nestedModalIn} toggle={toggleNestedIn}>
        <ModalHeader>Välj Datum för Incheckning</ModalHeader>
        <ModalBody>
          <Calendar onClickDay={logCheckInDate} value={checkInDate} />
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={toggleNestedIn}>
            Done
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CheckIn;
