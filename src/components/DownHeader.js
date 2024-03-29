import React from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  NavItem,
  NavLink
  } from 'reactstrap';
import CategoryDropdown from '../components/articles/CategoryDropdown';
 
const DownHeader = () => {
  
  return (
    <div className="down-header">
      <div className="container">
        <ul className="down-menu">
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/bg-football/1">БГ футбол</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/europe-football/1">Европейски футбол</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/world-football">Световен футбол</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/tennis">Тенис</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/volleyball">Волейбол</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/basketball">Баскетбол</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/box">Бокс</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/other-sports">Други спортове</NavLink>
          </NavItem>
        </ul>
        <CategoryDropdown/>
      </div>
    </div>
  );
}

export default DownHeader;





