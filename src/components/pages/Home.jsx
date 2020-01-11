import React from "react";
import logo from "../../assets/img/timdhooreLogoWhite.svg";

const Home = props => {
  return (
    <article className="homeArticle">
      <header>
        <h2>Tim D'hoore</h2>
        <p>Creative developer</p>
      </header>
      <img src={logo} alt="Tim D'hoore logo" />
      <div className="scrollIndicator"></div>
    </article>
  );
};

export default Home;
