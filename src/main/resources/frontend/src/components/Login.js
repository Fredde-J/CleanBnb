import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import { Link, withRouter } from "react-router-dom";

import { buttons, signin, createAccount } from "../css/startPageStyle.js";

const Login = props => {
  
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { fetchUser } = useContext(UserContext);

  const logIn = e => {
    e.preventDefault();
    const credentials =
      "username=" +
      encodeURIComponent(username) +
      "&password=" +
      encodeURIComponent(password);
    fetchAccount(credentials);
  };

  //TODO: fix login, only error even with correct email and password
  let isLoggedin = true;
  console.log(isLoggedin);
  const fetchAccount = async credentials => {
    let response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: credentials
    });

    if (response.url.includes("error")) {
      console.log("Wrong username/password");
      window.location.reload(false);
      console.log(isLoggedin);
    } else {
      console.log("Successfully logged in");
      fetchUser();
      props.history.push("/");
    }
  };

  return (
    <>
      <div className="signin-form card m-4 bg-transparent" style={signin}>
        <p className="text-white text-center m-0 font-weight-bold">
          Har du ett konto?
        </p>
        <form className="p-2" onSubmit={logIn}>
          <div className="row">
            <div className="form-group col-12 col-md-7 mx-auto">
              <label className="text-white font-weight-bold" htmlFor="user">
                Användarnamn/Email
              </label>
              <input
                type="email"
                className="form-control"
                id="user"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group col-12 col-md-7 mx-auto">
              <label className="text-white font-weight-bold" htmlFor="password">
                Lösenord
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            {!isLoggedin ? (
              <h5 className="text-warning bg-dark mt-5 col-12 col-md-7 mx-auto">
                Fel Email eller Lösenord! Vänligen kontrollera dina uppgifter
              </h5>
            ) : (
              <p></p>
            )}
          </div>

          <div className="row">
            <button
              type="submit"
              className="btn btn-warning mt-2 col-8 col-md-3 mx-auto"
              style={buttons}
            >
              Logga in
            </button>
          </div>
        </form>
      </div>

      <div
        className="create-account card m-4 bg-transparent row"
        style={createAccount}
      >
        <p className="text-center text-white col-12 m-0 font-weight-bold">
          Inte registrerad?
        </p>
        <Link
          className="btn btn-warning mt-2 col-8 col-md-3 mx-auto"
          to="/register_user"
        >
          <button className="btn" style={buttons}>
            Skapa Konto
          </button>
        </Link>
      </div>
    </>
  );
};

export default withRouter(Login);
