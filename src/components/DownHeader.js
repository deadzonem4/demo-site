import React from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  NavItem,
  NavLink
  } from 'reactstrap';
 
const DownHeader = props => {
  
  return (
    <div className="down-header">
      <div className="container">
        <ul className="down-menu">
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/bg-football/1">Бг Футбол</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/europe-football/1">Европейски Футбол</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/world-football">Световен Футбол</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/tennis">Тенис</NavLink>
          </NavItem>
        </ul>
      </div>
    </div>
  );
}

export default DownHeader;





