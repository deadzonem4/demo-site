import React from 'react';
import PromoArticle from '../components/articles/PromoArticle';
import StorageData from '../containers/StorageData';

const PromoPage = (props) => {
  return (
		<div className="promo-page">
			<div className="container">
	      <h2 className="promo-page-title">Промоции</h2>
	     	<StorageData 
	        dataLink="" 
	        token=""
	      >
	      	<PromoArticle title="Промоции"/>
	      </StorageData>
      </div>
		</div>
  );
}

export default PromoPage;
