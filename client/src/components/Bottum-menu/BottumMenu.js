import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import './BottumMenu.css';

const BottumMenu = () => {
  const auth = useContext(AuthContext)
  return (
    <div className="BottumMenu-container">
      <ul className="BottumMenuUl">
        <li className="BottumMenuLi-item">
          <Link to="/primary">
            <img src="img/menu-home.png" alt="menu-home"/>
          </Link>
        </li>
        <li className="BottumMenuLi-item">
          <Link>
            <img src="img/search.png" alt="search"/>
          </Link>
        </li>
        <li className="BottumMenuLi-item center-ball">
          <Link>
            <img src="img/ball-plus.png" alt="ball-plus"/>
          </Link>
        </li>
        <li className="BottumMenuLi-item">
          <Link>
            <img src="img/menu-message.png" alt="menu-message"/>
            <span className="quantityMessage">22</span>
          </Link>
        </li>
        <li className="BottumMenuLi-item">
          {/* <div
            className={menuActive ? "menu active" : "menu"}
            onClick={menuHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div> */}
          <Link onClick={auth.menuHandler}>
            <img src="img/menuSetting.png" alt="menuSetting"/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottumMenu;