import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Login from "../components/Login";
import { Col, Button } from "reactstrap";

import {
  beginSearch,
  beginSearchText,
  buttonStyle,
} from "../css/startPageStyle.js";

const StartPage = (props) => {
  const { history } = props;

  const { user } = useContext(UserContext);

  const goToSearch = () => {
    history.push("/search");
  };
  const goToBookings = () => {
    history.push("/account/bookings");
  };
  const goToLease = () => {
    history.push("/leaseResidence");
  };

  return (
    <>
      <Col xs="12" md={{ size: 6, offset: 3 }} className="mt-5">
        <Button
          style={buttonStyle}
          size="lg"
          color="warning"
          className="col-12 py-3"
          onClick={goToSearch}
        >
          Börja Leta Bostäder
        </Button>
      </Col>
      {!user ? (
        <div>
          <Login></Login>
        </div>
      ) : (
        <Col xs="12" md={{ size: 6, offset: 3 }} className="my-5">
          <Button
            style={buttonStyle}
            size="lg"
            color="warning"
            className="col-12 py-3 mb-5"
            onClick={goToBookings}
          >
            Mina Bokningar
          </Button>
          <Button
            style={buttonStyle}
            size="lg"
            color="warning"
            className="col-12 py-3"
            onClick={goToLease}
          >
            Hyr ut en Bostad
          </Button>
        </Col>
      )}
    </>
  );
};

export default StartPage;
