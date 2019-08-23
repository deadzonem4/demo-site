import React, { Fragment, useEffect } from "react";

var matchMinuteLeft = null;

const SummaryLeftCol = props => {
  useEffect(() => {
    matchMinuteLeft = null;
  });

  useEffect(() => {
    return () => {
      matchMinuteLeft = null;
    };
  }, []);

  const leftEvents = props.summaryData.map((data, index) =>{

    const playerName = data.player ? data.player.name : undefined;
    var checkMinuteLeft = false;

    if (matchMinuteLeft !== data.minute) {
        matchMinuteLeft = data.minute;
        checkMinuteLeft = true;
      }
      if(data.home_team){
        return(
          <div className="summary-single-event" key={data.id}>
            {
              (data.type === "goal") ?
                (
                  <div className="match-event-type goal left-col">
                    <strong>
                      { (playerName !== undefined) ?
                        (
                          <span>{playerName}</span>
                        ) : 
                        (
                          <span>N/A</span>
                        )
                      }
                      <i className="fas fa-futbol"></i>
                    </strong>
                  </div>
                ) :
              (data.type === "own_goal") ?
                (
                  <div className="match-event-type goal left-col">
                    <strong className="own-goal">
                      { (playerName !== undefined) ?
                        (
                          <span>{playerName}</span>
                        ) : 
                        (
                          <span>N/A</span>
                        )
                      }
                      <i className="fas fa-futbol"></i>
                    </strong>
                  </div>
                ) :
              (data.type === "penalty_goal") ?
                (
                  <div className="match-event-type goal left-col">
                    <strong>
                      { (playerName !== undefined) ?
                        (
                          <span>{playerName}</span>
                        ) : 
                        (
                          <span>N/A</span>
                        )
                      }
                      <i className="fas fa-futbol"></i>
                    </strong>
                  </div>
                ) :
              (data.type === "penalty_miss") ?
                (
                  <div className="match-event-type goal left-col pen-miss">
                    <strong>
                      { (playerName !== undefined) ?
                        (
                          <span>{playerName}</span>
                        ) : 
                        (
                          <span>N/A</span>
                        )
                      }
                      <i>pen. miss</i>
                    </strong>
                  </div>
                ) :
              (data.type === "yellow_card") ?
                (
                  <div className="match-event-type cards">
                    <strong>
                      { (playerName !== undefined) ?
                        (
                          <span>{playerName}</span>
                        ) : 
                        (
                          <span>N/A</span>
                        )
                      }
                      <div className="yellow_card-box"></div>
                    </strong>
                  </div>
                ) :
              (data.type === "yellow_card_red") ?
                (
                  <div className="match-event-type cards">
                    <strong>
                      { (playerName !== undefined) ?
                        (
                          <span>{playerName}</span>
                        ) : 
                        (
                          <span>N/A</span>
                        )
                      }
                      <div className="red_card-box"></div>
                    </strong>
                  </div>
                ) :
              (data.type === "red_card") ?
                (
                  <div className="match-event-type cards">
                    <strong>
                      { (playerName !== undefined) ?
                        (
                          <span>{playerName}</span>
                        ) : 
                        (
                          <span>N/A</span>
                        )
                      }
                      <div className="red_card-box"></div>
                    </strong>
                  </div>
                ) :
              (data.type === "substitution") ?
                (
                  <div className="match-event-type">
                    <div className="subs-box">
                      <strong>{data.player.name}</strong>
                      <i className="fas fa-long-arrow-alt-left"></i>
                    </div>
                    <div className="subs-box out">
                      <strong>{data.rel_player.name}</strong>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </div>
                ) :
              (
                null
              )
            }
            {checkMinuteLeft ? 
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
      {leftEvents}
    </Fragment>
  )
}

export default SummaryLeftCol;