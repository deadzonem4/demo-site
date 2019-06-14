import React from "react";
import noImage from '../images/no_image.jpg';
import { Link } from "react-router-dom";
// import Banner from './Banner';

class Sidebar extends React.Component {
  render() {
    const news = this.props.news.map((data, index) =>{
      const imageUrl = data.image.data ? data.image.data.urls.uploaded.gallery : undefined;
      if (data.category.title === "Promotion" && data.important) {
        return(
          <Link className="sidebar-item" to="/promotions" key={data.id}>
                {imageUrl ? (
                  <img src={imageUrl} alt="block" />
                ) : (
                  <img src={noImage} alt="block" />
                )}
                <h4>{data.title}</h4>
                {/*<Banner width="300" height="600" link="https://media.winbetaffiliates.bg/uploads/welcome-sport2019/300x600/index.html?clickTag=https%3A%2F%2Frecord.winbetaffiliates.bg%2F_OCR83BIHOvbg_b9xdDTri5fp3tiTnr1q%2F56%2F"/> */}
          </Link>
        )
      }
      return(
        null
      )
    });
    return (
      <div className="sidebar col-md-4 col-sm-12">
        <div className="home-promotion">
          <div className="home-promotion-title">Промоции</div>
            <div className="sidebar-promo-content">
              {news}
            </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
