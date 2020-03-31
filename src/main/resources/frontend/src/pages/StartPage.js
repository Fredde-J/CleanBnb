import React from "react";

import {
  beginSearch,
  beginSearchText,
  buttons,
  signin,
  createAccount
} from "../css/startPageStyle.js";

const StartPage = props => {
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

      <div className="signin-form card m-4 bg-transparent" style={signin}>
        <p className="text-white text-center m-0 font-weight-bold">
          Har du ett konto?
        </p>
        <form className="p-2">
          <div className="row">
            <div className="form-group col-12 col-md-7 mx-auto">
              <label className="text-white font-weight-bold" htmlFor="user">
                Användarnamn
              </label>
              <input type="email" className="form-control" id="user" />
            </div>
            <div className="form-group col-12 col-md-7 mx-auto">
              <label className="text-white font-weight-bold" htmlFor="password">
                Lösenord
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
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
        <button
          className="btn btn-warning mt-2 col-8 col-md-3 mx-auto"
          style={buttons}
          onClick={()=>{props.history.push("/register_user")}}
        >
          Skapa Konto
        </button>
      </div>
    </>
  );
};

export default StartPage;
