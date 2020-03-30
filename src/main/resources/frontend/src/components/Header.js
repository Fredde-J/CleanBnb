import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/" className="center header-navbarTitle">
          ClearBnB
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Startsida</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">Leta Bostad</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">Våra Avtal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">Logga In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">Om ClearBnb</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#">Mina Sidor (!)</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
