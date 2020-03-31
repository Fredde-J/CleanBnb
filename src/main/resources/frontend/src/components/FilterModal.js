/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "react-calendar/dist/Calendar.css";

import CheckIn from "./filterComponents/CheckIn";
import CheckOut from "./filterComponents/CheckOut";
import PriceRange from "./filterComponents/PriceRange";
import CheckBoxes from "./filterComponents/CheckBoxes";
import Beds from "./filterComponents/Beds"

const ModalExample = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const buttonStyle = {
    borderRadius: "15px",
    fontSize: "3em"
  }

  return (
    <div className="col-12 my-3">
      <Button style={buttonStyle} color="warning" onClick={toggle} className="col-12">
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
          
          <Beds/>

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
