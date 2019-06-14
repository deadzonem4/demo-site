import React from "react";
import SocialBox from './SocialBox'
import FooterPartners from './FooterPartners'
import FooterData from '../containers/FooterData'

const Footer = (props) => {
    
  return (
  	<div id="footer">
	  	<SocialBox/>
	  	<FooterData dataLink="https://dev.winbet-bg.com/api/partners-logo">
				<FooterPartners/>
	    </FooterData>
		</div>
  );
}


export default Footer;
