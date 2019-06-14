import React from "react";
import noImage from '../../images/no_image.jpg';
import {ReactTitle} from 'react-meta-tags';

class OthersNews extends React.Component {
  
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  render() {
    const news = this.props.news.map((data, index) =>{
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
    });
    return (
      <div className="all-news-box row">
        <ReactTitle title={this.props.title + " - Winbet"}/>
        {news}
      </div>
    );
  }
}

export default OthersNews;
