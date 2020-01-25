import React from "react";
import { setCurretPageIndex } from "../scenes/api";
import { useSelector } from "react-redux";

const Nav = props => {
  const handleClickNav = e => {
    e.preventDefault();
    setCurretPageIndex(
      parseInt(e.currentTarget.dataset.index, 10),
      false,
      true
    );
  };

  const currentPageIndex = useSelector(
    state => state.sceneReducer.currentPageIndex
  );

  return (
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
