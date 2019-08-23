import React from 'react';

const Banner = props => {

  return (
    <div className="home-banner">
      <iframe title="winbet" src={props.link} width={props.width} height={props.height}></iframe>
    </div>
  );
}

export default Banner;