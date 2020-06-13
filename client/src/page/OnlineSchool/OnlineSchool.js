import React, { Component } from 'react';
import ParamsOnlineSchool from '../../components/ParamsOnlineSchool';
import VideoOnlineSchool from '../../components/VideoOnlineSchool';

import './OnlineSchool.css';

class OnlineSchool extends Component {
  state = {
    lesson: [
      { id: 1, name: "On-line школа зенита", url: "video/OnlineSchool/1.mp4" },
      { id: 2, name: "Тренировка с юношеской сборной!", url: "video/OnlineSchool/2.mp4" },
      { id: 3, name: "Школа Вратарей имени Спирякова", url: "video/OnlineSchool/3.mp4" },
      { id: 4, name: "Школа Живой футбол. Обучение сильному удару.", url: "video/OnlineSchool/4.mp4" },
      { id: 5, name: "Школа профи футбол. Урок 1 Финты", url: "video/OnlineSchool/5.mp4" },
      { id: 6, name: "Школа Футхакера. Урок 1 Финты", url: "video/OnlineSchool/6.mp4" },
    ],
    itemTeam: [
      {id: 1, url: "img/goll.png", name: "Финты", active: false, filterItem: "fint"},
      {id: 2, url: "img/drill.png", name: "Развите техники", active: false, filterItem: "tech"},
      {id: 3, url: "img/combo.png", name: "ОФП", active: false, filterItem: "ofp"},
    ],
    filter: ""
  }
  onFilterChange = (filter) => {
    this.setState({ filter });
  }
  filter(items, filter) {
    switch(filter) {
      case 'fint': 
        return items.filter((item) => item.filterItem === filter);
      case 'tech':
        return items.filter((item) => item.filterItem === filter);
      case 'ofp':
        return items.filter((item) => item.filterItem === filter);
      default:
        return items;      
    }
   };
  render() {
    // const visibleItems = this.filter(this.state.video, this.state.filter);
    return (
      <div className="OnlineSchool-container">
        <ParamsOnlineSchool 
          itemTeam={this.state.itemTeam}
          lesson={this.state.lesson}
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}/>
        <VideoOnlineSchool 
          // lesson={visibleItems}
          lesson={this.state.lesson}/>
      </div>
    );
  }
}

export default OnlineSchool;