import React from "react";

const LineUpStartings = props =>{

  const leftEvents = props.lineUpData.home_team.players.map((data, index) =>{
    if(data.home_team && data.event_player_type.category === "start"){
      return(
        <div className="summary-single-event" key={data.id}>
          <div>{data.player.name}<span className="lineUps-number">{data.shirt_number}</span></div>
        </div>
      )
    }
    return(
      null
    )
  });

  const rightEvents = props.lineUpData.away_team.players.map((data, index) =>{
    if(data.event_player_type.category === "start"){
      return(
        <div className="summary-single-event" key={data.id}>
          <div><span className="lineUps-number">{data.shirt_number}</span>{data.player.name}</div>
        </div>
      )
    }
    return(
      null
    )
  });

  return(
    <div className="lineUps-content">
      <div className="match-summary-left">
        {leftEvents}
      </div>
      <div className="match-summary-right">
          {rightEvents}
      </div>
    </div>
  )
}

export default LineUpStartings
