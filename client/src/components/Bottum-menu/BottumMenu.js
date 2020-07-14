import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, ButtonContext } from "../../context/AuthContext";

import "./BottumMenu.css";

const BottumMenu = () => {
  const [ label, setLabel ] = useState(1);
  const [ toggleItem, setToggleItem ] = useState(false);

  const auth = useContext(AuthContext);
  const buttonBall = useContext(ButtonContext);
  const arr = [
    { id: 1, name: `В раздел "Челленджи"`, url: "/challenge" },
    { id: 2, name: `В раздел "LIKES KILL"`, url: "/likes-kill" },
    { id: 3, name: `В раздел "Дневник"`, url: "/diary" },
    { id: 4, name: `В раздел "Коробка"`, url: "/box" },
  ];
  // const onToggleLable = (id) => {
  //   setLabel(id);
  // }
  const addModal = (id) => {
    setLabel(id);
    // setToggleItem(!toggleItem)
  }
  console.log(toggleItem)
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
            {/* <Link to="#" > */}
            <img src="img/menuSetting.png" alt="menuSetting" />
            {/* </Link> */}
          </li>
        </ul>
      </div>
      <div className={`BottumMenu-modal ${buttonBall.ballActive?"BottumMenu-modal-active":""}`}>
        <h4>Добавить публикацию</h4>
        {!toggleItem && <ul className="BottumMenu-modal_items">
          {arr.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={()=>addModal(item.id)}
                  className={`BottumMenu-modal_item ${item.id === label ? "BottumMenu-modal_item-active" : ""}`}
                >
                  {item.name}
                </li>
              );
          })}
        </ul>}
        { toggleItem && <div className="modal_YesOrNo">
                <span>Перейти {arr[label].name}</span>
                <span><Link to={arr[label].url}>Да</Link></span>
                <span>Нет</span>
              </div>
        }
      </div>
    </React.Fragment>
  );
};

export default BottumMenu;
