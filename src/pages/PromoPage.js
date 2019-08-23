import React from 'react';
import PromoArticle from '../components/articles/PromoArticle';

const PromoPage = props => {

  return (
		<div className="promo-page">
			<div className="container">
			<h2 className="promo-page-title">Промоции</h2>
				<PromoArticle title="Промоции"/>
			</div>
		</div>
  );
}

export default PromoPage;
