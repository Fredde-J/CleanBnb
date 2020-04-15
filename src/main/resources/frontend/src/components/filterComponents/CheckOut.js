import React, { useState, useEffect, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ResidenceContext } from "../../contexts/ResidenceContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CheckOut = ({onAvailabilityUpdate}) => {
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [dateString, setDateString] = useState(null);
  const [nestedModalOut, setNestedModalOut] = useState(false);
  const { updateFilter } = useContext(ResidenceContext);

  const toggleNestedOut = () => {
    setNestedModalOut(!nestedModalOut);
  };

  const logCheckOutDate = (e) => {
    setCheckOutDate(e);
  };

  useEffect(() => {
    if (checkOutDate) {
      setDateString(checkOutDate.toLocaleDateString());
    }
  }, [checkOutDate]);

  useEffect(() => {
    if (dateString) {
      updateFilter({ checkOutDate: dateString });
      if(onAvailabilityUpdate){
        onAvailabilityUpdate({endDate: dateString})
      }
    }
  }, [dateString]);

  return (
    <div className="col-6">
      <Button color="warning" onClick={toggleNestedOut} className="col-12">
        {dateString ? dateString : "Välj Datum.."}
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
