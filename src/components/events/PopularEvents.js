import React from "react";
import TopEvents from "./TopEvents";
import { useHttpsInterval } from "../Helpers";
import Loader from 'react-loader-spinner';

const PopularEvents = () => {

  const [isLoading, fetchedData] = useHttpsInterval(
    '/events?group_by=tournament_season_stage&client_order=sportalios',
    ''
  );

  if (fetchedData && fetchedData.length === 0) {
    return(
      <div className="all-events-box">
        <div className="no-events">
          <h4 className="no-events-title">Към момента няма избрани мачове</h4>
        </div>
      </div>
    )
  }
  const topEvents = fetchedData
  ? fetchedData.map((data, index) =>{
    return(
      <div key={data.id}>
        <div className="league-title">
            <h4>{data.country.name + " > " + data.name}</h4>
        </div>
        <TopEvents data={data}/>
      </div>
    )
  }) : [];

  if (isLoading) {
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#D5071C"/>
      </div>
    );
  }
  return(
    <div>
      <div className="popular-events-title">
        <h4>Акценти</h4>
      </div>
      <div className="all-events-box">
        {topEvents}
      </div>
    </div>
  );
}

export default PopularEvents;
