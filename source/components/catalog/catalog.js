import React, { Component } from "react";
import ReactDOM from "react-dom";

import NavMenuItem from "./nav-menu-item";
import NavMenu from "./nav-menu";
import CatalogList from "./catalog-list";
import LocationContacts from "./location-contacts";
import LocationInfo from "./location-info";

const NavMenuCatalog = () => {
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

ReactDOM.render(<CatalogList />, document.getElementById("catalog__list"));

ReactDOM.render(<NavMenuCatalog />, document.getElementById("nav-menu"));

ReactDOM.render(<LocationInfo />, document.getElementById("sectionLocation"));

ReactDOM.render(<LocationContacts />, document.getElementById("footerLocation"));