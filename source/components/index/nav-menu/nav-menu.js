import React, {Component} from "react";
import NavMenuItem from "../nav-menu-item";

class NavMenu extends Component {
  render () {
    return (
      <>
        <NavMenuItem classItem = "nav-menu__link_hover_gray nav-menu__link nav-menu__link_color_white nav-menu__link_active_white" text = "Главная" link = "index.html" title = "Главная"/>
        <NavMenuItem classItem = "nav-menu__link_hover_gray nav-menu__link nav-menu__link_color_white" text = "Каталог продукции" link = "catalog.html" title = "Каталог"/>
        <NavMenuItem classItem = "nav-menu__link_hover_gray nav-menu__link nav-menu__link_color_white" text = "Подбор программы" link = "form.html" title = "Заявки"/>
        <NavMenuItem classItem = "nav-menu__link_hover_gray nav-menu__link nav-menu__link_color_white" text = "Войти" link = "auth.html" title = "Авторизация"/>
      </>
    )
  }
}

export default NavMenu;