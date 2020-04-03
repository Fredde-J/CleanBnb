import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import Login from "../components/Login";
import Account from "../components/Account";

import {
  beginSearch,
  beginSearchText
  // buttons,
  // signin,
  // createAccount
} from "../css/startPageStyle.js";

const StartPage = props => {
  const { history } = props;

  const { user } = useContext(UserContext);

  const goToSearch = () => {
    history.push("/search");
  };
  const goToBookings = () => {
    history.push("/account/bookings");
  };

  return (
    <>
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
      </div>
      {!user ? (
        <div>
          <Login></Login>
        </div>
      ) : (
        <div>
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
      )}
    </>
  );
};

export default StartPage;
