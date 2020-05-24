import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

import './NavBar.css';


const NavBar = () => {
  const [ menuActive, setMenuActive ] = useState(false);
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
    setMenuActive(false)
  }
  const menuHandler = event => {
    event.preventDefault();
    !menuActive ? setMenuActive(true) : setMenuActive(false);
  }
  const classProduct = [
    {
      name: "Главная",
      icon: <i class="fas fa-home"></i>,
      href: "/"
    },
    {
      name: "Поиск",
      icon: <i class="fas fa-search"></i>,
      href: "/search"
    },
    {
      name: "Мой Блог",
      icon: <i class="fas fa-search"></i>,
      href: "/search"
    },
    {
      name: "Биржа",
      icon: <i class="fas fa-search"></i>,
      href: "/search"
    },
    {
      name: "Лента публикаций",
      icon: <i class="fas fa-search"></i>,
      href: "/search"
    },
    {
      name: "Сообщения",
      icon: <i class="fas fa-search"></i>,
      href: "/search"
    },
    {
      name: "Друзья",
      icon: <i class="fas fa-search"></i>,
      href: "/search"
    },
    {
      name: "Мои команды",
      icon: <i class="fas fa-search"></i>,
      href: "/search"
    },
    {
      name: "Онлайн-школы",
      icon: <i class="fas fa-search"></i>,
      href: "/search"
    },
    {
      name: "Челленджи",
      icon: <i class="fas fa-search"></i>,
      href: "/search"
    },
  ];
  // const classProduct = [
  //   "Главная",
  //   "Поиск",
  //   "Мой Блог",
  //   "Биржа",
  //   "Лента публикаций",
  //   "Сообщения",
  //   "Друзья",
  //   "Мои команды",
  //   "Онлайн-школы",
  //   "Челленджи",
  //   "Лучшие моменты",
  //   "Каталог блогера",
  //   "Чаты",
  //   "Новости футбола ",
  //   "Рейтинги",
  //   "Клубы",
  //   "Магазин",
  //   "Стримы",
  //   "Статистика",
  //   "Тех поддержка",
  //   "Настройки",
  //   // "Выйти",
  // ];
  const navBarMenu = classProduct.map((item, id) => { 
    return <li className="nav-bar-item" key={id}>
              <Link to={item.href} onClick={() => {setMenuActive(false)}}>{item.icon}{item.name}</Link>
            </li> 
  });
  // console.log("isAuthenticated", auth);
  return (
    <header>
        <nav className={menuActive ? "nav-bar active" : "nav-bar"} >
          <ul>
            {navBarMenu}
            <li className="nav-bar-item"><Link onClick={logoutHandler}>Выйти</Link></li>
            {/* <li className="nav-bar-item"><a href="#">work</a></li>
            <li className="nav-bar-item"><a href="#">service</a></li>
            <li className="nav-bar-item"><a href="#">about</a></li>
            <li className="nav-bar-item"><a href="#">blog</a></li>
            <li className="nav-bar-item"><a href="#">contact</a></li> */}
          </ul>
        </nav>
        <div className="header">
          <div className="logo">
            <Link className="logo_title" to="/">
              like skill
            </Link>
          </div>
          <nav className="nav">
            <ul>
              <li className="nav-item"><a href="#">work</a></li>
              <li className="nav-item"><a href="#">service</a></li>
              <li className="nav-item"><a href="#">about</a></li>
              <li className="nav-item"><a href="#">blog</a></li>
              <li className="nav-item"><a href="#">contact</a></li>
            </ul>
          </nav>
          <div 
            className={menuActive ? "menu active" : "menu"} 
            onClick={menuHandler}>
              <span></span>
              <span></span>
              <span></span>
          </div>
          {auth.token 
            ?
            <div className="userName">
              <i className="fas fa-user userIcon"></i>
              <span>{auth.userNickName}</span>
              <i 
                className="fas fa-sign-out-alt logout"
                onClick={logoutHandler}></i>
            </div>
            :
            <div className="userNameLock">
              <i className="fas fa-user-lock userLock"></i>
              <Link to="/login">Войти</Link>
            </div>
          }
        </div>
      </header>
  );
};

export default NavBar;