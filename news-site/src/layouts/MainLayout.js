import React from "react";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import DownHeader from "../components/DownHeader";

const MainLayout = (props) => {
    return (
      <div className="layout-wrapper">
	      <Header/>
	      <DownHeader />
	      <main>
	        {props.children}
	      </main>
	      	<Footer/>
	    </div>
    );
}

export default MainLayout;