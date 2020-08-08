import React, {Component} from "react";
import CatalogItem from "../catalog-item/";
import CatalogItemLast from "../catalog-item-last";

class CatalogList extends Component {
  render() {
    return (
      <>
        <CatalogItem name = "Cat Energy Pro 500 г" id = "1" volume = "Объем" volumeValue = "500 г" smell = "Вкус" smellValue = "Курица" price = "Цена:" priceValue = "700 р." />
        <CatalogItem name = "Cat Energy Pro 1000 г" id = "2" volume = "Объем" volumeValue = "1000 г" smell = "Вкус" smellValue = "Курица" price = "Цена:" priceValue = "1000 р." />
        <CatalogItem name = "Cat Energy Pro 500 г" id = "3" volume = "Объем" volumeValue = "500 г" smell = "Вкус" smellValue = "Рыба" price = "Цена:" priceValue = "700 р." />
        <CatalogItem name = "Cat Energy Pro 1000 г" id = "4" volume = "Объем" volumeValue =  "1000 г" smell = "Вкус" smellValue = "Рыба" price = "Цена:" priceValue = "1000 р." />
        <CatalogItem name = "Cat Energy Pro 500 г" id = "5" volume = "Объем" volumeValue = "500 г" smell = "Вкус" smellValue = "Гречка" price = "Цена:" priceValue = "700 р." />
        <CatalogItem name = "Cat Energy Pro 1000 г" id = "6" volume = "Объем" volumeValue =  "1000 г" smell = "Вкус" smellValue = "Гречка" price = "Цена:" priceValue = "1000 р." />
        <CatalogItem name = "Cat Energy Pro 500 г" id = "7" volume = "Объем" volumeValue = "500 г" smell = "Вкус" smellValue = "Рис" price = "Цена:" priceValue = "700 р." />
        <CatalogItemLast />
      </>
    )
  }
}

export default CatalogList;