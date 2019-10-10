import React, { Fragment, useState } from 'react';
import ScoresMenu from '../components/events/ScoresMenu';
import PopularEvents from '../components/events/PopularEvents';
import PopularLiveEvents from '../components/events/PopularLiveEvents';
import LeagueEvents from '../components/events/LeagueEvents';
import CountryMenu from '../components/events/CountryMenu';
import {ReactTitle} from 'react-meta-tags';
import {  useHandleHttp  } from '../components/Helpers';

const LiveScoresPage = () => {

  
  const [leagueId, setLeagueId] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const [openLeague, setOpenLeague] = useState(false);

  const leagueSeason = useHandleHttp('/tournaments/' + JSON.parse(sessionStorage.getItem('leagueId')));

  const handleLeague = (event) => {

    setOpenLeague(true);
    sessionStorage.setItem('leagueId', JSON.stringify(event.target.id));
    sessionStorage.setItem('leagueName', JSON.stringify(event.target.className));

    setLeagueName(JSON.parse(sessionStorage.getItem('leagueName')));
    setLeagueId(JSON.parse(sessionStorage.getItem('leagueId')));


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
                <CountryMenu handleLeague={handleLeague} />
              </div>
            </div>
          <div className="choose-league-page-content">
            {(openLeague) ?
              ( 
                <LeagueEvents leagueId={leagueId} leagueName={leagueName} seasonId={leagueSeason} />
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
