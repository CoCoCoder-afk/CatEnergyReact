import React, {Component} from "react";
import NavMenuItem from "../nav-menu-item";

class NavMenu extends Component {
  render () {
    return (
      <>
        <NavMenuItem classItem = "nav-menu__link_hover_gray nav-menu__link nav-menu__link_color_black" text = "Главная" link = "index.html" title = "Главная"/>
        <NavMenuItem classItem = "nav-menu__link_hover_gray nav-menu__link nav-menu__link_color_black nav-menu__link_active_green" text = "Каталог продукции" link = "catalog.html" title = "Каталог"/>
        <NavMenuItem classItem = "nav-menu__link_hover_gray nav-menu__link nav-menu__link_color_black" text = "Подбор программы" link = "form.html" title = "Заявки"/>
        <NavMenuItem classItem = "nav-menu__link_hover_gray nav-menu__link nav-menu__link_color_black" text = "Войти" link = "auth.html" title = "Авторизация"/>
      </>
    )
  }
}

export default NavMenu;