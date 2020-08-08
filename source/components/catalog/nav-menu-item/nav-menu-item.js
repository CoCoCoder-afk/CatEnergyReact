import React, {Component} from "react";
import "./nav-menu-item.css";

class NavMenuItem extends Component {
  render() {
    const {link, title, text, classItem} = this.props;
    return (
      <>
        <li className = "nav-menu__item">
          <a href = {link} className = {classItem} title = {title}>{text}</a>
        </li>
      </>
    )
  }
}

export default NavMenuItem;