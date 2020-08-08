import React, {Component} from "react";

class LocationContacts extends Component {
  render() {
    return (
      <footer class = "site-footer container container__footer">
        <a href = "#" class = "site-footer__link site-footer__logo">
          <svg class="img-logo-footer contacts__image">
            <use xlinkHref="img/sprite.svg#footer-logo"></use>
          </svg>
        </a>
        <hr class = "contacts__between-line" />
        <ul class = "site-footer__contacts contacts">
          <li class = "contacts__item">
            <a class = "contacts__link" href = "#">
              <svg class="img-logo-vk contacts__image">
                <use xlinkHref="img/sprite.svg#vk"></use>
              </svg>
            </a>
          </li>
          <li class = "contacts__item">
            <a class = "contacts__link" href = "#">
              <svg class="img-logo-inst contacts__image">
                <use xlinkHref="img/sprite.svg#insta"></use>
              </svg>
            </a>
          </li>
          <li class = "contacts__item">
            <a class = "contacts__link" href = "#">
              <svg class="img-logo-fb contacts__image">
                <use xlinkHref="img/sprite.svg#fb"></use>
              </svg>
            </a>
          </li>
        </ul>
        <hr class = "contacts__between-line" />
        <div class = "site-footer__logo-developer logo-developer">
          <a class = "contacts__link-common" href = "#" title = "Ссылка на HTML Academy"><span class = "contacts__link-text">HTML Academy</span>
          <span class = "contacts__link">
            <svg class="img-logo-academy contacts__image logo-developer__logo">
             <use xlinkHref="img/sprite.svg#htmlacademy"></use>
           </svg>
          </span>
          </a>
        </div>
      </footer>
    )
  }
}

export default LocationContacts;