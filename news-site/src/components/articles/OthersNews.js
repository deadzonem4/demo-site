import React from "react";
import { Link } from "react-router-dom";
import FullDate from "../FullDate";
import noImage from '../../images/no_image.jpg';
import Sidebar from '../Sidebar';
import {ReactTitle} from 'react-meta-tags';

class OthersNews extends React.Component {
  
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  render() {
    const news = this.props.news.map((data, index) =>{
      const imageUrl = data.image.data ? data.image.data.urls.cropped : undefined;
      if (data.category.title === "Others") {
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
    return (
      <div className="row">
        <ReactTitle title={this.props.title + " - Winbet"}/>
        <div className="col-md-8 col-sm-12 custom-mobile-grid">
          <div className="all-news-box">
            <h2 className="news-dark-title">{this.props.title}</h2>
            {news}
          </div>
        </div>
        <Sidebar news={this.props.news}/>
      </div>
    );
  }
}

export default OthersNews;
