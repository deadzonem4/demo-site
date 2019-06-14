import React from "react";
import noImage from '../../images/event-no-image.png';
import FullDate from "../FullDate";
import HourDate from "../HourDate";
import YearDate from "../YearDate";
import SummaryModal from "./SummaryModal";
import LineUpModal from "./LineUpModal";
import StatisticsModal from "./StatisticsModal";
import EventsData from "../../containers/EventsData";
import {ReactTitle} from 'react-meta-tags';

class SingleEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      openSummary: false,
      openLineUp: false,
      openStatistics: false,
      summaryClass: "",
      lineUpClass: "",
      statisticsClass: ""
    };
    this.handleSummary = this.handleSummary.bind(this);
    this.handleLineUp = this.handleLineUp.bind(this);
    this.handleStatistics = this.handleStatistics.bind(this);
  }
  handleSummary() {
    this.setState({
      openSummary: true,
      summaryClass: "modalActive",
      lineUpClass: "",
      statisticsClass: "",
      openLineUp: false,
      openStatistics: false
    });
  }
  handleLineUp() {
    this.setState({
      openLineUp: true,
      summaryClass: "",
      lineUpClass: "modalActive",
      statisticsClass: "",
      openSummary: false,
      openStatistics: false
    });
  }
  handleStatistics() {
    this.setState({
      openStatistics: true,
      summaryClass: "",
      lineUpClass: "",
      statisticsClass: "modalActive",
      openSummary: false,
      openLineUp: false
    });
  }
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  render() {
    const data = this.props.data
    const awayImage = data.away_team.url_logo ? data.away_team.url_logo : undefined;
    const homeImage = data.home_team.url_logo ? data.home_team.url_logo : undefined;
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
            <li onClick={this.handleSummary} className={"single-modal-button " + this.state.summaryClass}>Summary</li>
            <li onClick={this.handleLineUp} className={"single-modal-button " + this.state.lineUpClass}>Line Up</li>
            {
              //<li onClick={this.handleStatistics} className={"single-modal-button " + this.state.statisticsClass}>Statistics</li>
            }
          </ul>
          <div className="event-modals-wrapper">
          {
          (this.state.openSummary) ?
            (
              <EventsData dataLink={`https://football-api.msk.bg/events/${data.id}/incidents`} token="Basic YmU0ZWU0YTY5Y2RhZDRiZDQxNTJjOGYzMDMxNWIxNWM6NTA2ZTZjNmEzNWI0YjJkMWViNTI0NmVlYTc2NTBlOGY=">
                <SummaryModal allData={data}/>
              </EventsData>
            ) :
            null 
          }
          {
          (this.state.openLineUp) ?
            (
              <LineUpModal data={data} eventId={data.id}/>
            ) :
            null 
          }
          {
          (this.state.openStatistics) ?
            (
              <StatisticsModal data={data} eventId={data.id}/>
            ) :
            null 
          }
          </div>
        </div>
      </div>
    );
  }
}

export default SingleEvent;

