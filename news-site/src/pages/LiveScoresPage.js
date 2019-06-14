import React from 'react';
import ScoresMenu from '../components/events/ScoresMenu';
import PopularEvents from '../components/events/PopularEvents';
import PopularLiveEvents from '../components/events/PopularLiveEvents';
import EventsData from '../containers/EventsData';
import {ReactTitle} from 'react-meta-tags';

const LiveScoresPage = (props) => {
  return (
    <div className="live-scores-page">
      <ReactTitle title="Всички мачове - Winbet"/>
      <div className="container mobile-grid">
        <ScoresMenu/>
        <EventsData dataLink="https://football-api.msk.bg/events/live" token="">
          <PopularLiveEvents/>
        </EventsData>
        <EventsData dataLink="https://football-api.msk.bg/events?group_by=tournament_season_stage&client_order=sportalios" token="">
          <PopularEvents/>
        </EventsData>
      </div>
    </div>
  );
}

export default LiveScoresPage;
