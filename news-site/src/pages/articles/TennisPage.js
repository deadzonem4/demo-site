import React from 'react';
import StorageData from '../../containers/StorageData';
import TennisNews from '../../components/articles/TennisNews';

const TennisPage = (props) => {

  return (
  	<div className="home-content-wrapper">
      <div className="container">
		    <StorageData 
		      dataLink="" 
		      token=""
		    >
		      <TennisNews title="Новини - Тенис"/>
		    </StorageData>
		  </div>
		</div>
  );
}

export default TennisPage;
