import React from "react";
import noImage from '../../images/event-no-image.png';

var matchMinute = null;

class SummaryModal extends React.Component {
 
  render() {
    if (this.props.data.length === 0) {
      return(
      <div className="all-events-box">
        Няма данни за избраното от Вас събитие.
      </div>
      )
    }
    const teamsData = this.props.allData;
    const summaryData = this.props.data;
    const awayImage = teamsData.away_team.url_logo ? teamsData.away_team.url_logo : undefined;
    const homeImage = teamsData.home_team.url_logo ? teamsData.home_team.url_logo : undefined;
    const leftEvents = summaryData.map((data, index) =>{
      const playerName = data.player ? data.player.name : undefined;
      var checkMinute = false;
      if (matchMinute !== data.minute) {
         matchMinute = data.minute;
         checkMinute = true;
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
              {checkMinute ? 
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
    const rightEvents = summaryData.map((data, index) =>{
      const playerName = data.player ? data.player.name : undefined;
      var checkMinute = false;
      if (matchMinute !== data.minute) {
       matchMinute = data.minute;
       checkMinute = true;
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
            {checkMinute ? 
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
      <div className="event-modals-box">
        <div className="event-modals-box-title">
          <div className="event-modals-home-team">
            {homeImage ? 
              (
                <img src={homeImage} alt="news winbet" />
              ) : 
              (
                <img src={noImage} alt="news winbet" />
              )
            }
            <span>{teamsData.home_team.name}</span>
          </div>
          <div className="event-modals-away-team">
            <span>{teamsData.away_team.name}</span>
            {awayImage ? 
              (
                <img src={awayImage} alt="news winbet" />
              ) : 
              (
                <img src={noImage} alt="news winbet" />
              )
            }
          </div>
        </div>
        <div className="match-summary-box">
          <div className="match-summary-left">
              {leftEvents}
          </div>
          <div className="match-summary-right">
              {rightEvents}
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryModal;

