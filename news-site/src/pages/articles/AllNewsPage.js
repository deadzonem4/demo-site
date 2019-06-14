import React from 'react';
import StorageData from '../../containers/StorageData';
import AllNews from '../../components/articles/AllNews';

const AllNewsPage = (props) => {

  return (
    <div className="home-content-wrapper">
      <div className="container">
        <StorageData 
          dataLink="" 
          token=""
        >
          <AllNews title="Новини - Спорт"/>
        </StorageData>
      </div>
    </div>
  );
}

export default AllNewsPage;
