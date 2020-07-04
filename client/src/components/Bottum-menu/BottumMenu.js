import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import './BottumMenu.css';

const BottumMenu = () => {
  const auth = useContext(AuthContext);
  const [ activeMessage, setActiveMessage ] = useState(false);
  const [ activeSearch, setActiveSearch ] = useState(false);
  const handleSearch = () => {
    setActiveSearch(!activeSearch);
    setActiveMessage(false)
  }
  const handleMessage = () => {
    setActiveSearch(false);
    setActiveMessage(!activeMessage)
  }
  return (
    <div className="BottumMenu-container">
      {/* Примерное виденье */}
      <img className={`BottumMenu-img-message ${activeMessage?"BottumMenu-img-message_active":""}`} src="img/img-message.jpg" alt="message"/>
      <img className={`BottumMenu-img-search ${activeSearch?"BottumMenu-img-search_active":""}`} src="img/img-search.jpg" alt="search"/>
      {/*  */}
      <ul className="BottumMenuUl">
        <li className="BottumMenuLi-item">
          <Link to="/primary">
            <img src="img/menu-home.png" alt="menu-home"/>
          </Link>
        </li>
        <li onClick={handleSearch} className="BottumMenuLi-item">
          <Link to="#">
            <img src="img/search.png" alt="search"/>
          </Link>
        </li>
        <li className="BottumMenuLi-item center-ball">
          <Link to="#"> 
            <img src="img/ball-plus.png" alt="ball-plus"/>
          </Link>
        </li>
        <li onClick={handleMessage} className="BottumMenuLi-item">
          <Link to="#">
            <img src="img/menu-message.png" alt="menu-message"/>
            <span className="quantityMessage">22</span>
          </Link>
        </li>
        <li className="BottumMenuLi-item" onClick={auth.menuHandler}>
          {/* <Link to="#" > */}
            <img src="img/menuSetting.png" alt="menuSetting"/>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
};

export default BottumMenu;