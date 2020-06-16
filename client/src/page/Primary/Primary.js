import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Primary.css";

class Primary extends Component {
  render() {
    return (
      <main>
        <section className="banner">
          <div className="sale_bcg"></div>
          <p className="sale_title">
            <span>Новая колекция уже в продаже!</span>
          </p>
          <img src="img/title.png" alt="" />
          <Link className="banner_link" 
                // to="/shop"
                to="/"
                >
            В магазин
          </Link>
        </section>
        <section className="sect_BM">
          <div className="sect_BM-title psevAfter">
            <Link to="/best-moment">Лучшие моменты</Link>
          </div>
          <ul className="sect_BM-items">
            <li className="sect_BM-item">
              <img src="img/bail.png" alt="bail"/>
              <div className="sect_BM-isname">Гарет Бейл</div>
              <div className="sect_BM-rubrika">Рубрика "Гол через себя"</div>
            </li>
            <li className="sect_BM-item">
              <img src="img/runi.png" alt="bail"/>
              <div className="sect_BM-isname">Уейн Руни</div>
              <div className="sect_BM-rubrika">Рубрика "Гол через себя"</div>
            </li>
            <li className="sect_BM-item">
              <img src="img/potap10.png" alt="bail"/>
              <div className="sect_BM-isname">Potapov10</div>
              <div className="sect_BM-rubrika">Рубрика "Удар с летая"</div>
            </li>
          </ul>
        </section>
        <section className="sect_SM">
          <img src="img/__12/m/max.png" alt="max"/>
          <span className="sect_SM-item SMtop"><span>Испльзуй шанс</span></span>
          <span className="sect_SM-item SMcenter"><span>Покажи всем на что ты способен!</span></span>
          <span className="sect_SM-item SMbottum">
            <Link to="/stock-market">Перейти в биржу</Link>
          </span>
          {/* <div className="sect_BM-title">Лучшие моменты</div> */}
        </section>
        <section className="sect_OS">
          <div className="sect_OS-title psevAfter">Онлайн-школа. Свежее</div>
        </section>
        <section className="sect_LK">
          <div className="sect_LK-title psevAfter"><span>likes kill</span> - покажи свой скилл</div>
        </section>
      </main>
    );
  }
}

export default Primary;
