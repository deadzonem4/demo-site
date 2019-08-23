import React from "react";
import noImage from '../../images/no_image.jpg';
import { ReactTitle } from 'react-meta-tags';
import { useHttpsStore } from '../Helpers';
import Loader from 'react-loader-spinner';

const OthersNews = props => {
  
  const[isLoading, fetchedData] = useHttpsStore(
    "https://articles/search?query=*&category=2019061411253008782",
    "",
    "promo",
    "promoDate"
  );

  const news = fetchedData.data

  ? fetchedData.data.map((data, index) =>{

    const imageUrl = data.image.data ? data.image.data.urls.uploaded.gallery : undefined;
    const text = data.body[0] ? data.body[0].data.content : undefined;
    const link = data.body[1] ? data.body[1].data.content : undefined;
    
    if (data.category.title === "Promotion") {
      return(
        <div key={data.id} className="promo-article col-md-6 col-sm-12">
          <div className="promo-article-box">
            <div className="news-photo">
              <div className="news-red-line"></div>
              {imageUrl ? (
                <img src={imageUrl} alt="news winbet" />
              ) : (
                <img src={noImage} alt="news winbet" />
              )}
            </div>
            <div className="news-content">
              <h2 className="title">{data.title}</h2>
              <div className="promo-text" dangerouslySetInnerHTML={{__html: text}} />
              <div className="promo-link" dangerouslySetInnerHTML={{__html: link}} />
            </div>
          </div>
        </div>
      )
    }
    return(
      null
    )
  }) : [];

  if (isLoading) {
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#D5071C"/>
      </div>
    );
  }
  return (
    <div className="all-news-box row">
      <ReactTitle title={props.title + " - Winbet"}/>
      {news}
    </div>
  );
}

export default OthersNews;
