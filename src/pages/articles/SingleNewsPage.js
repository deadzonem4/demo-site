import React from 'react';
import SingleArticleData from '../../containers/SingleArticleData';
import SingleArticle from '../../components/articles/SingleArticle';

const SingleNewsPage = (props) => {

  return (
		<div className="home-content-wrapper">
			<div className="container">
				<SingleArticleData 
					id={props.match.params.id}
				>
					<SingleArticle id={props.match.params.id} token=""/>
				</SingleArticleData>
			</div>
		</div>
  );
}

export default SingleNewsPage;
