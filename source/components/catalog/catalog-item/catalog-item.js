import React, {Component} from "react";

class CatalogItem extends Component {
  render() {
    const {name, volume, volumeValue, smell, smellValue, price, priceValue, id} = this.props;
    return (
      <li className = "catalog__item product">
        <div className = "product__logo_size_small product__logo">
          <picture>
            <source type = "image/webp" media = "(min-width: 1440px)" srcset = {"img/catalog-"+id+"-desktop.webp 1x, img/catalog-"+id+"-desktop@2x.webp 2x"}></source>
            <source type = "image/webp" media = "(min-width: 768px)" srcset = {"img/catalog-"+id+"-tablet.webp 1x , img/catalog-"+id+"-tablet@2x.webp 2x"}></source>
            <source type = "image/webp" media = "(min-width: 768px)" srcset = {"img/catalog-"+id+"-tablet.png 1x , img/catalog-"+id+"-tablet@2x.png 2x"}></source>
            <source type =  "image/webp" media = "(min-width: 320px)" srcset = {"img/catalog-"+id+"-mobile.webp 1x , img/catalog-"+id+"-mobile@2x.webp 2x"}></source>
            <img alt = "Пример нашей продукции" src = {"img/catalog-"+id+"-desktop.png"} srcset = {"img/catalog-"+id+"-desktop@2x.png 2x"} className = "product__image product__image_size_small"></img>
          </picture>
        </div>
        <h3 class = "product__heading">{name}</h3>
        <div class = "product__list">
          <div class = "product__option">
            <span class = "product__option-word">{volume}</span>
            <span class = "product__option-value">{volumeValue}</span>
          </div>
          <div class = "product__option">
            <span class = "product__option-word">{smell}</span>
            <span class = "product__option-value">{smellValue}</span>
          </div>
          <div class = "product__option">
            <span class = "product__option-word">{price}</span>
            <span class = "product__option-value">{priceValue}</span>
          </div>
        </div>
        <form action = "link">
          <button class = "product__button" name = "product__button">Заказать</button>
        </form>
      </li>
    )
  }
}

export default CatalogItem;