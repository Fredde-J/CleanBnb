import React from "react";
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
            Börja leta bostad!
          </h3>
        </div>
      </div>
      <Login></Login>
    </>
  );
};

export default StartPage;
