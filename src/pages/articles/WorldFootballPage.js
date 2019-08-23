import React from 'react';
import WorldFootballNews from '../../components/articles/WorldFootballNews';

const WorldFootballPage = props => {

  return (
    <div className="home-content-wrapper">
      <div className="container">
        <WorldFootballNews title="Новини - Световен Футбол"/>
      </div>
    </div>
  );
}

export default WorldFootballPage;
