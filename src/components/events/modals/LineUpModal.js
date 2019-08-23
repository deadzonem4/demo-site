import React from "react";
import noImage from '../../../images/event-no-image.png';
import { useHttpsInterval } from '../../Helpers';
import Loader from 'react-loader-spinner';
import LineUpStartings from './LineUpStartings';
import LineUpSubs from './LineUpSubs';

const LineUpModal = props => {
 
  const [isLoading, fetchedData] = useHttpsInterval(
    `https://events/${props.fullData.id}/lineups`,
    ''
  );
  const teamsData = props.fullData;
  const lineUpData = fetchedData ? fetchedData : [];
  const awayImage = teamsData.away_team.url_logo ? teamsData.away_team.url_logo : undefined;
  const homeImage = teamsData.home_team.url_logo ? teamsData.home_team.url_logo : undefined;


  if (fetchedData && fetchedData.length === 0) {
    return(
      <div className="all-events-box">
        Няма данни за избраното от Вас събитие.
      </div>
    )
  }

  if (isLoading) {
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
      <div className="match-summary-box lineUps">
        <h4 className="lineUps-starting-title">Стартови състави</h4>
        <LineUpStartings  lineUpData={lineUpData}/>
        <h4 className="lineUps-starting-title">Резерви</h4>
        <LineUpSubs lineUpData={lineUpData}/>
      </div>
    </div>
  );
}


export default LineUpModal;

