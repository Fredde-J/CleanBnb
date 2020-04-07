import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";
import SearchPage from "./pages/SearchPage";
import ResidenceContextProvider from "./contexts/ResidenceContextProvider";
import InfoPage from "./pages/InfoPage";
import CompanyInfoPage from "./pages/CompanyInfoPage"
import ResidentPage from "./pages/Residence.js"
import RegisterUser from "./pages/RegisterUser.js"
import UserContextProvider from "./contexts/UserContextProvider"
import Login from "./components/Login"
import Footer from './components/Footer'
import Bookings from './pages/Bookings.js'

import "./css/style.css";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ResidenceContextProvider>
          <BrowserRouter>
            <Header />

            <main className="container">
              <Switch>
                <Route
                  exact
                  path="/residences/:residenceId"
                  component={ResidentPage}
                />
                <Route exact path="/" component={StartPage} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/info" component={InfoPage} />
                <Route exact path="/companyinfo" component={CompanyInfoPage} />
                <Route exact path="/register_user" component={RegisterUser} />
                <Route exact path="/preform-login" component={Login} />
                <Route exact path="/account/bookings" component={Bookings} />
              </Switch>
            </main>
            <Footer />
          </BrowserRouter>
        </ResidenceContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
