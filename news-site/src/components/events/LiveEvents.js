import React from "react";
import { Link } from "react-router-dom";
import noImage from '../../images/event-no-image.png';

var leagueTitle = null;
var checkTitleRender = false;

class LiveEvents extends React.Component {
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  shouldComponentUpdate(){
  	checkTitleRender = true;
  	return checkTitleRender;
  }
  render() {
  	if (this.props.data.length === 0) {
  		return(
  		<div className="all-events-box">
        <div className="no-events">
        	<h4 className="no-events-title">Към момента няма събития на живо</h4>
        </div>
      </div>
  		)
  	}
    const events = this.props.data.map((data, index) =>{
    	var checkTitle = false;
      const awayImage = data.away_team.url_logo ? data.away_team.url_logo : undefined;
      const homeImage = data.home_team.url_logo ? data.home_team.url_logo : undefined;
      const homeScore = data.home_score ? data.home_score.ordinary_time : undefined;
      const awayScore = data.away_score ? data.away_score.ordinary_time : undefined;
      if (leagueTitle !== data.tournament_season_stage.name) {
			 leagueTitle = data.tournament_season_stage.name;
			 checkTitle = true;
			}
      return(
      	<div key={data.id}>
      	  <div className="league-title">
        	  {checkTitle ? 
        	  	(
                <h4>{data.tournament_season_stage.country.name + " > " + leagueTitle}</h4>
              ) :

              (checkTitleRender ?
              	(
									<h4>{data.tournament_season_stage.country.name + " > " + leagueTitle}</h4>
              	) :
              	(
                	null
                )
            	)
            }
          </div>
	        <Link className="single-event-box" to={`/event/${data.id}`}>
	          <div className="event-info">
          	  {
	              (data.minute) ? 
	              	(
	              		<span className="event-status">
	              			<div className="live-dot"></div>
	              			{data.minute + "'"}
	              			<div className="events-right-line"></div>
	              		</span>
	              	) :
	              	(
										<span className="event-status">
											<div className="live-dot"></div>
											поч.
											<div className="events-right-line"></div>
										</span>
	              	)
	            }
		          <div className="home-team-box">
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
		            <span>{data.away_team.name}</span>
		          </div>
	          </div>
	        </Link>
        </div>
      )
    });
    return(
      <div className="all-events-box">
        {events}
      </div>
    );
  }
}

export default LiveEvents;
