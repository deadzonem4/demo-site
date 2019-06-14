import React from 'react';
import StorageData from '../../containers/StorageData';
import FootballNews from '../../components/articles/FootballNews';

const FootballPage = (props) => {

  return (
  	<div className="home-content-wrapper">
      <div className="container">
		    <StorageData 
		      dataLink="" 
		      token=""
		    >
		      <FootballNews title="Новини - Футбол"/>
		    </StorageData>
		  </div>
		</div>
  );
}

export default FootballPage;
