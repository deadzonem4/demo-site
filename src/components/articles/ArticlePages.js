import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ArticlePages = props => {

  const pageNumbers = [];

  var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false
  };

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  for (let i = 1; i <= `${props.fullData.meta ? props.fullData.meta.pagination.total_pages : '0'}`; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li 
        key={number}
        id={number}
        onClick={toTop}
      >
      <Link to={props.pageLink + number}>
          {number}
      </Link>
      </li>
    );
  });
  return (
    <ul id="page-numbers">
      <Slider {...settings} className="pages-slider">
        {renderPageNumbers}
      </Slider>
    </ul>
  );
}


export default ArticlePages;


