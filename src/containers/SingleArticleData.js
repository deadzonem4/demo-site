import React from 'react';
import Loader from 'react-loader-spinner';
import { useHttps } from '../components/Helpers.js';

const SingleArticleData = props => {

  const [isLoading, fetchedData] = useHttps(
    `https://articles/${props.id}`,
    ''
  );
  if (isLoading) {
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#D5071C" />
      </div>
    );
  }
  if(fetchedData.data) 
    return(
      <div className="data-container">
        {React.Children.map(props.children, (child => React.cloneElement(child, { news: fetchedData.data })))}
      </div>
    ) 
    return(
      null
    )
}

export default SingleArticleData;

