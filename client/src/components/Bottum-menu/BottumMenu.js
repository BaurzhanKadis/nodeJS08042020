import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, ButtonContext } from "../../context/AuthContext";

import "./BottumMenu.css";

const BottumMenu = () => {
  const [label, setLabel] = useState(0);
  const [toggleItem, setToggleItem] = useState(false);

  const auth = useContext(AuthContext);
  const buttonBall = useContext(ButtonContext);
  const arr = [
    { id: 0, name: `В раздел "Челленджи"`, url: "/challenge" },
    { id: 1, name: `В раздел "LIKES KILL"`, url: "/likes-kill" },
    { id: 2, name: `В раздел "Дневник"`, url: "/diary" },
    { id: 3, name: `В раздел "Коробка"`, url: "/box" },
  ];
  const exit = () => {
    setToggleItem(false);
    buttonBall.ballHandler();
  };
  const yes = () => {
    setToggleItem(false);
    buttonBall.ballHandler();
  };
  const addModal = (id) => {
    setLabel(id);
    setToggleItem(true);
  };
  return (
    <React.Fragment>
      <div className="BottumMenu-container">
        <ul className="BottumMenuUl">
          <li className="BottumMenuLi-item">
            <Link to="/primary">
              <img src="img/menu-home.png" alt="menu-home" />
            </Link>
          </li>
          <li className="BottumMenuLi-item">
            <Link to="/search">
              <img src="img/search.png" alt="search" />
            </Link>
          </li>
          <li
            onClick={buttonBall.ballHandler}
            className="BottumMenuLi-item center-ball"
          >
            <Link to="#">
              <img src="img/ball-plus.png" alt="ball-plus" />
            </Link>
          </li>
          <li className="BottumMenuLi-item">
            <Link to="/message">
              <img src="img/menu-message.png" alt="menu-message" />
              <span className="quantityMessage">22</span>
            </Link>
          </li>
          <li className="BottumMenuLi-item" onClick={auth.menuHandler}>
            <img src="img/menuSetting.png" alt="menuSetting" />
          </li>
        </ul>
      </div>
      <div
        className={`BottumMenu-modal ${
          buttonBall.ballActive ? "BottumMenu-modal-active" : ""
        }`}
      >
        <h4>Добавить публикацию</h4>
        <ul className="BottumMenu-modal_items">
          {arr.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => addModal(item.id)}
                // className={`BottumMenu-modal_item ${
                //   item.id === label ? "BottumMenu-modal_item-active" : ""
                // }`}
                className="BottumMenu-modal_item"
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <div
          className={`modal_YesOrNo ${
            toggleItem ? "modal_YesOrNo-active" : ""
          }`}
        >
          <span>Перейти {arr[label].name}</span>
          <span>
            <Link onClick={yes} to={arr[label].url}>
              Да
            </Link>
          </span>
          <span onClick={exit}>Нет</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BottumMenu;
