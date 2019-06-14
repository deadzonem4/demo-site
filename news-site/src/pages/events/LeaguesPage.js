import React from 'react';
import ScoresMenu from '../../components/events/ScoresMenu';
import AllEvents from '../../components/events/AllEvents';
import EventsData from '../../containers/EventsData';
import {ReactTitle} from 'react-meta-tags';

const LeaguePage = (props) => {
  return (
		<div className="live-scores-page">
      <ReactTitle title="Всички мачове - Winbet"/>
      <div className="container mobile-grid">
      	<ScoresMenu/>
      	<EventsData dataLink="" token="">
          <AllEvents/>
      	</EventsData>
      </div>
		</div>
  );
}

export default LeaguePage;
