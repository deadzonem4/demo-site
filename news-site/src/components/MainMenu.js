import React from 'react';
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
 
class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isHome: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    
    return (
      <div className={this.props.menuType}>
        <Navbar color="custom-header" expand="md">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo}  alt="winbet"/>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
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
}
export default MainMenu;





            