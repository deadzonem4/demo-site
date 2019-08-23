import React from "react";
import EventsDate from "../EventsDate.js";
import {useHttpsInterval} from "../../Helpers";
import Loader from 'react-loader-spinner';

const H2HList = props => {

  const[isLoading, fetchedData] = useHttpsInterval(
    `https://teams/${props.id}/events`,
    ''
  );

  if (fetchedData && fetchedData.length === 0) {
  	return(
			<div className="all-events-box">
				<div className="no-events">
					<h4 className="no-events-title">Няма данни за избрания отбор</h4>
				</div>
			</div>
  		)
	}
	if(isLoading){
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#D5071C"/>
      </div>
    );
  }

  const match = fetchedData ? 
    fetchedData.map((data, index) =>{
    if (data.event_status.code === "finished") {
      return(
        <div key={data.id}>
          <div className="event-info h2h-list">
            <span className="event-status">
              <EventsDate date={data.finished_at} />
              <span className="h2h-tournament-name">{data.tournament_season_stage.name}</span>
              <div className="events-right-line"></div>
            </span>
            <div className="home-team-box">
            {(props.teamName === data.home_team.name) ?
              (
                <span className="selected-team">{data.home_team.name}</span>
              ) :
              (
                <span>{data.home_team.name}</span>
              )
            }
            </div>
            <div className="match-result">
              <span>{data.goal_home + " "}</span>
              <span>-</span> 
              <span>{data.goal_away + " "}</span>
            </div>
            <div className="away-team-box">
              {(props.teamName === data.away_team.name) ?
                (
                  <span className="selected-team">{data.away_team.name}</span>
                ) :
                (
                  <span>{data.away_team.name}</span>
                )
              }
            </div>
          </div>
        </div>
      )
    }
    return(
      null
    )
  }) : [];
	
  const filtered = match.filter(function (el) {
    return el != null;
	});
	
  const reverse = filtered.reverse();
	const lastData = reverse.slice(0,7);
	
  return(
    <div className="all-events-box h2h-events-box">
      <h4 className="h2h-match-title">{props.teamName}</h4>
        {lastData}
    </div>
  );
}

export default H2HList;
