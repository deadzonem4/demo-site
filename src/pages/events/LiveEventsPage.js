import React from 'react';
import ScoresMenu from '../../components/events/ScoresMenu';
import LiveEvents from '../../components/events/LiveEvents';
import {ReactTitle} from 'react-meta-tags';

const AllEventsPage = (props) => {
  
  return (
		<div className="live-scores-page">
      <ReactTitle title="Мачове на живо - Winbet"/>
      <div className="container mobile-grid">
      	<ScoresMenu/>
        <LiveEvents/>
      </div>
		</div>
  );
}

export default AllEventsPage;
