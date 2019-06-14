import React from 'react';
import StorageData from '../../containers/StorageData';
import OthersNews from '../../components/articles/OthersNews';

const OthersPage = (props) => {

  return (
  	<div className="home-content-wrapper">
      <div className="container">
		    <StorageData 
		      dataLink="" 
		      token=""
		    >
		      <OthersNews title="Новини - Други"/>
		    </StorageData>
		  </div>
		</div>
  );
}

export default OthersPage;
