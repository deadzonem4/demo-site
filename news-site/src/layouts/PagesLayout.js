import React from "react";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const PagesLayout = (props) => {
    return (
      <div className="layout-wrapper">
	      <Header/>
	      <main>
	        {props.children}
	      </main>
	      	<Footer/>
	    </div>
    );
}

export default PagesLayout;