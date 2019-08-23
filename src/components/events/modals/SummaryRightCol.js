import React, { Fragment, useEffect } from "react";

var matchMinuteRight = null;

const SummaryLeftCol = props => {
  useEffect(() => {
    matchMinuteRight = null;
  });

  useEffect(() => {
    return () => {
      matchMinuteRight = null;
    };
  }, []);

  const rightEvents = props.summaryData.map((data, index) =>{

    const playerName = data.player ? data.player.name : undefined;
    var checkMinuteRight = false;

    if (matchMinuteRight !== data.minute) {
      matchMinuteRight = data.minute;
      checkMinuteRight = true;
    }
    if(!data.home_team){
      return(
        <div className="summary-single-event" key={data.id}>
          {
            (data.type === "goal") ?
              (
                <div className="match-event-type goal">
                  <strong>
                    <i className="fas fa-futbol"></i>
                    { (playerName !== undefined) ?
                      (
                        <span>{playerName}</span>
                      ) : 
                      (
                        <span>N/A</span>
                      )
                    }
                  </strong>
                </div>
              ) :
            (data.type === "own_goal") ?
              (
                <div className="match-event-type goal">
                  <strong className="own-goal">
                    <i className="fas fa-futbol"></i>
                    { (playerName !== undefined) ?
                      (
                        <span>{playerName}</span>
                      ) : 
                      (
                        <span>N/A</span>
                      )
                    }
                  </strong>
                </div>
              ) :
            (data.type === "penalty_goal") ?
              (
                <div className="match-event-type goal">
                  <strong>
                    <i className="fas fa-futbol"></i>
                    { (playerName !== undefined) ?
                      (
                        <span>{playerName}</span>
                      ) : 
                      (
                        <span>N/A</span>
                      )
                    }
                  </strong>
                </div>
              ) :
            (data.type === "penalty_miss") ?
              (
                <div className="match-event-type goal pen-miss">
                  <strong>
                    <i>pen. miss</i>
                    { (playerName !== undefined) ?
                      (
                        <span>{playerName}</span>
                      ) : 
                      (
                        <span>N/A</span>
                      )
                    }
                  </strong>
                </div>
              ) :
            (data.type === "yellow_card") ?
              (
                <div className="match-event-type cards right-col">
                  <strong>
                    <div className="yellow_card-box"></div>
                    { (playerName !== undefined) ?
                      (
                        <span>{playerName}</span>
                      ) : 
                      (
                        <span>N/A</span>
                      )
                    }
                  </strong>
                </div>
              ) :
            (data.type === "yellow_card_red") ?
              (
                <div className="match-event-type cards right-col">
                  <strong>
                    <div className="red_card-box"></div>
                    { (playerName !== undefined) ?
                      (
                        <span>{playerName}</span>
                      ) : 
                      (
                        <span>N/A</span>
                      )
                    }
                  </strong>
                </div>
              ) :
            (data.type === "red_card") ?
              (
                <div className="match-event-type cards right-col">
                  <strong>
                    <div className="red_card-box"></div>
                    { (playerName !== undefined) ?
                      (
                        <span>{playerName}</span>
                      ) : 
                      (
                        <span>N/A</span>
                      )
                    }
                  </strong>
                </div>
              ) :
            (data.type === "substitution") ?
              (
                <div className="match-event-type right-col">
                  <div className="subs-box">
                    <i className="fas fa-long-arrow-alt-left"></i>
                    <strong>{data.player.name}</strong>
                  </div>
                  <div className="subs-box out">
                    <i className="fas fa-long-arrow-alt-right"></i>
                    <strong>{data.rel_player.name}</strong>
                  </div>
                </div>
              ) :
            (
              null
            )
          }
          {checkMinuteRight ? 
            (
              <span className="summary-minute">{data.minute}</span>  
            ) :
            (
              null
            )
          }  
        </div>
      )
    }
    return(
      <div className="summary-single-event" key={data.id}></div>
    )
  });

  return(
    <Fragment>
      {rightEvents}
    </Fragment>
  )
}

export default SummaryLeftCol;