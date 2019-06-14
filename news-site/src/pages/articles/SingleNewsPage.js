import React from 'react';
import StorageData from '../../containers/StorageData';
import SingleArticle from '../../components/articles/SingleArticle';

const SingleNewsPage = (props) => {

  return (
		<div className="home-content-wrapper">
	    <div className="container">
			    <StorageData 
			    	dataLink=""
			    	token="">
			      <SingleArticle id={props.match.params.id} token=""/>
			    </StorageData>
	    </div>
		</div>
  );
}

export default SingleNewsPage;

//-------------Old request logic for later usage
// import React from 'react';
// import ApiData from '../containers/ApiData';
// import SingleArticle from '../components/SingleArticle';

// const SingleNewsPage = (props) => {

//   return (
// 		<div className="home-content-wrapper">
// 	    <div className="container">
// 			    <ApiData 
// 			    	dataLink={"" + props.match.params.id}
// 			    	token=""
// 			    >
// 			      <SingleArticle />
// 			    </ApiData>
// 	    </div>
// 		</div>
//   );
// }