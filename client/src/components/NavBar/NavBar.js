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
      icon: <i className="fas fa-home" />,
      href: "/"
    },
    {
      name: "Поиск",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Мой Блог",
      icon: <i className="fas fa-user userIcon"></i>,
      href: "/search"
    },
    {
      name: "Биржа",
      icon: <i className="fas fa-comments-dollar"></i>,
      href: "/stock-market"
    },
    {
      name: "Лента публикаций",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Сообщения",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Друзья",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Мои команды",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Онлайн-школы",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Челленджи",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Лучшие моменты",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Каталог блогера",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Чаты",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Новости футбола",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Рейтинги",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Клубы",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Магазин",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Стримы",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Статистика",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Тех поддержка",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Настройки",
      icon: <i className="fas fa-search"></i>,
      href: "/"
    },
  ];
  
  const navBarMenu = classProduct.map((item, id) => { 
    return <li className="nav-bar-item" key={id}>
              <Link to={item.href} onClick={() => {setMenuActive(false)}}>{item.icon}{item.name}</Link>
            </li> 
  });
  let title = history.location.pathname;
  switch (title) {
    case '/stock-market':
      title = "Биржа";
      break;
    default:
      title = "Главная";
  }
  // console.log("isAuthenticated", auth);
  console.log("title", title);
  // console.log("history", history.location.pathname);
  return (
    <header>
        <nav className={menuActive ? "nav-bar active" : "nav-bar"} >
          <ul>
            {navBarMenu}
            <li className="nav-bar-item"><Link to="/" onClick={logoutHandler}>Выйти</Link></li>
          </ul>
        </nav>
        <div className="header">
          {(title === "Главная") 
            ? 
            <div className="logo">
              <img className="logo_img" src="img/logo.png" alt=""/>
              <Link className="logo_title" to="/">
                like skill
              </Link>
              <img className="logo_img" src="img/logo.png" alt=""/>
            </div> 
            : null
          }
          <nav className="nav">
            <ul>
              <li className="nav-item"><a href="#">work</a></li>
              <li className="nav-item"><a href="#">service</a></li>
              <li className="nav-item"><a href="#">about</a></li>
              <li className="nav-item"><a href="#">blog</a></li>
              <li className="nav-item"><a href="#">contact</a></li>
            </ul>
          </nav>
          <div className="title_page">
            <span>{title}</span>
          </div>
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