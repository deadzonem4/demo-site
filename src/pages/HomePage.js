import React from 'react';
import HomeNews from '../components/articles/HomeNews';
import ImportantNews from '../components/articles/ImportantNews';

const HomePage = props => {

  return (
    <div className="home-content-wrapper home">
      <div className="container">
        <ImportantNews title="Водещи новини"/>
        <HomeNews title="Последни - новини"/>
      </div>
    </div>
  );
}

export default HomePage;
