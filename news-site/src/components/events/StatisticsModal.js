import React from "react";
import noImage from '../../images/event-no-image.png';

class StatisticsModal extends React.Component {

  render() {
    console.log(this.props.data);
    const data = this.props.data
    const awayImage = data.away_team.url_logo ? data.away_team.url_logo : undefined;
    const homeImage = data.home_team.url_logo ? data.home_team.url_logo : undefined;
    return(
      <div className="event-modals-box">
        <h4>Statistics</h4>
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
            <span>{data.home_team.name}</span>
          </div>
          <div className="event-modals-away-team">
            <span>{data.away_team.name}</span>
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
      </div>
    );
  }
}

export default StatisticsModal;

