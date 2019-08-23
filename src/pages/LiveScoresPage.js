import React, { Fragment, useState } from 'react';
import ScoresMenu from '../components/events/ScoresMenu';
import PopularEvents from '../components/events/PopularEvents';
import PopularLiveEvents from '../components/events/PopularLiveEvents';
import LeagueEvents from '../components/events/LeagueEvents';
import CountryMenu from '../components/events/CountryMenu';
import {ReactTitle} from 'react-meta-tags';

const LiveScoresPage = props => {

  const [openLeague, setOpentLeague] = useState(false);
  const [leagueId, setLeagueId] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const [leagueSeason, setLeagueSeason] = useState(0);


  const handleLeague = (event) => {
    sessionStorage.setItem('leagueId', JSON.stringify(event.target.id));
    sessionStorage.setItem('leagueName', JSON.stringify(event.target.className));

    setLeagueName(JSON.parse(sessionStorage.getItem('leagueName')));
    setLeagueId(JSON.parse(sessionStorage.getItem('leagueId')));

    fetch('https://tournaments/' + JSON.parse(sessionStorage.getItem('leagueId')), { 
      method: 'get', 
      headers: new Headers({
        "content-type": "application/json",
        authorization: "",
        accept: "application/json"
      }), 
     })
    .then(response => {
      if (!response.ok) { throw response }
      return response.json()
    })
    .then(api => {
      setLeagueSeason(api.seasons[0].id);
      setOpentLeague(true);
      sessionStorage.setItem('season', JSON.stringify(leagueSeason));
    })
    .catch(error => {
      console.log('error');
    });

    window.scrollTo(0, 0);
  }
  return (
    <div className="live-scores-page">
      <ReactTitle title="Всички мачове - Winbet"/>
      <div className="container mobile-grid">
        <ScoresMenu/>
        <div className="choose-league-page">
          <div className="sidebar">
          <div className="sticky-top">
            <div className="popular-events-title">
              <h4>Топ първенства</h4>
              </div>
                <CountryMenu handleLeague={handleLeague.bind(this)} />
              </div>
            </div>
          <div className="choose-league-page-content">
            {(openLeague) ?
              ( 
                <LeagueEvents leagueId={leagueId} leagueName={leagueName} seasonId={leagueSeason}/>
              ) :
              (
                <Fragment>
                  <PopularLiveEvents/>
                  <PopularEvents/>
                </Fragment>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveScoresPage;
