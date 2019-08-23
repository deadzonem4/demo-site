import React from "react";
import noImage from '../../../images/event-no-image.png';
import SummaryLeftCol from './SummaryLeftCol.js';
import SummaryRightCol from './SummaryRightCol.js';
import { useHttpsInterval } from '../../Helpers';
import Loader from 'react-loader-spinner';

const SummaryModal = props => {
  
  const [isLoading, fetchedData] = useHttpsInterval(
    `https://events/${props.fullData.id}/incidents`,
    ''
  );
  const teamsData = props.fullData;
  const summaryData = fetchedData ? fetchedData : [];
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
          <SummaryLeftCol summaryData={summaryData} />
        </div>
        <div className="match-summary-right">
          <SummaryRightCol summaryData={summaryData} />
        </div>
      </div>
    </div>
  );
}


export default SummaryModal;

