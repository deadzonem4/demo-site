import React from 'react';
import ScoresMenu from '../../components/events/ScoresMenu';
import FutureEvents from '../../components/events/FutureEvents';
import EventsData from '../../containers/EventsData';
import {ReactTitle} from 'react-meta-tags';

const FutureEventsPage = (props) => {
  return (
		<div className="live-scores-page">
      <ReactTitle title="Бъдещи мачове - Winbet"/>
      <div className="container mobile-grid">
      	<ScoresMenu/>
      	<EventsData dataLink="" token="">
          <FutureEvents/>
      	</EventsData>
      </div>
		</div>
  );
}

export default FutureEventsPage;
