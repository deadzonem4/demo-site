import React from "react";
import noImage from '../../../images/event-no-image.png';
import { useHttpsInterval } from '../../Helpers';
import Loader from 'react-loader-spinner';

const StatisticsModal = props => {

  const [isLoading, fetchedData] = useHttpsInterval(
    `/events/${props.fullData.id}/teamstats`,
    ''
  );
  const teamsData = props.fullData;
  const statisticData = fetchedData ? fetchedData : [];



  const awayImage = teamsData.away_team.url_logo ? teamsData.away_team.url_logo : undefined;
  const homeImage = teamsData.home_team.url_logo ? teamsData.home_team.url_logo : undefined;

  if (fetchedData && fetchedData.length === 0) {
    return(
      <div className="all-events-box">
        Няма данни за избраното от Вас събитие.
      </div>
    )
  }

  if (isLoading || fetchedData.length === 0) {
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#D5071C"/>
      </div>
    );
  }

  return(
    <div>
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
        <div className="match-summary-box statistics">
          <div className="match-summary-left">
              <div className="statistic-item">{statisticData[0].statistics.goals}</div>
              <div className="statistic-item">{statisticData[0].statistics.shots_on}</div>
              <div className="statistic-item">{statisticData[0].statistics.shots_off}</div>
              <div className="statistic-item">{statisticData[0].statistics.possession}</div>
              <div className="statistic-item">{statisticData[0].statistics.offside}</div>
              <div className="statistic-item">{statisticData[0].statistics.corners}</div>
              <div className="statistic-item">{statisticData[0].statistics.fouls_committed}</div>
              <div className="statistic-item">{statisticData[0].statistics.yellow_cards}</div>
              <div className="statistic-item">{statisticData[0].statistics.red_cards}</div>
          </div>
          <div className="match-statistic">
            <div className="statistic-item">Голове</div>
            <div className="statistic-item">Точни удари</div>
            <div className="statistic-item">Неточни удари</div>
            <div className="statistic-item">Притежание на топката %</div>
            <div className="statistic-item">Засади</div>
            <div className="statistic-item">Ъглови удари</div>
            <div className="statistic-item">Нарушения</div>
            <div className="statistic-item">Жълти картони</div>
            <div className="statistic-item">Червени картони</div>
          </div>
          <div className="match-summary-right">
              <div className="statistic-item">{statisticData[1].statistics.goals}</div>
              <div className="statistic-item">{statisticData[1].statistics.shots_on}</div>
              <div className="statistic-item">{statisticData[1].statistics.shots_off}</div>
              <div className="statistic-item">{statisticData[1].statistics.possession}</div>
              <div className="statistic-item">{statisticData[1].statistics.offside}</div>
              <div className="statistic-item">{statisticData[1].statistics.corners}</div>
              <div className="statistic-item">{statisticData[1].statistics.fouls_committed}</div>
              <div className="statistic-item">{statisticData[1].statistics.yellow_cards}</div>
              <div className="statistic-item">{statisticData[1].statistics.red_cards}</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StatisticsModal;

