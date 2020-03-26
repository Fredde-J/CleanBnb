import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartPage from "./pages/StartPage";
import SearchPage from "./pages/SearchPage";
import SearchResultContextProvider from "./contexts/SearchResultContext";

import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SearchResultContextProvider>
          <main>
            <Switch>
              <Route exact path="/" component={StartPage} />
              <Route exact path="/search" component={SearchPage} />
            </Switch>
          </main>
        </SearchResultContextProvider>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
