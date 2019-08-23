import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import noImage from '../../images/event-no-image.png';
import HourDate from "../HourDate";

const TopEvents = props => {
  
  useEffect(() => {
	window.scrollTo(0, 0);
  },[]);

  const singleEvents = props.data.items.map((single, id) =>{

    const awayImage = single.away_team.url_logo ? single.away_team.url_logo : undefined;
    const homeImage = single.home_team.url_logo ? single.home_team.url_logo : undefined;
    const homeScore = single.home_score ? single.home_score.ordinary_time : undefined;
    const awayScore = single.away_score ? single.away_score.ordinary_time : undefined;

    return(
      <Link key={single.id} className="single-event-box" to={`/event/${single.id}`}>
        <div className="event-info">
          { (single.event_status.code === "finished") ?
            (
              <span className="event-status">КР<div className="events-right-line"></div></span>
            ) : 
            (
              (single.minute) ? 
              (
                <span className="event-status">
                  <div className="live-dot"></div>
                  {single.minute + "'"}
                  <div className="events-right-line"></div>
                </span>
              ) :
              (
                (single.event_status.code === "halftime") ?
                (
                  <span className="event-status">
                    <div className="live-dot"></div>
                    поч.
                    <div className="events-right-line"></div>
                  </span>
                ) :
                (
                <span className="event-status"><HourDate date={single.start_time} customClass="events-time" /><div className="events-right-line"></div></span>
                )
              )
            )
          }
          <div className="home-team-box">
            <span>{single.home_team.name}</span>
            {homeImage ? 
              (
                <img src={homeImage} alt="news winbet" />
              ) : 
              (
                <img src={noImage} alt="news winbet" />
              )
            }
          </div>
          <div className="match-result">
            { (homeScore !== undefined) ?
              (
                <span>{homeScore + " "}</span>
              ) : 
              (
                <span>? </span>
              )
            }
            <span>-</span> 
            {(homeScore !== undefined) ? 
              (
                <span>{" " + awayScore}</span>
              ) : 
              (
                <span> ?</span>
              )
            }
          </div>
          <div className="away-team-box">
            {awayImage ? 
              (
                <img src={awayImage} alt="news winbet" />
              ) : 
              (
                <img src={noImage} alt="news winbet" />
              )
            }
            <span>{single.away_team.name}</span>
          </div>
        </div>
      </Link>
    )
  });
  
  return(
    <div>
      {singleEvents}
    </div>
  );
}

export default TopEvents;
