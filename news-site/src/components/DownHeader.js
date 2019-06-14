import React from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  NavItem,
  NavLink
  } from 'reactstrap';
 
class DownHeader extends React.Component {

  render() {    
    return (
      <div className="down-header">
      	<div className="container">
	      	<ul className="down-menu">
            <NavItem>
              <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/all">Всички</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/football">Футбол</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/basketball">Баскетбол</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/tennis">Тенис</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/others">Други</NavLink>
            </NavItem>
	      	</ul>
      	</div>
	    </div>
    );
  }
}
export default DownHeader;





