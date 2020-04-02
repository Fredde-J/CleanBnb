import React, { useState, useEffect, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FilteringContext } from "../../contexts/FilteringContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CheckIn = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [dateString, setDateString] = useState(null);
  const [nestedModalIn, setNestedModalIn] = useState(false);
  const { updateFiltering } = useContext(FilteringContext);

  const toggleNestedIn = () => {
    setNestedModalIn(!nestedModalIn);
  };

  const logCheckInDate = e => {
    setCheckInDate(e);
  };

  useEffect(() => {
    if (checkInDate) {
      setDateString(checkInDate.toLocaleDateString());
    }
  }, [checkInDate]);

  useEffect(() => {
    if (dateString) {
      updateFiltering({ checkInDate: dateString });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateString]);

  return (
    <div className="col-6">
      <Button color="warning" onClick={toggleNestedIn} className="col-12">
        {dateString ? dateString : "Välj Datum.."}
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
