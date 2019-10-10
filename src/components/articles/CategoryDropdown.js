import React, { useState } from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, NavItem, NavLink } from 'reactstrap';

const DownHeader = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return(
    <div className="articles-category-menu">
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle caret>
          Категории
        </DropdownToggle>
        <DropdownMenu>
          <NavItem onClick={toggle}>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/bg-football/1">БГ футбол</NavLink>
          </NavItem>
          <NavItem onClick={toggle}>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/europe-football/1">Европейски футбол</NavLink>
          </NavItem>
          <NavItem onClick={toggle}>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/world-football">Световен футбол</NavLink>
          </NavItem>
          <NavItem onClick={toggle}>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/tennis">Тенис</NavLink>
          </NavItem>
          <NavItem onClick={toggle}>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/volleyball">Волейбол</NavLink>
          </NavItem>
          <NavItem onClick={toggle}>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/basketball">Баскетбол</NavLink>
          </NavItem>
          <NavItem onClick={toggle}>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/box">Бокс</NavLink>
          </NavItem>
          <NavItem onClick={toggle}>
            <NavLink tag={RRNavLink} className="down-menu-link" activeClassName="active" to="/articles/other-sports">Други спортове</NavLink>
          </NavItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default DownHeader;