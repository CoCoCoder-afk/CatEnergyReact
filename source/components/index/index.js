import React, { Component } from "react";
import ReactDOM from "react-dom";

import NavMenu from "./nav-menu";
import LocationContacts from "./location-contacts";
import LocationInfo from "./location-info";

const NavMenuIndex = () => {
  return (
    <>
      <NavMenu />
      <li class = "nav-menu__item">
        <a class = "" href = "#">
          <svg class = "img-logo-header navigation__logo">
            <use xlinkHref = "img/sprite.svg#logo-mobile-header"></use>
          </svg>
        </a>
      </li>
      <li class = "nav-menu__item">
        <a class = "" href = "#">
          <svg class = "img-logo-menu navigation__logo">
            <use xlinkHref = "img/sprite.svg#mobile-menu"></use>
          </svg>
        </a>
      </li>
    </>
  )
}

ReactDOM.render(<NavMenuIndex />, document.getElementById("nav-menu"));

ReactDOM.render(<LocationInfo />, document.getElementById("sectionLocation"));

ReactDOM.render(<LocationContacts />, document.getElementById("footerLocation"));