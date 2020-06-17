import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Primary.css";

class Primary extends Component {
  render() {
    return (
      <main style={{ marginBottom: "50px" }}>
        <section className="banner">
          <div className="sale_bcg"></div>
          <p className="sale_title">
            <span>Новая колекция уже в продаже!</span>
          </p>
          <img src="img/title.png" alt="" />
          <Link
            className="banner_link"
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
          </ul>
        </section>
        <section className="sect_SM">
          <img src="img/__12/m/max.png" alt="max" />
          <span className="sect_SM-item SMtop">
            <span>Испльзуй шанс</span>
          </span>
          <span className="sect_SM-item SMcenter">
            <span>Покажи всем на что ты способен!</span>
          </span>
          <span className="sect_SM-item SMbottum">
            <Link to="/stock-market">Перейти в биржу</Link>
          </span>
          {/* <div className="sect_BM-title">Лучшие моменты</div> */}
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
