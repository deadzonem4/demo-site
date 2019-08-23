import React from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  NavLink
  } from 'reactstrap';

const ScoresMenu = props => {

  return (
    <ul className="scores-menu">
      <li className="scores-item">
        <NavLink to="/events/future" tag={RRNavLink} activeClassName="active-menu">
          Предстоящи
        </NavLink>
      </li>
      <li className="scores-item live">
        <NavLink to="/events/live" tag={RRNavLink} activeClassName="active-menu">
          На живо
        </NavLink>
      </li>
      <li className="scores-item">
        <NavLink to="/events/finished" tag={RRNavLink} activeClassName="active-menu">
          Завършили
        </NavLink>
      </li>
      <li className="scores-item">
        <NavLink to="/events/popular" tag={RRNavLink} activeClassName="active-menu">
          Избрани мачове
        </NavLink>
      </li>
    </ul>
  );
}


export default ScoresMenu;
