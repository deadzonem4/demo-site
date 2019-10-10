import React from 'react';
import Loader from 'react-loader-spinner';
import { useHttps } from '../Helpers'


const Standings = props => {

  const [isLoading, fetchedData] = useHttps(
    `/seasons/${props.seasonId}`,
    ''
  );
  
  const data = fetchedData.stages ? fetchedData.stages[0].standing : [];

  const matches = data.map((data, index) => {
    return(
        <li className="standings-row" key={index}>
          <div className="standings-left-col">
          <div className="standings-pos-col">
            {index+1}
          </div>
          <div className="standings-team-col">
            <img src={data.team.url_logo} alt="winbet standings"/>
            <span>{data.team.name}</span>
          </div>
          </div>
          <div className="standings-stats-col">
            <span className="standings-played-col">{data.played}</span>
            <span className="standings-wins-col">{data.wins}</span>
            <span className="standings-draws-col">{data.draws}</span>
            <span className="standings-defeats-col">{data.defeits}</span>
            <span className="standings-goals-col">{data.goals_for}:{data.goals_against}</span>
            <span className="standings-points-col">{data.points}</span>
          </div>
        </li>
    )
  });

  if (isLoading) {
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#D5071C"/>
      </div>
    );
  }

  return (
    <div className="standings-box">
      <div className="standings-legend">
        <span className="standings-played-col">M</span>
        <span className="standings-wins-col">П</span>
        <span className="standings-draws-col">Р</span>
        <span className="standings-defeats-col">З</span>
        <span className="standings-goals-col">Г</span>
        <span className="standings-points-col">точки</span>
      </div>
      <ul className="standings-list">
        {matches}
      </ul>
    </div>
  );
}

export default Standings;
