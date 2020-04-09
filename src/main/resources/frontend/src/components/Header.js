import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from "reactstrap";
import { UserContext } from "../contexts/UserContext";
import {pStyle} from "../css/headerstyle"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { user, setUser } = useContext(UserContext);
  const logout = () => {
    fetch("/logout");
    setUser(null);
    console.log("Log out");
  };

  const brandStyle = {
    width: "150px" 
  }

  return (
    <>
      <Navbar color="warning" light expand="md">
        <NavbarBrand style={brandStyle} href="/" className="mr-auto">
          <img style={{ width: "100%" }} src="/images/logo.png" alt="" />
        </NavbarBrand>
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
