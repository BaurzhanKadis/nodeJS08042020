import React, { Component } from 'react';
import ParamsBestMoment from '../../components/ParamsBestMoment';
import ParamsTypes from '../../components/ParamsTypes';
import SettingParamsBest from '../../components/SettingParamsBest';
import ShowVideoBM from '../../components/ShowVideoBM';

import './BestMoment.css';

class BestMoment extends Component {
  state = {
    video: [
      { id: 1, title: "Лучший гол Зенита в октябре", url: "video/BestMomemt/goll/men/zenit.mp4", male: "m"},//, date: new Date(2020,06,02) 
      { id: 2, title: "Лучший гол Милана в ЛЧ", url: "video/BestMomemt/goll/men/milan.mp4", male: "m"},
      { id: 3, title: "Лучший гол ЦСКА в октябре", url: "video/BestMomemt/goll/men/cska.mp4", male: "m"},
      { id: 4, title: "Красивый гол в мини футболе 433", url: "video/BestMomemt/goll/lub/mini.mp4", male: "l"},
      { id: 5, title: "Лучший гол весны Воронина Анна", url: "video/BestMomemt/goll/lub/Anna.mp4", male: "l"},
      { id: 6, title: "Лучшийгол лета Сивец Екатерина", url: "video/BestMomemt/goll/lub/kat.mp4", male: "l"},
      { id: 7, title: "Самый красивый гол в любительском футболе", url: "video/BestMomemt/goll/lub/best.mp4", male: "l"},
      { id: 8, title: "Топовый гол в любительском футболе", url: "video/BestMomemt/goll/lub/top.mp4", male: "l"},
      { id: 9, title: "Женский гол свечой", url: "video/BestMomemt/goll/woman/one.mp4", male: "w"},
      { id: 10, title: "Женский гол через себя", url: "video/BestMomemt/goll/woman/two.mp4", male: "w"},
      { id: 11, title: "Очень красивый гол в женском чемпионате России по футболу!", url: "video/BestMomemt/goll/woman/three.mp4", male: "w"},
    ],
    male: [
      {id: 1, name: "Мужчины PRO", active: false, male: "m"},
      {id: 2, name: "Женщины PRO", active: false, male: "w"},
      {id: 3, name: "Любители", active: false, male: "l"},
      {id: 4, name: "Дети", active: false, male: "c"},
    ],
    filter: ""
  }
  onFilterChange = (filter) => {
    this.setState({ filter });
  }
  filter(items, filter) {
    switch(filter) {
      case 'm': 
        return items.filter((item) => item.male === filter);
      case 'l':
        return items.filter((item) => item.male === filter);
      case 'w':
        return items.filter((item) => item.male === filter);
      default:
        return items;      
    }
   };
  render() {
    const visibleItems = this.filter(this.state.video, this.state.filter);
    return (
      <div className="best_moment-container">
        <ParamsBestMoment 
          male={this.state.male} 
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}/>
        <ParamsTypes />
        <SettingParamsBest />
        <ShowVideoBM 
          video={visibleItems}  
          />
      </div>
    );
  }
}

export default BestMoment;