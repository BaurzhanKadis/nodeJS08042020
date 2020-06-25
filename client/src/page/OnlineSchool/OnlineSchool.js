import React, { Component } from "react";
import ParamsOnlineSchool from "../../components/ParamsOnlineSchool";
import VideoOnlineSchool from "../../components/VideoOnlineSchool";

import "./OnlineSchool.css";

class OnlineSchool extends Component {
  state = {
    lesson: [
      // {
      //   name: "Академия ФК Тамбов",
      //   url: "video/OnlineSchool/acd/FCTombov.mp4",
      //   filterItem: "acd",
      // },
      // {
      //   name: "Академия ФК Аякс",
      //   url: "video/OnlineSchool/acd/FCAiks.mp4",
      //   filterItem: "acd",
      // },
      // {
      //   name: "Академия ФК Чертаново",
      //   url: "video/OnlineSchool/acd/FCChertanovo.mp4",
      //   filterItem: "acd"
      // },
      {
        name: "С чего начинается футбол на Дальнем Востоке",
        url: "video/OnlineSchool/acd/4.mp4",
        filterItem: "acd"
      },
      {
        name: "Тренировка с футболистами из ФК БАРСЕЛОНА",
        url: "video/OnlineSchool/acd/FCBarsa.mp4",
        filterItem: "acd"
      }, 
      // {
      //   name: "Комплекс упражнений на развитие физики",
      //   url: "video/OnlineSchool/ofp/lesson1.mp4",
      //   filterItem: "ofp"
      // },
      // {
      //   name: "Тест Купера (тест на выносливость)",
      //   url: "video/OnlineSchool/ofp/lesson2.mp4",
      //   filterItem: "ofp"
      // },
      {
        name: "Растяжка",
        url: "video/OnlineSchool/ofp/lesson3.mp4",
        filterItem: "ofp"
      },
      // {
      //   name: "Развиваем координацию и быстроту ног",
      //   url: "video/OnlineSchool/ofp/lesson4.mp4",
      //   filterItem: "ofp"
      // },
      {
        name: "Обыгрыш на скорости",
        url: "video/OnlineSchool/tech/lesson1.mp4",
        filterItem: "tech"
      },
      {
        name: "Четыре упражнения на развитие техники и дриблинга",
        url: "video/OnlineSchool/tech/lesson2.mp4",
        filterItem: "tech"
      },
      {
        name: "Приём мяча с уходом от соберника",
        url: "video/OnlineSchool/tech/lesson3.mp4",
        filterItem: "tech"
      },
      {
        name: "Финт (Фокус Роналду)",
        url: "video/OnlineSchool/tech/lesson4.mp4",
        filterItem: "tech"
      },
    ],
    itemTeam: [
      {
        url: "img/OS/acd.jpg",
        name: "Академия",
        active: false,
        filterItem: "acd",
      },
      {
        url: "img/OS/tech.jpg",
        name: "Техника",
        active: false,
        filterItem: "tech",
      },
      {
        url: "img/OS/ofp.jpg",
        name: "Физика",
        active: false,
        filterItem: "ofp",
      },
    ],
    filter: "acd",
  };
  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  filter(items, filter) {
    switch (filter) {
      case "acd":
        return items.filter((item) => item.filterItem === filter);
      case "tech":
        return items.filter((item) => item.filterItem === filter);
      case "ofp":
        return items.filter((item) => item.filterItem === filter);
      default:
        return items;
    }
  }
  render() {
    const visibleItems = this.filter(this.state.lesson, this.state.filter);
    return (
      <div className="OnlineSchool-container">
        <ParamsOnlineSchool
          itemTeam={this.state.itemTeam}
          lesson={visibleItems}
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}
        />
        <VideoOnlineSchool
          lesson={visibleItems}
          // lesson={this.state.lesson}
        />
      </div>
    );
  }
}

export default OnlineSchool;
