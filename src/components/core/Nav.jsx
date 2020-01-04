import React from "react";
import { setCurretPageIndex } from "../scenes/api";

const Nav = props => {
  const handleClickNav = e => {
    e.preventDefault();
    setCurretPageIndex(
      parseInt(e.currentTarget.dataset.index, 10),
      false,
      true,
      true
    );
  };

  return (
    <div className="mainNav">
      <nav>
        <ul>
          {props.routes.map((route, index) => {
            return (
              <li key={route.url}>
                <a href={route.url} onClick={handleClickNav} data-index={index}>
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
