import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import FullDate from "../FullDate";
import noImage from '../../images/no_image.jpg';
import Sidebar from '../Sidebar';
import {ReactTitle} from 'react-meta-tags';
import Loader from 'react-loader-spinner';
import ArticlePages from './ArticlePages';
import { useHttps } from "../Helpers";

const EuropeFootballNews = props => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoading, fetchedData] = useHttps(
    `https://articles/search?query=%2A&category=2019061322530727189&page=${props.page}`,
    '',
    []
  ); 
  
  const news = fetchedData.data

  ? fetchedData.data.map((data, index) =>{

    const imageUrl = data.image.data ? data.image.data.urls.cropped : undefined;
      return(
        <Link to={`/articles/${data.id}`} className="single-news-box" key={data.id}>
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
            <FullDate date={data.created_at} customClass="time" />
          </div>
        </Link>
      )
    }) : [];

    const filterNews = news.filter(function (el) {
      return el != null;
    });
    const renderNews = filterNews.map((filterNews, index) => {
      return <div className="news-box" key={index}>{filterNews}</div>;
    });
    
    if (isLoading) {
      return (
        <div className="loader">
          <Loader type="TailSpin" color="#D5071C"/>
        </div>
      );
    }

  return (
    <div className="row">
      <ReactTitle title={props.title + " - Winbet"}/>
      <div className="col-md-8 col-sm-12 custom-mobile-grid">
        <div className="all-news-box">
          <h2 className="news-dark-title">{props.title}</h2>
          {renderNews}
        </div>
        <ArticlePages fullData={fetchedData} pageLink="/articles/europe-football/"/>
      </div>
      <Sidebar/>
    </div>
  );
}

export default EuropeFootballNews;







