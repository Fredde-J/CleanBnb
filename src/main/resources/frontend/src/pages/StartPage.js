import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import Login from "../components/Login"

import {
  beginSearch,
  beginSearchText,
  // buttons,
  // signin,
  // createAccount
} from "../css/startPageStyle.js";

const StartPage = props => {

  const { history } = props;

  const { user, setUser } = useContext(UserContext);

  const goToSearch = () => {
    history.push("/search");
  };

  return (
    <>
      <div
        className="begin-search card row col-12 col-md-6 mx-auto mt-5 mb-5 bg-warning"
        style={beginSearch}
        onClick={goToSearch}
      >
        <div className="begin-search-wrapper p-3">
          <h3 className="begin-search-text text-center" style={beginSearchText}>
            {!user ? (
              <h3>Börja leta bostäder</h3>
            ) : (
              <h3>
                Börja leta bostäder {user.firstName} {user.lastName}
              </h3>
            )}
          </h3>
        </div>
      </div>
      <Login></Login>
    </>
  );
};

export default StartPage;
