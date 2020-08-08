import React, {Component} from "react";

class LocationInfo extends Component {
  render() {
    return (
      <div class = "location__info info">
        <div class = "location__item">
          <p class = "info__text">Приглашаем к сотрудничеству дилеров!</p>
        </div>
        <div class = "location__item">
          <p class = "info__street"> ул. Большая <br/> Конюшенная, д. 19/8 <br/><br/> Санкт-Петербург</p>
        </div>
      </div>
    )
  }
}

export default LocationInfo;