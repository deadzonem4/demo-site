import React from "react";

const LineUpSubs = props =>{

  const leftEventsSubs = props.lineUpData.home_team.players.map((data, index) =>{
    if(data.home_team && data.event_player_type.category === "sub"){
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
  
  const rightEventsSubs = props.lineUpData.away_team.players.map((data, index) =>{
    if(data.event_player_type.category === "sub"){
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
        {leftEventsSubs}
      </div>
      <div className="match-summary-right">
          {rightEventsSubs}
      </div>
    </div>
  )
}

export default LineUpSubs
