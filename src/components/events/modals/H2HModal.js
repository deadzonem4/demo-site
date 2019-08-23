import React from "react";
import H2HList from "./H2HList";

const H2HModal = props => {
 
  return(
    <div className="event-modals-box h2h-box">
      <div className="home-team-h2h">
        <H2HList teamName={props.fullData.home_team.name} id={props.fullData.home_team.id}/>
      </div>
      <div className="away-team-h2h">
        <H2HList teamName={props.fullData.away_team.name} id={props.fullData.away_team.id}/>
      </div>
    </div>
  );
}


export default H2HModal;

