import React from "react";

const SocialIcons = props => {

  return (
    <ul className={"social-icons " + props.col}>
      <li className="social-item">
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/winbet.bg.online/">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li className="social-item">
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/winbet.online.casino/">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li className="social-item">
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCPP2j-r6BqACf-EUbEIx0Pg">
          <i className="fab fa-youtube"></i>
        </a>
      </li>
      <li className="social-item">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/dwinbet">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
    </ul>
  );
}

export default SocialIcons;