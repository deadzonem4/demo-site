import React from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
// import CountriesData from '../../containers/CountriesData';
// import AllCountries from "./AllCountries";
import {
  NavLink
  } from 'reactstrap';

class ScoresMenu extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
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
        {
        // <li className="scores-item">
        //   <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        //     <DropdownToggle caret>
        //       Първенства
        //     </DropdownToggle>
        //     <DropdownMenu>
        //       <CountriesData dataLink="https://football-api.msk.bg/countries" token="Basic YmU0ZWU0YTY5Y2RhZDRiZDQxNTJjOGYzMDMxNWIxNWM6NTA2ZTZjNmEzNWI0YjJkMWViNTI0NmVlYTc2NTBlOGY=">
        //         <AllCountries/>
        //       </CountriesData>
        //     </DropdownMenu>
        //   </Dropdown>
        // </li>
      }
      </ul>
    );
  }
}

export default ScoresMenu;
