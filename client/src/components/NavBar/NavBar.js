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
      icon: <img className="icon-item" src="img/menu-home.png" alt="home" />,//<i className="fas fa-home" />
      href: "/"
    },
    {
      name: "Поиск",
      icon: <img className="icon-item" src="img/search.png" alt="search" />,//<i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Мой Блог",
      icon: <img className="icon-item" src="img/user-icon.png" alt="user-icon" />,//<i className="fas fa-user userIcon"></i>,
      href: "/"
    },
    {
      name: "Биржа",
      icon: <i className="fas fa-comments-dollar"></i>,
      href: "/stock-market"
    },
    {
      name: "Лента публикаций",
      icon: <img className="icon-item" src="img/lenta.png" alt="lenta" />,//<i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Likes kill",
      icon: <i className="fas fa-search"></i>,
      href: "/likes-kill"
    },
    {
      name: "Сообщения",
      icon: <img className="icon-item" src="img/message.png" alt="message" />,//<i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Друзья",
      icon: <img className="icon-item" src="img/friend.png" alt="friend" />,//<i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Мои команды",
      icon: <img className="icon-item" src="img/commanda.png" alt="commanda" />,//<i className="fas fa-search"></i>,
      href: "/"
    },
    {
      name: "Онлайн-школы",
      icon: <img className="icon-item" src="img/online-school.png" alt="online-school" />,//<i className="fas fa-search"></i>,
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
      href: "/best-moment"
    },
    {
      name: "Коробка",
      icon: <i className="fas fa-search"></i>,
      href: "/box"
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
    case '/login':
      title = "Авторизация";
      break;
    case '/register':
      title = "Регистрация";
      break;
    case '/likes-kill':
      title = `"Likes kill"`;
      break;
    case '/best-moment':
      title = 'Лучшие Моменты';
      break;
    case '/box':
      title = `"Коробка"`;
      break;
    default:
      title = "Главная";
  }
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
              <img className="logo_img" src="img/LSblack.png" alt="logo"/>
              <Link className="logo_title" to="/">
                like skill
              </Link>
              {/* <img className="logo_img" src="img/LSblack.png" alt="logo"/> */}
            </div> 
            : null
          }
          {/* <nav className="nav">
            <ul>
              <li className="nav-item"><a href="#">work</a></li>
              <li className="nav-item"><a href="#">service</a></li>
              <li className="nav-item"><a href="#">about</a></li>
              <li className="nav-item"><a href="#">blog</a></li>
              <li className="nav-item"><a href="#">contact</a></li>
            </ul>
          </nav> */}
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