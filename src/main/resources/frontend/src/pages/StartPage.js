import React from "react";

const StartPage = props => {
  const goToSearch = () => {
    props.history.push("/search");
  };

  return (
    <div className="container">
      <div className="begin-search card m-4">
        <div className="card-body" onClick={goToSearch}>
          <h3 className="text-center">Börja leta bostad!</h3>
        </div>
      </div>

      <div className="sign-in-form card m-4 bg-transparent">
        <div className="card-body">
        <p className="text-white text-center mb-2">Har du ett konto?</p>
          <form className="row">
            <div className="form-group col-12">
              <label className="text-white font-weight-bold" htmlFor="user">
                Användarnamn
              </label>
              <input
                type="email"
                className="form-control"
                id="user"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group col-12">
              <label className="text-white font-weight-bold" htmlFor="password">
                Lösenord
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="form-group form-check"></div>
            <button type="submit" className="btn btn-warning mt-2 col-6">
              Logga in
            </button>
          </form>
        </div>
      </div>

      <div className="create-account row">
        <p className="text-center text-white col-12">Vill du skapa ett konto?</p>
        <button className="btn btn-warning mt-2 col-4 offset-3 ">Skapa Konto</button>col-6
      </div>

      
    </div>
  );
};

export default StartPage;
