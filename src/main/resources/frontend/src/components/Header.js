import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  const { user, setUser } = useContext(UserContext);

 

  return (
    <>
      <Navbar color="warning" light expand="md">
        <Link to="/" className="center header-navbarTitle mr-3">
          <img style={{ width: "50%" }} src="/images/logo.png" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/search" className="nav-link">
                Leta Bostad
              </Link>
            </NavItem>

            {/* <NavItem>
              {!user ? (<h3></h3>) : (
                <Link>mina sidor</Link>

                )}
              
               
            </NavItem>
            */}

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
