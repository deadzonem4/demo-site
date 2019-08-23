import React from "react";

const SocialLinks = props => {

  return (
    <div className="social-text col-sm-6 col-lg-3">
    	<h4>{props.title}</h4>
    	<ul>
    		<li><a  href={props.link1}>{props.text1}</a></li>
    		<li><a  href={props.link2}>{props.text2}</a></li>
    		<li><a  href={props.link3}>{props.text3}</a></li>
    		<li><a  href={props.link4}>{props.text4}</a></li>
    	</ul>
    </div>
  );
}

export default SocialLinks;