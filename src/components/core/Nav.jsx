import React from "react";
import { setTitleAndUrl } from "../scenes/api";

const Nav = props => {
  const handleClickNav = e => {
    e.preventDefault();
    setTitleAndUrl(
      e.currentTarget.textContent,
      e.currentTarget.getAttribute("href")
    );
  };

  return (
    <div>
      <nav>
        <ul>
          {props.routes.map(route => {
            return (
              <li key={route.url}>
                <a href={route.url} onClick={handleClickNav}>
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
