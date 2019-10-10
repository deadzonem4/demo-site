import React from "react";
import SocialLinks from './SocialLinks.js'
import SocialIcons from './SocialIcons.js'

const SocialBox = () => {

  return (
    <div className="social-box">
	    <div className="container">
	      <div className="social-box-content">
	      	<div className="row">
		      	<SocialIcons col="col-12"/>
		        <SocialLinks 
			        title="Winbet"
			        text1="За нас"
			        link1="/"
			        text2="Новини"
			        link2="/"
			        text3="Игрален сайт"
			        link3="https://winbet.bg"
		        />
		        <SocialLinks 
			        title="Информация за партньори"
			        text1="Правила и условия"
			        link1="/"
			        text2="Комисионна"
			        link2="/"
			        text3="Често задавани въпроси"
			        link3="/"
			        text4="Отговорно залагане"
			        link4="/"
		        />
		        <SocialLinks 
			        title="Обслужване на клиенти"
			        text1="Бонуси и промоции"
			        link1="/"
			        text2="Депозити и тегления"
			        link2="/"
		        />
		        <SocialLinks 
			        title="Контакти"
			        text1="Контактна форма"
			        link1="/"
		        />
	        </div>
	      </div>
      </div>
    </div>
  );
}

export default SocialBox;