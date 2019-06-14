import React from "react";
import { Link } from "react-router-dom";
import FullDate from "../FullDate";
import noImage from '../../images/no_image.jpg';
import Sidebar from '../Sidebar';
import {ReactTitle} from 'react-meta-tags';

class AllNews extends React.Component {

  constructor() {
    super();
    this.state = {
      currentPage: 1,
      NewsPerPage: 5
    };
    this.handleClick = this.handleClick.bind(this);
    this.myRef = React.createRef()
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
    window.scrollTo({
      top: 0
    });
    sessionStorage.setItem('curPage', Number(event.target.id));
  }
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  render() {
    const news = this.props.news.map((data, index) =>{
      const imageUrl = data.image.data ? data.image.data.urls.cropped : undefined;
      if (data.category.title !== "Promotion") {
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
      }
      return(
        null
      )
    });
    const {currentPage, NewsPerPage } = this.state;

    // Logic for displaying news
    const indexOfLastImg = currentPage * NewsPerPage;
    const indexOfFirstImg = indexOfLastImg - NewsPerPage;
    const filterNews = news.filter(function (el) {
      return el != null;
    });
    const currentImg = filterNews.slice(indexOfFirstImg, indexOfLastImg);
    const renderNews = currentImg.map((filterNews, index) => {
      return <div className="news-box" key={index}>{filterNews}</div>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filterNews.length / NewsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="row">
        <ReactTitle title={this.props.title + " - Winbet"}/>
        <div className="col-md-8 col-sm-12 custom-mobile-grid">
          <div className="all-news-box" ref={this.myRef}>
            <h2 className="news-dark-title">{this.props.title}</h2>
            {renderNews}
          </div>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
        <Sidebar news={this.props.news}/>
      </div>
    );
  }
}

export default AllNews;






