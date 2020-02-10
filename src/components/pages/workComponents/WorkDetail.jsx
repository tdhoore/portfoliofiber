import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/img/tester.png";

const WorkDetail = props => {
  return (
    <article className="workDetail">
      <div className="blurSvg">
        <div className="wrapper">
          <header className="detailHeader">
            <div className="info">
              <h2>Lorem ipsum</h2>
              <p>Jeet</p>
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>lorem</dd>
                </div>
                <div>
                  <dt>Client</dt>
                  <dd>lorem</dd>
                </div>
                <div>
                  <dt>Created</dt>
                  <dd>2017</dd>
                </div>
              </dl>
              <Link to="/" className="websiteLink linkButton linkButtonBlack">
                Visit the website
              </Link>
            </div>
            <img src={image} alt="" />
          </header>
          <section className="workDetails">
            <div className="texts">
              <header>
                <h3>project details</h3>
              </header>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iure, amet inventore? Doloremque numquam necessitatibus error
                  rerum maiores, reiciendis enim nobis rem ad suscipit, incidunt
                  veritatis nihil est quaerat aut architecto. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit.
                </p>
                <p>
                  Iure, amet inventore? Doloremque numquam necessitatibus error
                  rerum maiores, reiciendis enim nobis rem ad suscipit, incidunt
                  veritatis nihil est quaerat aut architecto.
                </p>
              </div>
            </div>
            <img src={image} alt="" />
          </section>
          <section className="workImages">
            <header className="hide">
              <h3>project screenshots</h3>
            </header>
            <img src={image} alt="" />
            <img src={image} alt="" />
          </section>
          <section className="fullImage lastItem">
            <header className="hide">
              <h3>project main screenshot</h3>
            </header>
            <img src={image} alt="" />
          </section>
        </div>
        <footer>
          <div className="moreWorkHolder hide">
            <Link to="/" className="moreWorkItem">
              <article>
                <header className="solidButton solidButtonBlack">
                  <h3>Next project</h3>
                  <p>Jeet</p>
                </header>
                <img src={image} alt="" />
              </article>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default WorkDetail;
