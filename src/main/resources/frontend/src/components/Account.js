import React, { useContext } from "react";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { beginSearch, beginSearchText } from "../css/accountPageStyle";
import { UserContext } from "../contexts/UserContextProvider";

const Account = props => {
  const { user } = useContext(UserContext);

  const goToSearch = () => {
    props.history.push("/search");
  };

  const goToBookings = () => {
    props.history.push("/account/bookings");
  };

  return (
    <div>
      <div
        className="begin-search card row col-12 col-md-6 mx-auto mt-5 mb-5 bg-warning"
        style={beginSearch}
        onClick={goToSearch}
      >
        <div className="begin-search-wrapper p-3">
          <div
            className="begin-search-text text-center"
            style={beginSearchText}
          >
            <h3>Börja leta bostäder</h3>
          </div>
        </div>
      </div>

      <div
        className="begin-search card row col-12 col-md-6 mx-auto mt-5 mb-5 bg-warning"
        style={beginSearch}
        onClick={goToBookings}
      >
        <div className="begin-search-wrapper p-3">
          <div
            className="begin-search-text text-center"
            style={beginSearchText}
          >
            <h3>Bokningar</h3>
          </div>
        </div>
      </div>

      <div
        className="begin-search card row col-12 col-md-6 mx-auto mt-5 mb-5 bg-warning"
        style={beginSearch}
      
      >
        <div className="begin-search-wrapper p-3">
          <div
            className="begin-search-text text-center"
            style={beginSearchText}
          >
            <h3>Hyr ut bostad</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
