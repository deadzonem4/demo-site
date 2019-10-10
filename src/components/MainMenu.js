import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from "../images/winbet-logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';
 
const MainMenu = props => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
    
  return (
    <div className={props.menuType}>
      <Navbar color="custom-header" expand="md">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo}  alt="winbet"/>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} className="nav-link" activeClassName="active" to="/articles">Новини</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} className="nav-link" activeClassName="active" to="/events">Live scores</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} className="nav-link" activeClassName="active" to="/promotions">Промоции</NavLink>
              </NavItem>
              <NavItem>
                <a  className="nav-link" href="https://winbet.bg/" target="_blank" rel="noopener noreferrer">winbet.bg</a>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default MainMenu;





            