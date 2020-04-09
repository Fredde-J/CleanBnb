import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ResidenceContextProvider from "./contexts/ResidenceContext";
import UserContextProvider from "./contexts/UserContext";
import BookingContextProvider from "./contexts/BookingContext"

import Header from "./components/Header";
import StartPage from "./pages/StartPage";
import SearchPage from "./pages/SearchPage";
import InfoPage from "./pages/InfoPage";
import BookingConfirmation from "./pages/BookingConfirmation"
import Bookings from "./components/BookingCard"
import BookingComponent from "./components/BookingComponent";
import CompanyInfoPage from "./pages/CompanyInfoPage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import RegisterUser from "./pages/RegisterUser.js";
import ResidentPage from "./pages/Residence.js";
import LeaseResidence from './pages/LeaseResidence'


import "./css/style.css";

function App() {
  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  }, []);

  return (
                <Route exact path="/leaseResidence" component={LeaseResidence} />
    <div className="App">
      <UserContextProvider>
        <ResidenceContextProvider>
          <BookingContextProvider>
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
                  <Route
                    exact
                    path="/companyinfo"
                    component={CompanyInfoPage}
                  />
                  <Route exact path="/register_user" component={RegisterUser} />
                  <Route exact path="/preform-login" component={Login} />
                  <Route
                    exact
                    path="/residences/:residenceId/booking"
                    component={BookingComponent}
                  />
                  <Route exact path="/account/bookings" component={Bookings} />
                  <Route exact path="/account/:chosenresidenceId/bookingConfirmation" component={BookingConfirmation} />
                </Switch>
              </main>
              <Footer />
            </BrowserRouter>
          </BookingContextProvider>
        </ResidenceContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
