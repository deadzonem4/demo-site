import React from 'react';
import ScoresMenu from '../../components/events/ScoresMenu';
import FinishedEvents from '../../components/events/FinishedEvents';
import {ReactTitle} from 'react-meta-tags';

const FinishedEventsPage = () => {
  
  return (
		<div className="live-scores-page">
      <ReactTitle title="Завършили мачове - Winbet"/>
      <div className="container mobile-grid">
      	<ScoresMenu/>
          <FinishedEvents/>
      </div>
		</div>
  );
}

export default FinishedEventsPage;
