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
        <EventsData dataLink="" token="">
          <PopularLiveEvents/>
        </EventsData>
        <EventsData dataLink="" token="">
          <PopularEvents/>
        </EventsData>
      </div>
    </div>
  );
}

export default LiveScoresPage;
