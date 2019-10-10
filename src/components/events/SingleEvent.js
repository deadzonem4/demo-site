import React, { useState } from "react";
import noImage from '../../images/event-no-image.png';
import FullDate from "../FullDate";
import HourDate from "../HourDate";
import YearDate from "../YearDate";
import SummaryModal from "./modals/SummaryModal";
import LineUpModal from "./modals/LineUpModal";
import StatisticsModal from "./modals/StatisticsModal";
import H2HModal from "./modals/H2HModal";
import {ReactTitle} from 'react-meta-tags';
import { useHttpsInterval } from '../Helpers';
import Loader from 'react-loader-spinner';

const SingleEvent = props => {

  const [summary, setSummary] = useState(false);
  const [lineUp, setLineUp] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [h2h, setH2h] = useState(false);
  const [isLoading, fetchedData] = useHttpsInterval(
    `/events/${props.id}`,
    ''
  );
  const data = fetchedData ? fetchedData : [];

  const handleModals = (target) => {
    if(target === "summary"){
      setSummary(true);
      setLineUp(false);
      setStatistics(false);
      setH2h(false);
    }
    if(target === "lineUp"){
      setSummary(false);
      setLineUp(true);
      setStatistics(false);
      setH2h(false);
    }
    if(target === "statistics"){
      setSummary(false);
      setLineUp(false);
      setStatistics(true);
      setH2h(false);
    }
    if(target === "h2h"){
      setSummary(false);
      setLineUp(false);
      setStatistics(false);
      setH2h(true);
    }
  }

  if (isLoading || data.length === 0) {
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#D5071C"/>
      </div>
    );
  }

  const awayImage = data.away_team.url_logo ? data.away_team.url_logo : undefined;
  const homeImage = data.home_team.url_logo ? data.home_team.url_logo : undefined;
  const homePenalty = data.home_score ? data.home_score.penalty_shootout : undefined;
  const awayPenalty = data.away_score ? data.away_score.penalty_shootout : undefined;

  return(
    <div className="all-events-box">
      <ReactTitle title={`${data.tournament_season_stage.name} - Winbet`}/>
      <h4 className="single-event-box-title">{data.tournament_season_stage.country.name + " > " + data.tournament_season_stage.name + " > "}<FullDate date={data.start_time} customClass="events-time" /></h4>
      <div className="single-event-box-detail">
        <div className="single-teams-info">
          <div className="single-home-team">
            <span>{data.home_team.name}</span>
            {homeImage ? 
              (
                <img src={homeImage} alt="news winbet" />
              ) : 
              (
                <img src={noImage} alt="news winbet" />
              )
            }
          </div>
            {(data.event_status.code !== "not_started") ? 
              (
                <div className="single-event-result">
                  {data.goal_home}
                  <span className="single-result-separator">
                    -
                  </span>
                  {data.goal_away}
                  {(homePenalty && awayPenalty) ?
                    (
                      <div className="penalty-single-view">
                        {homePenalty}
                        <span className="single-result-separator">
                          -
                        </span>
                        {awayPenalty}
                        <div>(дузпи)</div>
                      </div>
                    ) :
                    (
                      null
                    )

                  }
                </div>
              ) : 
              (
                <div className="single-event-result">
                  <HourDate date={data.start_time} customClass="events-time" />
                </div>
              )
            }
          <div className="single-away-team">
            {awayImage ? 
              (
                <img src={awayImage} alt="news winbet" />
              ) : 
              (
                <img src={noImage} alt="news winbet" />
              )
            }
            <span>{data.away_team.name}</span>
          </div>
        </div>
        <div className="single-event-status">
          {(data.event_status.code === "finished") ? 
            (
              <span>КР</span>
            ) : 
            (
              (data.event_status.type === "inprogress" && data.event_status.code !== "halftime") ?
                (
                  <div className="single-event-live">{"на живо: " + data.minute + "'"}</div>
                ) :
                (data.event_status.type === "inprogress") ?
                  (
                    <div className="single-event-live">{"на живо: полувреме"}</div>
                  ):
                (
                  null
                )
            )
          }
        </div>
        <div className="single-event-more-info">
          <div className="single-event-tournament">
            <span>Турнир:</span>
            {data.tournament_season_stage.name}
          </div>
          <div className="single-event-date-info">
            <span>Дата:</span>
            <YearDate date={data.start_time} customClass="single-events-time" />
          </div>
          <div className="single-event-starting-time">
            <span>Начален час:</span>
            <HourDate date={data.start_time} customClass="single-events-time" />
          </div>
        </div>
        <ul className="modal-buttons">
          <li onClick={handleModals.bind(this, "summary")} className={"single-modal-button " }>Summary</li>
          <li onClick={handleModals.bind(this, "lineUp")} className={"single-modal-button " }>Line Up</li>
          <li onClick={handleModals.bind(this, "statistics")} className={"single-modal-button " }>Statistics</li>
          <li onClick={handleModals.bind(this, "h2h")} className={"single-modal-button " }>H2H</li>
        </ul>
        <div className="event-modals-wrapper">
        {
        (summary) ?
          (
            <SummaryModal fullData={data}/>
          ) :
          null 
        }
        {
        (lineUp && data.lineup_available !== undefined) ?
          (
            <LineUpModal fullData={data}/>
          ) : 
          (lineUp) ?
            (
              <div className="all-events-box">
                Няма данни за избраното от Вас събитие.
              </div> 
            ):
            (null)
        }
        {
        (statistics && data.teamstats_available !== undefined) ?
          (
            <StatisticsModal fullData={data}/>
          ) : 
          (statistics) ?
            (
              <div className="all-events-box">
                Няма данни за избраното от Вас събитие.
              </div>
            ):
            null
        }
        {
          (h2h) ?
            (
              <H2HModal fullData={data}/>
            ):
            (null)
        }
        </div>
      </div>
    </div>
  );
}

export default SingleEvent;

