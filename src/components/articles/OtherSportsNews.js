import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FullDate from "../FullDate";
import noImage from '../../images/no_image.jpg';
import Sidebar from '../Sidebar';
import {ReactTitle} from 'react-meta-tags';
import Loader from 'react-loader-spinner';
import { useHttps, checkArticlesDate, sortArticles } from "../Helpers";

const OtherSportsNews = props => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoading, fetchedData] = useHttps(
    `query=*&category=2019051706040223431`,
    '',
    []
  ); 
    
  const sortNews = fetchedData.data ? sortArticles(fetchedData.data) : [];
  
  const news = sortNews.map((data, index) =>{

    const imageUrl = data.image.data ? data.image.data.urls.cropped : undefined;

    if(checkArticlesDate(data.published_at)) 
    return(
      <Link to={`/articles/${data.id}`} className="single-news-box" key={index}>
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
          <FullDate date={data.published_at} customClass="time" />
        </div>
      </Link>
    )
    return null
  });

  if (isLoading) {
    return (
      <div className="loader">
        <Loader type="TailSpin" color="#D5071C"/>
      </div>
    );
  }
  
  if (news.length === 0) {
    return (
      <div className="row">
      <ReactTitle title={props.title + " - Winbet"}/>
      <div className="col-md-8 col-sm-12 custom-mobile-grid">
        <div className="all-news-box">
          <h2 className="news-dark-title">{props.title}</h2>
          <p className="articles-comming-soon">Очаквайте скоро</p>
        </div>
      </div>
      <Sidebar/>
    </div>
    );
  }

  return (
    <div className="row">
      <ReactTitle title={props.title + " - Winbet"}/>
      <div className="col-md-8 col-sm-12 custom-mobile-grid">
        <div className="all-news-box">
          <h2 className="news-dark-title">{props.title}</h2>
          {news}
        </div>
      </div>
      <Sidebar/>
    </div>
  );
}

export default OtherSportsNews;
