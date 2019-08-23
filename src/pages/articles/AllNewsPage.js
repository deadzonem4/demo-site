import React from 'react';
import AllNews from '../../components/articles/AllNews';

const AllNewsPage = props => {
  
  return (
    <div className="home-content-wrapper">
      <div className="container">
        <AllNews title="Новини - Спорт" page={props.match.params.id}/>
      </div>
    </div>
  );
}

export default AllNewsPage;
