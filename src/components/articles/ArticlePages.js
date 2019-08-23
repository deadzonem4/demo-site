import React from "react";
import { Link } from "react-router-dom";

const ArticlePages = props => {

  const pageNumbers = [];

  for (let i = 1; i <= `${props.fullData.meta ? props.fullData.meta.pagination.total_pages : '0'}`; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li 
        key={number}
        id={number}
      >
      <Link to={props.pageLink + number}>
          {number}
      </Link>
      </li>
    );
  });
  return (
    <ul id="page-numbers">
      {renderPageNumbers}
    </ul>
  );
}


export default ArticlePages;






