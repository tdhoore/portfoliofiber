import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/img/tester.png";
import { checkCurrentItem } from "../api";
import { useSelector } from "react-redux";

const WorkDetail = props => {
  //make sure that the title and the selected item are the same
  checkCurrentItem(props.linkTitle);

  const projects = useSelector(state => state.pageReducer.projects);
  const currentItem = useSelector(state => state.pageReducer.currentItem);
  const data = projects[currentItem];

  return (
    <article className="workDetail">
      <div className="blurSvg">
        <div className="wrapper">
          <header className="detailHeader">
            <div className="info">
              <h2>{data.title}</h2>
              <p>{data.category}</p>
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>{data.role}</dd>
                </div>
                <div>
                  <dt>Client</dt>
                  <dd>{data.client}</dd>
                </div>
                <div>
                  <dt>Created</dt>
                  <dd>{data.created}</dd>
                </div>
              </dl>
              {data.websiteLink ? (
                <a
                  href={data.websiteLink}
                  className="websiteLink linkButton linkButtonBlack"
                >
                  Visit the website
                </a>
              ) : null}
            </div>
            <img src={image} alt={data.title} />
          </header>
          <section className="workDetails">
            <div className="texts">
              <header>
                <h3>project details</h3>
              </header>
              <div>
                <p>{data.desc}</p>
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
