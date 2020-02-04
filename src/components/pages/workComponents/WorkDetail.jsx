import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/img/tester.png";

const WorkDetail = props => {
  return (
    <article className="workDetail">
      <div className="blurSvg">
        <div className="wrapper">
          <header className="detailHeader">
            <h2>Lorem ipsum</h2>
            <p>Jeet</p>
            <div className="imageHolder">
              <img src={image} alt="" />
            </div>
          </header>
          <section className="workStats">
            <header className="hide">
              <h3 className="hide">project statistics</h3>
            </header>
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
            <Link to="/">Visit the website</Link>
          </section>
          <section className="workDetails">
            <header>
              <h3>project details</h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              amet inventore? Doloremque numquam necessitatibus error rerum
              maiores, reiciendis enim nobis rem ad suscipit, incidunt veritatis
              nihil est quaerat aut architecto.
            </p>
            <img src={image} alt="" />
          </section>
          <section className="workImages">
            <header className="hidden">
              <h3>project screenshots</h3>
            </header>
            <img src={image} alt="" />
            <img src={image} alt="" />
            <img src={image} alt="" />
          </section>
          <footer>
            <a>next project</a>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default WorkDetail;
