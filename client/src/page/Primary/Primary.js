import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Slider from 'react-slick-slider';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Primary.css";

class Primary extends Component {
  state = {
    video:[
      {
        id: 1,
        title: `Гол Юрия Жиркова в ворота "Спартака" на 41 минуте матча`,
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
        name: "LIKE SKILL",
        city: "Россия, Москва",
        img: "img/LSblack.png",
        url: "video/BestMomemt/goll/lub/Anna.mp4",
        male: "l",
        type: "combo",
        date: "Mon Jul 06 2020 13:50:28",
        like: 4201
      },
    ]
  }
  render() {
    const video = this.state.video;
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <main>
        <section className="banner">
          <div className="sale_bcg"></div>
          <p className="sale_title">
            <span>Новая колекция уже в продаже!</span>
          </p>
          <img src="img/banner2.jpg" alt="banner" />
          <a className="banner_link" href="https://losprintos.ru">В магазин</a>
        </section>
        <section className="sect_BM">
          <div className="sect_BM-title psevAfter">
            <Link to="/best-moment">Лучшие моменты</Link>
          </div>
          {/* <Slider {...settings}>
            {video.map((item)=>{
              return <div>
                <div className="top_info">
          <div className="top_info-avatar">
            <img src={item.img} alt="avatar" />
          </div>
          <div className="top_info-title">
            <span className="top_info-title_nickName">{item.name}</span>
            <span className="top_info-title_fillName">{item.city}</span>
          </div>
        </div>
                      <ReactPlayer url={item.url} controls width="100%" height="100%" />
                    </div>
            })}
          </Slider> */}
          <div className="contantForUl">
            <ul className="sect_BM-items">
              <li className="sect_BM-item">
                <img src="img/bail.png" alt="bail" />
                <div className="sect_BM-isname">Гарет Бейл</div>
                <div className="sect_BM-rubrika">Рубрика "Гол через себя"</div>
              </li>
              <li className="sect_BM-item">
                <img src="img/runi.png" alt="bail" />
                <div className="sect_BM-isname">Уейн Руни</div>
                <div className="sect_BM-rubrika">Рубрика "Гол через себя"</div>
              </li>
              <li className="sect_BM-item">
                <img src="img/potap10.png" alt="bail" />
                <div className="sect_BM-isname">Potapov10</div>
                <div className="sect_BM-rubrika">Рубрика "Удар с летая"</div>
              </li>
              {/* <li className="sect_BM-item">
                <img src="img/potap10.png" alt="bail" />
                <div className="sect_BM-isname">Potapov10</div>
                <div className="sect_BM-rubrika">Рубрика "Удар с летая"</div>
              </li>
              <li className="sect_BM-item">
                <img src="img/potap10.png" alt="bail" />
                <div className="sect_BM-isname">Potapov10</div>
                <div className="sect_BM-rubrika">Рубрика "Удар с летая"</div>
              </li> */}
            </ul>
          </div>
        </section>
        <section className="sect_SM">
          <img src="img/banner3.jpg" alt="banner3" />
          <span className="sect_SM-item SMbottum">
            <Link to="/stock-market">Перейти в биржу</Link>
          </span>
        </section>
        <section className="sect_OS">
          <div className="sect_OS-title psevAfter">
            <Link to="/best-moment">Онлайн-школа. Свежее</Link>
          </div>
          <ul className="sect_OS-items">
            <li className="sect_OS-item">
              <img src="img/goll.png" alt="goll" />
              <span>Урок № 2</span>
              <span>Как правильно бить штрафной</span>
            </li>
            <li className="sect_OS-item">
              <img src="img/drill.png" alt="goll" />
              <span>Урок № 12</span>
              <span>Как правильно бить штрафной</span>
            </li>
            <li className="sect_OS-item">
              <img src="img/combo.png" alt="goll" />
              <span>Урок № 22</span>
              <span>Как правильно бить штрафной</span>
            </li>
          </ul>
        </section>
        <section className="sect_LK">
          <div className="sect_LK-title psevAfter">
            <Link to="/likes-kill"><span>likes kill</span> - покажи свой скилл</Link>
          </div>
          <div className="sect_LK-content">
            <div className="top_info">
              <div className="top_info-avatar">
                <img src="img/avatar.png" alt="avatar" />
              </div>
              <div className="top_info-title">
                <span className="top_info-title_nickName">novikov19</span>
                <span className="top_info-title_fillName">
                  Новиков Александр
                </span>
              </div>
            </div>
            <div className="sect_LK-img">
              <div className="sect_LK-img_link" to="/likes-kill"><Link to="/likes-kill">Оценить</Link></div>
              <span>"likes kill"</span>
              <img src="img/__12/m/valentin.png" alt="valentin" />
            </div>
            <ul className="infoBlock">
              <li>
                <img src="img/like.png" alt="like" />
                <span>541K</span>
              </li>
              <li>
                <img src="img/kill.png" alt="kill" />
                <span>98K</span>
              </li>
              <li>
                <img src="img/shares.png" alt="shares" />
                <span>241K</span>
              </li>
              <li>
                <img src="img/commit.png" alt="commit" />
                <span>104K</span>
              </li>
              <li>
                <img src="img/elect.png" alt="elect" />
              </li>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default Primary;
