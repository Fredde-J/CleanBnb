/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import PriceRange from "./PriceRange";
import CheckBoxes from "./CheckBoxes"

const ModalExample = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="warning" onClick={toggle}>
        Sökfilter
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle} className="">
          Sökfilter
        </ModalHeader>
        <ModalBody>
          <PriceRange />
          <div className="row">
            <CheckIn />
            <CheckOut />
          </div>
          
            <CheckBoxes/>
          
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={toggle}>
            Filtrera
          </Button>{" "}
          <Button color="warning" onClick={toggle}>
            Tillbaks
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
