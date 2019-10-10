import React from 'react';
import EuropeFootballNews from '../../components/articles/EuropeFootballNews';

const EuropeFootballPage = props => {

  return (
  	<div className="home-content-wrapper">
      <div className="container">
      <EuropeFootballNews title="Новини - Европейски футбол" page={props.match.params.id}/>
		</div>
	</div>
  );
}

export default EuropeFootballPage;
