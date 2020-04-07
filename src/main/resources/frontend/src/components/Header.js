import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
          <p></p>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
