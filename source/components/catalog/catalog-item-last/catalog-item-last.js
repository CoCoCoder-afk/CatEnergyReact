import React, {Component} from "react";

class CatalogItemLast extends Component {
  render() {
    return(
      <li class = "catalog__item catalog__item_theme_last product">
        <div class = "product__logo product__logo_theme_last">
          <svg class="img-logo-product contacts__image">
            <use xlinkHref="img/sprite.svg#plus"></use>
          </svg>
          <svg class="img-logo-product contacts__image">
            <use xlinkHref="img/sprite.svg#plus-mobile"></use>
          </svg>
        </div>
        <h3 class = "product__heading product__heading_theme_last">Показать ещё 100500 товаров </h3>
        <p class = "product__text product__text_theme_last">На самом деле вкусов гораздо больше!</p>
        <form action = "link">
          <button class = "product__button product__button_theme_last" name = "product__button">Показать всё</button>
        </form>
      </li>
    )
  }
}

export default CatalogItemLast;