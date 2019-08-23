import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import FullDate from "../FullDate";
import noImage from '../../images/no_image.jpg';

const ImportantNews = props => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 400,
    fade: true,
    cssEase: 'linear',
    dots: true
  };
  
  const lastNews = props.news;

  const news = lastNews.map((data, index) =>{
    const imageUrl = data.image.data ? data.image.data.urls.cropped : undefined;
    if (data.important) {
      return(
        <div key={data.id} className="col-4">
          <Link to={`/articles/${data.id}`} className="important-news-box">
            <div className="news-photo-important">
              <div className="news-red-line"></div>
              {imageUrl ? (
                <img src={imageUrl} alt="winbet" />
              ) : (
                <img src={noImage} alt="winbet" />
              )}
            </div>
            <div className="news-content-important">
              <p className="news-category">{data.category.title}</p>
              <h2 className="title">{data.title}</h2>
              <FullDate date={data.created_at} customClass="time" />
            </div>
          </Link>
          <div className="important-news-links">
            <a href="https://winbet.bg/bg/sport/" target="_blank" rel="noopener noreferrer">Заложи</a>
            <Link to={`/articles/${data.id}`}>Подробности</Link>
          </div>
        </div>
      )
    }
    return(
      null
    )
  });

  return (
    <div className="important-news-box row">
      <h2 className="news-dark-title col-12">{props.title}</h2>
      <Slider {...settings} className="full-width-slider col-12">
        {news}
      </Slider>
    </div>
  );
}

export default ImportantNews;



