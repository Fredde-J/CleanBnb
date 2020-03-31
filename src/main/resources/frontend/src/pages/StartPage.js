import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import Login from "../components/Login"

import {
  beginSearch,
  beginSearchText,
  buttons,
  signin,
  createAccount
} from "../css/startPageStyle.js";

const StartPage = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { fetchUser } = useContext(UserContext);

  const logIn = e => {
    e.preventDefault();
    const credentials =
      "email=" +
      encodeURIComponent(email) +
      "&password=" +
      encodeURIComponent(password);

    fetchAccount(credentials);
  };

  const fetchAccount = async (credentials) => {
    let response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: credentials
    });

    if (response.url.includes("error")) {
      console.log("Wrong username/password");
    } else {
      console.log("Successfully logged in");
      fetchUser();
     // props.history.push("/auth/whoami");
    }
  };

  const goToSearch = () => {
    props.history.push("/search");
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
