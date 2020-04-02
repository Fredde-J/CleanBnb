/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
// eslint-disable-next-line react-hooks/exhaustive-deps

import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row
} from "reactstrap";
import { ResidenceContext } from "../contexts/ResidenceContext";

import "react-calendar/dist/Calendar.css";

import CheckIn from "./filterComponents/CheckIn";
import CheckOut from "./filterComponents/CheckOut";
import PriceRange from "./filterComponents/PriceRange";
import CheckBoxes from "./filterComponents/CheckBoxes";
import Beds from "./filterComponents/Beds";
import Citys from "./filterComponents/Citys";
import { useContext } from "react";

const FilterModal = () => {
  const [modal, setModal] = useState(false);
  const { resetResidences } = useContext(ResidenceContext);

  const toggle = () => {
    resetResidences();
    setModal(!modal);
  };

  const handleOnFilter = () => {
    // filterResidences(filtering);
    setModal(!modal);
  };

  const handleGoBack = () => {
    setModal(!modal);
  };

  const buttonStyle = {
    borderRadius: "15px",
    fontSize: "3em"
  };

  return (
    <div className="col-12 my-3">
      <Button
        style={buttonStyle}
        color="warning"
        onClick={toggle}
        className="col-12"
      >
        Sökfilter
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle} className="">
          Sökfilter
        </ModalHeader>
        <ModalBody>
          <PriceRange />
          <Row>
            <p className="col-6 text-center m-0">Incheckning</p>
            <p className="col-6 text-center m-0">Utcheckning</p>
            <CheckIn />
            <CheckOut />
          </Row>

          <Row>
            <Beds />
            <Citys />
          </Row>

          <CheckBoxes />
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={handleOnFilter}>
            Filtrera
          </Button>{" "}
          <Button color="warning" onClick={handleGoBack}>
            Tillbaks
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default FilterModal;
