import React from 'react';
import ScoresMenu from '../../components/events/ScoresMenu';
import LiveEvents from '../../components/events/LiveEvents';
import EventsData from '../../containers/EventsData';
import {ReactTitle} from 'react-meta-tags';

const AllEventsPage = (props) => {
  return (
		<div className="live-scores-page">
      <ReactTitle title="Мачове на живо - Winbet"/>
      <div className="container mobile-grid">
      	<ScoresMenu/>
      	<EventsData dataLink="https://football-api.msk.bg/events/live" token="">
          <LiveEvents/>
      	</EventsData>
      </div>
		</div>
  );
}

export default AllEventsPage;
