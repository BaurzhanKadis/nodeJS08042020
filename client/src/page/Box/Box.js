import React, { Component } from "react";
import ParamsBox from "../../components/ParamsBox";
import BoxMap from "../../components/BoxMap";
import BoxStructure from "../../components/BoxStructure";

import "./Box.css";

class Box extends Component {
  state = {
    pole: [
      {
        id: 1,
        city: "Москва",
        title:
          "Собираемся на коробке в 14.00. Формат 6х6. Если кто хочет покатать мяч присоединяйтесь.",
        address: "ул. Красноармейская д.12",
        p: 11,
        date: "20.06.20 - 14.00",
        star: 4.1,
      },
      {
        id: 2,
        city: "Москва",
        title: "Турнир 5х5, два тайма по 7 мин. Приходите со своей командой",
        address: "ул. Староволынская",
        p: 18,
        date: "05.07.20 - 15.30",
        star: 4.1,
      },
      {
        id: 3,
        city: "Москва",
        title:
          "Устраиваем челлендж-розыгрыш: кто дольше всех останется чеканить мяч. Приз победителю - футбольная форма NIKE",
        address: "ул. Отрадная 1А",
        p: 19,
        date: "03.07.20 - 18.00",
        star: 4.1,
      },
    ],
    place: [
      { id: 1, coordinate: [55.684758, 37.738521] },
      { id: 2, coordinate: [55.714438, 37.478517] },
      { id: 3, coordinate: [55.859982, 37.605231] },
    ],
    mark: null,
    toggleMark: false,
  };
  chengeMark = (mark) => {
    this.setState({ mark });
  };
  render() {
    return (
      <div className="box-container">
        <ParamsBox />
        <BoxMap
          chengeMark={this.chengeMark}
          mark={this.state.mark}
          place={this.state.place}
        />
        <BoxStructure 
          chengeMark={this.chengeMark} 
          pole={this.state.pole} 
          mark={this.state.mark}/>
      </div>
    );
  }
}

export default Box;
