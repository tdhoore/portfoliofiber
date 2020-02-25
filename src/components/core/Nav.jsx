import React, { useEffect, useState } from "react";
import { setCurretPageIndex } from "../scenes/api";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSceneRotation } from "../scenes/api";

const Nav = props => {
  const currentPageIndex = useSelector(
    state => state.sceneReducer.currentPageIndex
  );

  const [blackBackBtn, setBlackBackBtn] = useState(true);

  const handleClickNav = e => {
    e.preventDefault();
    setCurretPageIndex(
      parseInt(e.currentTarget.dataset.index, 10),
      false,
      true
    );
  };

  const resizeNav = () => {
    if (props.isWorkDetail) {
      if (window.innerWidth > 1400) {
        setBlackBackBtn(false);
      } else {
        setBlackBackBtn(true);
      }
    }
  };

  useEffect(() => {
    resizeNav();

    window.addEventListener("resize", resizeNav);

    return () => {
      window.removeEventListener("resize", resizeNav);
    };
  });

  return props.isWorkDetail ? (
    <div className="backBtn">
      <Link
        to="/work"
        className={`websiteLink linkButton ${
          blackBackBtn ? "linkButtonBlack" : ""
        }`}
      >
        back
      </Link>
    </div>
  ) : (
    <div className="mainNav">
      <nav>
        <ul>
          {props.routes.map((route, index) => {
            return (
              <li key={route.url}>
                <a
                  href={route.url}
                  onClick={handleClickNav}
                  data-index={index}
                  className={
                    index === currentPageIndex
                      ? "selectedNav"
                      : "notSelectedNav"
                  }
                >
                  {route.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
