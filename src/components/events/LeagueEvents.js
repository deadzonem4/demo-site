import SingleLeagueEvents from "./SingleLeagueEvents";
import React, { useState } from "react";
import { useHttps } from "../Helpers";
import Loader from 'react-loader-spinner';
import moment from 'moment';
import Standings from "./Standings";

const LeagueEvents = props => {

  const[isLoading, fetchedData] = useHttps(
    `/matches?from_start_time=${moment().add(-7,'days').format("YYYY-MM-DD")}T15:00:00Z&to_start_time=${moment().add(7,'days').format("YYYY-MM-DD")}T15:00:00Z&season_ids=${props.seasonId}`,
    '',
  );
  
  const[isOpen, setIsOpen ] = useState(false);

  const toggleStandings = () => {

    isOpen ? setIsOpen(false) : setIsOpen(true);
    
  }
    
  if(fetchedData && fetchedData.length === 0) {
    return(
      <div className="all-events-box league-box">
        <div className="popular-events-title single-title">
          <h4>{props.leagueName}</h4>
        </div>
        <div className="no-events">
          <h4 className="no-events-title">Към момента няма събития в избраното първенство</h4>
        </div>
      </div>
    )
  }

  const topEvents = fetchedData
  ? fetchedData.map((data, index) =>{
    return(
      <div className="league-box-content" key={index}>
        <SingleLeagueEvents data={data}/>
      </div>
    )
  }) : [];

  const noEmtyData = topEvents.filter(n => n);
  const filteredData = noEmtyData.reverse();

  if (isLoading) {
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#D5071C"/>
      </div>
    );
  }
  return(
    <div>
      <div className="all-events-box league-box">
        {(filteredData.length > 0) ?
          (         
          <>
            <div className="popular-events-title">
              {
                (props.leagueName === "Приятелски" || props.leagueName === "Световно" || props.leagueName === "Европейско" || props.leagueName === "Лига Европа" || props.leagueName === "Шампионска Лига") ?
                (
                  <h4>{props.leagueName}</h4> 
                ) : 
                (
                  <h4>{props.leagueName}<span onClick={toggleStandings}>Класиране</span></h4> 
                )
              }
            </div>
            {(isOpen && props.leagueName !== "Приятелски") ?
              (<>
                <Standings seasonId={props.seasonId}/>
                {filteredData}
              </>):
              (
                filteredData
              )  
            }
          </>
          ) : 
          (
            <div>
              <div className="popular-events-title single-title">
                <h4>{props.leagueName}</h4>
              </div>
              <div className="all-events-box">
                <div className="no-events">
                  <h4 className="no-events-title">Към момента няма събития в избраното първенство</h4>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default LeagueEvents;




