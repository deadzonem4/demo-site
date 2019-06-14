import React from 'react';
import ScoresMenu from '../../components/events/ScoresMenu';
import SingleEvent from '../../components/events/SingleEvent';
import EventsData from '../../containers/EventsData';

const SingleEventPage = (props) => {
  return (
		<div className="live-scores-page">
      <div className="container mobile-grid">
      	<ScoresMenu/>
      	<EventsData dataLink={"" + props.match.params.id} token ="">
          <SingleEvent/>
      	</EventsData>
      </div>
		</div>
  );
}

export default SingleEventPage;

