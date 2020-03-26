import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";
import SearchPage from "./pages/SearchPage";
import SearchResultContextProvider from "./contexts/SearchResultContext";
import ResidenceContextProvider from "./contexts/ResidenceContextProvider";
import InfoPage from "./pages/InfoPage";
import CompanyInfoPage from "./pages/CompanyInfoPage"

import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ResidenceContextProvider>
        <SearchResultContextProvider>
          <main>
            <Switch>
              <Route exact path="/" component={StartPage} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/info" component={InfoPage}/> 
              <Route exact path="/Companyinfo" component={CompanyInfoPage}/> 
            </Switch>
          </main>
        </SearchResultContextProvider>
        </ResidenceContextProvider>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
