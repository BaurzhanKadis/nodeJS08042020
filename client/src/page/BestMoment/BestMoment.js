import React, { Component } from "react";
import ParamsBestMoment from "../../components/ParamsBestMoment";
import ParamsTypes from "../../components/ParamsTypes";
import SettingParamsBest from "../../components/SettingParamsBest";
import ShowVideoBM from "../../components/ShowVideoBM";

import "./BestMoment.css";

class BestMoment extends Component {
  state = {
    video: [
      {
        title: `Гол Юрия Жиркова в ворота "Спартака" на 41 минуте матча`,
        name: "G-Drive TV",
        city: "Москва, Стадион Открытие Арена",
        img: "img/BM/m/G-DriveTV.jpg",
        url: "video/BestMomemt/goll/men/zenit.mp4",
        male: "m",
        type: "gol"
      },
      {
        title: "MEXES забил сумашедший гол через себя в Лиге Чемпионов",
        name: "Marafon TV",
        city: "Италия, Стадион Сан-Сиро",
        img: "img/BM/m/MarafonTV.jpg",
        url: "video/BestMomemt/goll/men/milan.mp4",
        male: "m",
        type: "gol"
      },
      {
        title: `Дальний удар Ивана Облякова в ворота "Краснодара"`,
        name: "МатчПРЕМЬЕР",
        city: "Краснодар",
        img: "img/BM/m/3.jpg",
        url: "video/BestMomemt/goll/men/cska.mp4",
        male: "m",
        type: "drill"
      },
      {
        title: "Нападающий ФК Подольск ловко обманул вратаря и забил красивый гол",
        name: "4-3-3Channel",
        city: "Россия, Домодедово",
        img: "img/BM/l/Channel.jpg",
        url: "video/BestMomemt/goll/lub/mini.mp4",
        male: "l",
        type: "combo"
      },
      {
        title: "Анна Воронина на 81 минуте оформляет хет-трик",
        name: "ФК Дончанка",
        city: "Россия, Новошахтинск",
        img: "img/BM/l/2.jpg",
        url: "video/BestMomemt/goll/lub/Anna.mp4",
        male: "l",
        type: "combo"
      },
      {
        title: "Екатерина Сивец исполнила отличный дальний удар",
        name: "ФК Дончанка",
        city: "Россия, Новошахтинск",
        img: "img/BM/l/2.jpg",
        url: "video/BestMomemt/goll/lub/kat.mp4",
        male: "l",
        type: "gol"
      },
      {
        title: "Идеальная траектория удара",
        name: "Ритм Футбола",
        city: "Россия, Суздаль",
        img: "img/BM/l/4.jpg",
        url: "video/BestMomemt/goll/lub/best.mp4",
        male: "l",
        type: "combo"
      },
      {
        title: `Победный гол Андрея Миронова в финале турнира "Кожанный мяч" (Волга 0:1 Днепр)`,
        name: "Ритм Футбола",
        city: "Россия, Суздаль",
        img: "img/BM/l/4.jpg",
        url: "video/BestMomemt/goll/lub/top.mp4",
        male: "l",
        type: "gol"
      },
      {
        title: "Нападающая английской сборной Джессика Адамс точным ударом перекинула вратаря и отправила мяч в ворота сборной Алжира. (Англия 1:0 Алжир)",
        name: "FootWoman",
        city: "Англия, Лондон",
        img: "img/BM/w/1.jpg",
        url: "video/BestMomemt/goll/woman/one.mp4",
        male: "w",
        type: "f"
      },
      {
        title: "Алиса Кёльн удивила всех своим потрясающим ударом.(Германия 5:1 Норвегия)",
        name: "FootWoman",
        city: "Германия, Нюрнберг",
        img: "img/BM/w/2.jpg",
        url: "video/BestMomemt/goll/woman/two.mp4",
        male: "w",
        type: "gol"
      },
      {
        title: "Гол с 25 метров в матче женского чемпионата России.",
        name: "Георгий Черданцев",
        city: "Россия, Рязань",
        img: "img/BM/w/3.jpg",
        url: "video/BestMomemt/goll/woman/three.mp4",
        male: "w",
        type: "save"
      },
      {
        title: "Вышел на балкон и увидел настоящее Дерби",
        name: "Георгий Черданцев",
        city: "Россия, Москва",
        img: "img/BM/c/1.jpg",
        url: "video/BestMomemt/children/1.mp4",
        male: "c",
        type: "f"
      },
      {
        title: "Обманул финтом вратаря и забил",
        name: "SKILLTWINS",
        city: "Россия, Магадан",
        img: "img/BM/c/2.png",
        url: "video/BestMomemt/children/2.mp4",
        male: "c",
        type: "f"
      },
      {
        title: "Вы только посмотрите на этот космический пенальти!",
        name: "FINITO",
        city: "Россия, Подольск",
        img: "img/BM/c/3.jpg",
        url: "video/BestMomemt/children/3.mp4",
        male: "c",
        type: "narod"
      },
    ],
    male: [
      { id: 1, name: "Мужчины PRO", active: false, male: "m" },
      { id: 2, name: "Женщины PRO", active: false, male: "w" },
      { id: 3, name: "Любители", active: false, male: "l" },
      { id: 4, name: "Дети", active: false, male: "c" },
    ],
    paramsTypes: [
      { id: 1, name: "Голы", img: "img/goll.png", active: false, type: "gol" },
      { id: 2, name: "Фэилы", img: "img/drill.png", active: false, type: "f" },
      { id: 3, name: "Комбинации", img: "img/combo.png", active: false, type: "combo" },
      { id: 4, name: "Дриблинг", img: "img/drill.png", active: false, type: "drill" },
      { id: 5, name: "Сейвы", img: "img/goll.png", active: false, type: "save" },
      { id: 6, name: "Болельщики", img: "img/combo.png", active: false, type: "narod" },
    ],
    filter: "m",
    param: "gol"
  };
  onParamChange = (param) => {
    this.setState({ param });
  }
  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  
  filter(items, filter) {
    switch (filter) {
      case "m":
        return items.filter((item) => item.male === filter);
      case "l":
        return items.filter((item) => item.male === filter);
      case "w":
        return items.filter((item) => item.male === filter);
      case "c":
        return items.filter((item) => item.male === filter);
      default:
        return items;
    }
  }
  render() {
    console.log(this.state.param)
    const visibleItems = this.filter(this.state.video, this.state.filter);
    return (
      <div className="best_moment-container">
        <ParamsBestMoment
          male={this.state.male}
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}
        />
        <ParamsTypes param={this.state.param} onParamChange={this.onParamChange} paramsTypes={this.state.paramsTypes}/>
        <SettingParamsBest />
        <ShowVideoBM param={this.state.param} video={visibleItems} />
      </div>
    );
  }
}

export default BestMoment;
