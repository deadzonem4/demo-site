import React from 'react';
import ScoresMenu from '../../components/events/ScoresMenu';
import SingleEvent from '../../components/events/SingleEvent';

const SingleEventPage = props => {

  return (
		<div className="live-scores-page">
      <div className="container mobile-grid">
      	<ScoresMenu/>
        <SingleEvent id={props.match.params.id}/>
      </div>
		</div>
  );
}

export default SingleEventPage;

