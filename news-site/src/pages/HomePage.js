import React from 'react';
import StorageData from '../containers/StorageData';
import HomeNews from '../components/articles/HomeNews';
import ImportantNews from '../components/articles/ImportantNews';

const HomePage = (props) => {

  return (
    <div className="home-content-wrapper home">
      <div className="container">
        <StorageData 
          dataLink="" 
          token=""
        >
          <ImportantNews title="Водещи новини"/>
          <HomeNews title="Новини - Спорт"/>
        </StorageData>
      </div>
    </div>
  );
}

export default HomePage;
