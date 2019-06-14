import React from 'react';
import StorageData from '../../containers/StorageData';
import BasketballNews from '../../components/articles/BasketballNews';

const BasketballPage = (props) => {

  return (
  	<div className="home-content-wrapper">
      <div className="container">
		    <StorageData 
		      dataLink="" 
		      token=""
		    >
		      <BasketballNews title="Новини - Баскетбол"/>
		    </StorageData>
		  </div>
		</div>
  );
}

export default BasketballPage;
