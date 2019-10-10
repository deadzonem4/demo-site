import React from 'react';
import BgFootballNews from '../../components/articles/BgFootballNews';

const BgFootballPage = props => {

  return (
  	<div className="home-content-wrapper">
      <div className="container">
        <BgFootballNews title="Новини - БГ футбол" page={props.match.params.id}/>
		</div>
	</div>
  );
}

export default BgFootballPage;


