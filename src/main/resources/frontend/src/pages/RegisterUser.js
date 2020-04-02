import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { buttons, signin, createAccount } from "../css/startPageStyle.js";

const RegisterUser = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const createUser = e => {
      e.preventDefault()
    const credentials = {
      firstName,
      lastName,
      username,
      password
    };
    fetchUser(credentials);
  };

  const fetchUser = async credentials => {
    let response = await fetch("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });

    try {
      response = await response.json();
      setUser(response);
      props.history.push("/")
    } catch {
      console.log("Fel inmatning av uppgifter");
    }
  };
  return (
    <>
      <div className="signin-form card m-4 bg-transparent" style={signin}>
        <p className="text-white text-center m-0 font-weight-bold">
          Skapa konto
        </p>
        <form className="p-2" onSubmit={createUser}>
          <div className="row">
            <div className="form-group col-12 col-md-7 mx-auto">
              <label
                className="text-white font-weight-bold"
                htmlFor="firstName"
              >
                Förnamn
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group col-12 col-md-7 mx-auto">
              <label className="text-white font-weight-bold" htmlFor="lastName">
                Efternamn
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>

            <div className="form-group col-12 col-md-7 mx-auto">
              <label className="text-white font-weight-bold" htmlFor="email">
                Användarnamn/Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
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
          </div>

          <div className="row">
            <button
              type="submit"
              className="btn btn-warning mt-2 col-8 col-md-3 mx-auto"
              style={buttons}
            >
              Registrera konto
            </button>
          </div>
        </form>
      </div>

      <div
        className="create-account card m-4 bg-transparent row"
        style={createAccount}
      ></div>
    </>
  );
};
export default RegisterUser;
