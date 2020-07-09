import React, { Component } from "react";
import ParamsOnlineSchool from "../../components/ParamsOnlineSchool";
import VideoOnlineSchool from "../../components/VideoOnlineSchool";

import "./OnlineSchool.css";

class OnlineSchool extends Component {
  state = {
    lesson: [
      {
        id: 1,
        name: "Академия ФК Тамбов",
        url: "video/OnlineSchool/acd/1.mp4",
        filterItem: "acd",
        like: 5555,
        date: "Wed Jul 08 2020 22:37:13"
      },
      {
        id: 2,
        name: "Академия ФК Аякс",
        url: "video/OnlineSchool/acd/2.mp4",
        filterItem: "acd",
        like: 5888,
        date: "Wed Jul 07 2020 22:37:13"
      },
      {
        id: 3,
        name: "Академия ФК Чертаново",
        url: "video/OnlineSchool/acd/3.mp4",
        filterItem: "acd",
        like: 5954,
        date: "Wed Jul 06 2020 22:37:13"
      },
      {
        id: 4,
        name: "С чего начинается футбол на Дальнем Востоке",
        url: "video/OnlineSchool/acd/4.mp4",
        filterItem: "acd",
        like: 6000,
        date: "Wed Jul 05 2020 22:37:13"
      },
      {
        id: 5,
        name: "Тренировка с футболистами из ФК БАРСЕЛОНА",
        url: "video/OnlineSchool/acd/FCBarsa.mp4",
        filterItem: "acd",
        like: 7000,
        date: "Wed Jul 04 2020 22:37:13"
      }, 
      {
        id: 6,
        name: "Комплекс упражнений на развитие физики",
        url: "video/OnlineSchool/ofp/4.mp4",
        filterItem: "ofp",
        like: 4562,
        date: "Wed Jul 08 2020 22:37:13"
      },
      {
        id: 7,
        name: "Тест Купера (тест на выносливость)",
        url: "video/OnlineSchool/ofp/5.mp4",
        filterItem: "ofp",
        like: 4864,
        date: "Wed Jul 07 2020 22:37:13"
      },
      {
        id: 8,
        name: "Растяжка",
        url: "video/OnlineSchool/ofp/lesson3.mp4",
        filterItem: "ofp",
        like: 4777,
        date: "Wed Jul 06 2020 22:37:13"
      },
      {
        id: 9,
        name: "Развиваем координацию и быстроту ног",
        url: "video/OnlineSchool/ofp/6.mp4",
        filterItem: "ofp",
        like: 5454,
        date: "Wed Jul 05 2020 22:37:13"
      },
      {
        id: 10,
        name: "Обыгрыш на скорости",
        url: "video/OnlineSchool/tech/lesson1.mp4",
        filterItem: "tech",
        like: 4562,
        date: "Wed Jul 08 2020 22:37:13"
      },
      {
        id: 11,
        name: "Четыре упражнения на развитие техники и дриблинга",
        url: "video/OnlineSchool/tech/lesson2.mp4",
        filterItem: "tech",
        like: 4864,
        date: "Wed Jul 07 2020 22:37:13"
      },
      {
        id: 12,
        name: "Приём мяча с уходом от соберника",
        url: "video/OnlineSchool/tech/lesson3.mp4",
        filterItem: "tech",
        like: 5412,
        date: "Wed Jul 06 2020 22:37:13"
      },
      {
        id: 13,
        name: "Финт (Фокус Роналду)",
        url: "video/OnlineSchool/tech/lesson4.mp4",
        filterItem: "tech",
        like: 6547,
        date: "Wed Jul 05 2020 22:37:13"
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
    setting: 2,
    visible: false,
    filterParam: [
      {id:1, name: "По популярности"},
      {id:2, name: "По дате"},
      {id:3, name: "Сброс"}
    ]
  };
  onVisibleSetting = () => {
    this.setState({
      visible: !this.state.visible
    })
  }
  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  onToggleLike = (id) => {
    this.setState(({ lesson }) => {
      const idx = lesson.findIndex((el) => el.id === id);
      const oldItem = lesson[idx];
      const newItem = { ...oldItem, like: oldItem.like + 1 };
      const newArray = [ 
        ...lesson.slice(0, idx),
        newItem,
        ...lesson.slice(idx + 1)
      ];
      return {
        lesson: newArray
      }
    })
  }
  prom = (id, setting) => {
    this.setState({ setting })
    switch (id) {
      case 1:
        return this.state.lesson.sort((a,b)=>{return b.like-a.like});
      case 2: 
        return this.state.lesson.sort((a,b)=>{return new Date(b.date).getTime()-new Date(a.date).getTime()});
      default:
        return 1
    }
   }
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
          onVisibleSetting={this.onVisibleSetting} 
          visible={this.state.visible}
          filter={this.state.filter}
          setting={this.state.setting}
          prom={this.prom}  
          filterParam={this.state.filterParam}
        />
        <VideoOnlineSchool
          lesson={visibleItems}
          onToggleLike={this.onToggleLike}
          // lesson={this.state.lesson}
        />
      </div>
    );
  }
}

export default OnlineSchool;
