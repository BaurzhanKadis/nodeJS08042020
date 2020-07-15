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
        id: 1,
        title: `Гол Юрия Жиркова в ворота "Спартака" на 41 минуте матча`,
        // name: "G-Drive TV",
        // city: "Москва, Стадион Открытие Арена",
        // img: "img/BM/m/G-DriveTV.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/men/zenit.mp4",
        male: "m",
        type: "gol",
        date: "Mon Jul 04 2020 14:49:28",
        like: 2000
      },
      {
        id: 2,
        title: "MEXES забил сумашедший гол через себя в Лиге Чемпионов",
        // name: "Marafon TV",
        // city: "Италия, Стадион Сан-Сиро",
        // img: "img/BM/m/MarafonTV.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/men/milan.mp4",
        male: "m",
        type: "gol",
        date: "Mon Jul 06 2020 14:30:28",
        like: 1990
      },
      {
        id: 3,
        title: `Дальний удар Ивана Облякова в ворота "Краснодара"`,
        // name: "МатчПРЕМЬЕР",
        // city: "Краснодар",
        // img: "img/BM/m/3.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/men/cska.mp4",
        male: "m",
        type: "drill",
        date: "Mon Jul 06 2020 14:20:28",
        like: 199
      },
      {
        id: 4,
        title: "Нападающий ФК Подольск ловко обманул вратаря и забил красивый гол",
        // name: "4-3-3Channel",
        // city: "Россия, Домодедово",
        // img: "img/BM/l/Channel.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/lub/mini.mp4",
        male: "l",
        type: "combo",
        date: "Mon Jul 06 2020 14:10:28",
        like: 3000
      },
      {
        id: 5,
        title: "Анна Воронина на 81 минуте оформляет хет-трик",
        // name: "ФК Дончанка",
        // city: "Россия, Новошахтинск",
        // img: "img/BM/l/2.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/lub/Anna.mp4",
        male: "l",
        type: "combo",
        date: "Mon Jul 06 2020 13:50:28",
        like: 4201
      },
      {
        id: 6,
        title: "Екатерина Сивец исполнила отличный дальний удар",
        // name: "ФК Дончанка",
        // city: "Россия, Новошахтинск",
        // img: "img/BM/l/2.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/lub/kat.mp4",
        male: "l",
        type: "gol",
        date: "Mon Jul 06 2020 12:20:28",
        like: 1990
      },
      {
        id: 7,
        title: "Идеальная траектория удара",
        // name: "Ритм Футбола",
        // city: "Россия, Суздаль",
        // img: "img/BM/l/4.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/lub/best.mp4",
        male: "l",
        type: "combo",
        date: "Mon Jul 06 2020 11:20:28",
        like: 5555
      },
      {
        id: 8,
        title: `Победный гол Андрея Миронова в финале турнира "Кожанный мяч" (Волга 0:1 Днепр)`,
        // name: "Ритм Футбола",
        // city: "Россия, Суздаль",
        // img: "img/BM/l/4.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/lub/top.mp4",
        male: "l",
        type: "gol",
        date: "Mon Jul 06 2020 10:20:28",
        like: 1991
      },
      {
        id: 9,
        title: "Нападающая английской сборной Джессика Адамс точным ударом перекинула вратаря и отправила мяч в ворота сборной Алжира. (Англия 1:0 Алжир)",
        // name: "FootWoman",
        // city: "Англия, Лондон",
        // img: "img/BM/w/1.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/woman/one.mp4",
        male: "w",
        type: "f",
        date: "Mon Jul 05 2020 14:20:28",
        like: 418
      },
      {
        id: 10,
        title: "Алиса Кёльн удивила всех своим потрясающим ударом.(Германия 5:1 Норвегия)",
        // name: "FootWoman",
        // city: "Германия, Нюрнберг",
        // img: "img/BM/w/2.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/woman/two.mp4",
        male: "w",
        type: "gol",
        date: "Mon Jul 04 2020 14:20:28",
        like: 1984
      },
      {
        id: 11,
        title: "Гол с 25 метров в матче женского чемпионата России.",
        // name: "Георгий Черданцев",
        // city: "Россия, Рязань",
        // img: "img/BM/w/3.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/woman/three.mp4",
        male: "w",
        type: "save",
        date: "Mon Jul 02 2020 14:20:28",
        like: 184
      },
      {
        id: 12,
        title: "Вышел на балкон и увидел настоящее Дерби",
        // name: "Георгий Черданцев",
        // city: "Россия, Москва",
        // img: "img/BM/c/1.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/children/1.mp4",
        male: "c",
        type: "f",
        date: "Mon Jul 01 2020 14:20:28",
        like: 194
      },
      {
        id: 13,
        title: "Обманул финтом вратаря и забил",
        // name: "SKILLTWINS",
        // city: "Россия, Магадан",
        // img: "img/BM/c/2.png",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/children/2.mp4",
        male: "c",
        type: "f",
        date: "Mon Jul 01 2020 10:20:28",
        like: 912
      },
      {
        id: 14,
        title: "Вы только посмотрите на этот космический пенальти!",
        // name: "FINITO",
        // city: "Россия, Подольск",
        // img: "img/BM/c/3.jpg",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/children/3.mp4",
        male: "c",
        type: "narod",
        date: "Mon Jul 03 2020 18:20:28",
        like: 1977
      },
      {
        id: 15,
        title: "Болельщики в Польше",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/narod/FansfromPoland.mp4",
        male: "m",
        type: "narod",
        date: "Wed Jul 08 2020 11:03:12",
        like: 1945
      },
      {
        id: 16,
        title: "Огни на трибуне",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/narod/Lightsonthepodium.mp4",
        male: "m",
        type: "narod",
        date: "Wed Jul 07 2020 11:03:12",
        like: 2541
      },
      {
        id: 17,
        title: "Комбинация 1",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/combo/m/1.mp4",
        male: "m",
        type: "combo",
        date: "Wed Jul 08 2020 11:03:12",
        like: 458
      },
      {
        id: 18,
        title: "Комбинация 2",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/combo/m/2.mp4",
        male: "m",
        type: "combo",
        date: "Wed Jul 07 2020 11:03:12",
        like: 2541
      },
      {
        id: 19,
        title: "Сейв Льва Яшина",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/save/1.mp4",
        male: "m",
        type: "save",
        date: "Wed Jul 08 2020 11:03:12",
        like: 9000
      },
      {
        id: 20,
        title: "Сейв Акинфеева",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/save/2.mp4",
        male: "m",
        type: "save",
        date: "Wed Jul 07 2020 11:03:12",
        like: 10000
      },
      {
        id: 21,
        title: "Отменили гол Боруссии",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/f/1.mp4",
        male: "m",
        type: "f",
        date: "Wed Jul 08 2020 11:03:12",
        like: 4521
      },
      {
        id: 22,
        title: "Прокатился по полю",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/f/2.mp4",
        male: "m",
        type: "f",
        date: "Wed Jul 07 2020 11:03:12",
        like: 6540
      },
      {
        id: 23,
        title: "Горячий танец",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/child/1.mp4",
        male: "c",
        type: "gol",
        date: "Wed Jul 08 2020 11:03:12",
        like: 1457
      },
      {
        id: 24,
        title: "Прекрасный сэйв",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/child/2.mp4",
        male: "c",
        type: "gol",
        date: "Wed Jul 07 2020 11:03:12",
        like: 2547
      },
      {
        id: 25,
        title: "Испанский стиль",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/drill/child/1.mp4",
        male: "c",
        type: "drill",
        date: "Wed Jul 08 2020 11:03:12",
        like: 1256
      },
      {
        id: 26,
        title: "Детский дриблинг",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/drill/child/2.mp4",
        male: "c",
        type: "drill",
        date: "Wed Jul 07 2020 11:03:12",
        like: 2547
      },
      {
        id: 27,
        title: "Лопнул",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/combo/child/1.mp4",
        male: "c",
        type: "combo",
        date: "Wed Jul 08 2020 11:03:12",
        like: 1894
      },
      {
        id: 28,
        title: "Оказали первую помощь",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/combo/child/2.mp4",
        male: "c",
        type: "combo",
        date: "Wed Jul 07 2020 11:03:12",
        like: 2547
      },
      {
        id: 29,
        title: "Сейв Де Хеа",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/save/child/1.mp4",
        male: "c",
        type: "save",
        date: "Wed Jul 08 2020 11:03:12",
        like: 999
      },
      {
        id: 30,
        title: "Сейв Кейлора Наваса",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/save/child/2.mp4",
        male: "c",
        type: "save",
        date: "Wed Jul 07 2020 11:03:12",
        like: 2547
      },
      {
        id: 31,
        title: "Оранжевый перфоманс",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/narod/w/1.mp4",
        male: "w",
        type: "narod",
        date: "Wed Jul 08 2020 11:03:12",
        like: 888
      },
      {
        id: 32,
        title: "Фанаты поют",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/narod/w/2.mp4",
        male: "w",
        type: "narod",
        date: "Wed Jul 07 2020 11:03:12",
        like: 2547
      },
      {
        id: 33,
        title: "Дриблинг Атлетико",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/drill/w/1.MP4",
        male: "w",
        type: "drill",
        date: "Wed Jul 08 2020 11:03:12",
        like: 754
      },
      {
        id: 34,
        title: "Барса финтит",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/drill/w/2.MP4",
        male: "w",
        type: "drill",
        date: "Wed Jul 07 2020 11:03:12",
        like: 1555
      },
      {
        id: 35,
        title: "Forza Barca",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/combo/w/1.mp4",
        male: "w",
        type: "combo",
        date: "Wed Jul 08 2020 11:03:12",
        like: 1245
      },
      {
        id: 36,
        title: "PSJ комбинация",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/combo/w/2.mp4",
        male: "w",
        type: "combo",
        date: "Wed Jul 07 2020 11:03:12",
        like: 1555
      },
      {
        id: 37,
        title: "Краснодарские фанаты",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/narod/l/1.mp4",
        male: "l",
        type: "narod",
        date: "Wed Jul 08 2020 11:03:12",
        like: 1555
      },
      {
        id: 38,
        title: "Трибуна Белграда",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/narod/l/2.mp4",
        male: "l",
        type: "narod",
        date: "Wed Jul 07 2020 11:03:12",
        like: 1900
      },
      {
        id: 39,
        title: "Дриблинг Саллаха",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/drill/l/1.mp4",
        male: "l",
        type: "drill",
        date: "Wed Jul 08 2020 11:03:12",
        like: 1475
      },
      {
        id: 40,
        title: "Дриблинг Барсы",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/drill/l/2.mp4",
        male: "l",
        type: "drill",
        date: "Wed Jul 07 2020 11:03:12",
        like: 1685
      },
      {
        id: 41,
        title: "Сейв Куртуа",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/save/l/1.mp4",
        male: "l",
        type: "save",
        date: "Wed Jul 08 2020 11:03:12",
        like: 1356
      },
      {
        id: 42,
        title: "Сейф Евгения Галиковича",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/save/l/2.mp4",
        male: "l",
        type: "save",
        date: "Wed Jul 07 2020 11:03:12",
        like: 1685
      },
      {
        id: 43,
        title: "Сальто через вратаря",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/f/l/1.mp4",
        male: "l",
        type: "f",
        date: "Wed Jul 08 2020 11:03:12",
        like: 1287
      },{
        id: 44,
        title: "Подсмотрел записку",
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/f/l/2.mp4",
        male: "l",
        type: "f",
        date: "Wed Jul 07 2020 11:03:12",
        like: 1685
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
    param: "gol",
    visible: false,
    setting: 1,
    filterParam: [
      {id:1, name: "По популярности"},
      {id:2, name: "По дате добавления"}
    ]
  };
  onToggleLike = (id) => {
    this.setState(({ video }) => {
      const idx = video.findIndex((el) => el.id === id);
      const oldItem = video[idx];
      const newItem = { ...oldItem, like: oldItem.like + 1 };
      const newArray = [ 
        ...video.slice(0, idx),
        newItem,
        ...video.slice(idx + 1)
      ];
      return {
        video: newArray
      }
    })
  }
  onParamChange = (param) => {
    this.setState({ param });
  }
  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  onVisibleSetting = () => {
    this.setState({
      visible: !this.state.visible
    })
  }
  prom = (id, name, setting) => {
    this.setState({ setting })
    switch (id) {
      case 1:
        return this.state.video.sort((a,b)=>{return b.like-a.like});
      case 2: 
        return this.state.video.sort((a,b)=>{return new Date(b.date).getTime()-new Date(a.date).getTime()});
      default:
        return 1
    }
   }
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
    const visibleItems = this.filter(this.state.video, this.state.filter);
    return (
      <div className="best_moment-container">
        <div className={`visibleParam ${this.state.visible?"onVisibleParam":""}`}>
          <ParamsBestMoment
            male={this.state.male}
            onFilterChange={this.onFilterChange}
            filter={this.state.filter}
          />
          <ParamsTypes param={this.state.param} onParamChange={this.onParamChange} paramsTypes={this.state.paramsTypes}/>
        </div>
        <SettingParamsBest prom={this.prom} setting={this.state.setting} filterParam={this.state.filterParam} onVisibleSetting={this.onVisibleSetting} visible={this.state.visible}/>
        <ShowVideoBM onToggleLike={this.onToggleLike} param={this.state.param} video={visibleItems} />
      </div>
    );
  }
}

export default BestMoment;
