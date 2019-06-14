import React from 'react';
import ScoresMenu from '../../components/events/ScoresMenu';
import FinishedEvents from '../../components/events/FinishedEvents';
import EventsData from '../../containers/EventsData';
import moment from 'moment'
import {ReactTitle} from 'react-meta-tags';

const FinishedEventsPage = (props) => {
  return (
		<div className="live-scores-page">
      <ReactTitle title="Завършили мачове - Winbet"/>
      <div className="container mobile-grid">
      	<ScoresMenu/>
      	<EventsData 
          dataLink={`/events?from_time=${moment().subtract(1, 'days').format("YYYY-MM-DD")}T${moment().format("HH")}%3A48%3A44%2B00%3A00&to_time=${moment().format("YYYY-MM-DD")}T${moment().format("HH")}%3A48%3A44%2B00%3A00`}
          token=""
        >
          <FinishedEvents/>
      	</EventsData>
      </div>
		</div>
  );
}

export default FinishedEventsPage;
