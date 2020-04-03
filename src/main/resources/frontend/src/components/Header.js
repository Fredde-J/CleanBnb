import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import{imgStyle, pStyle} from "../css/headerStyle"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { user, setUser } = useContext(UserContext);
  const logout = () => {
    fetch("/logout");
    setUser(null);
    console.log("Log out");
  };

  return (
    <>
      <Navbar color="warning" light expand="md">
        <Link to="/" className="center header-navbarTitle mr-3">
          <img style={imgStyle} src="/images/logo.png" alt="dirty logo" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/search" className="nav-link">
                Leta Bostad
              </Link>
            </NavItem>

            <NavItem>
              {!user ? (
                <p></p>
              ) : (
                <Link to="/" className="nav-link">
                  Mina Sidor
                </Link>
              )}
            </NavItem>

            <NavItem>
              {!user ? (
                <Link to="/" className="nav-link">
                  Logga in
                </Link>
              ) : (
                <p onClick={logout} className="nav-link" style={pStyle}>
                  Logga ut
                </p>
              )}
            </NavItem>

            {/* <NavItem>
              <Link to="/#">Våra Avtal</Link>
            </NavItem>
            <NavItem>
              <Link to="/#">Logga In</Link>
            </NavItem>
            <NavItem>
              <Link to="/#">Om ClearBnb</Link>
            </NavItem>
            <NavItem>
              <Link to="/#">Mina Sidor (!)</Link>
            </NavItem> */}
          </Nav>
        </Collapse>
        {!user ? (
          <p></p>
        ) : (
          <h5>
            {user.firstName} {user.lastName}
          </h5>
        )}
      </Navbar>
    </>
  );
};

export default Header;
