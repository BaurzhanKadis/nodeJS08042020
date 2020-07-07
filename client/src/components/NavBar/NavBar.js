import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const [modalActive, setModalActive] = useState(false);
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
    auth.setMenuActive(false);
    setModalActive(false);
  };

  const classProduct = [
    {
      name: "Главная",
      icon: <img className="icon-item" src="img/menu-home.png" alt="home" />, //<i className="fas fa-home" />
      href: "/",
      dev: false,
    },
    {
      name: "Биржа",
      icon: <img className="icon-item" src="img/birzh.png" alt="birzh" />, //<i className="fas fa-comments-dollar"></i>,
      href: "/stock-market",
      dev: false,
    },
    {
      name: "Likes kill",
      icon: <img className="icon-item" src="img/blog.png" alt="blog" />, //<i className="fas fa-search"></i>,
      href: "/likes-kill",
      dev: false,
    },
    {
      name: "Онлайн-школа",
      icon: (
        <img
          className="icon-item"
          src="img/online-school.png"
          alt="online-school"
        />
      ), //<i className="fas fa-search"></i>,
      href: "/online-school",
      dev: false,
    },
    {
      name: "Челленджи",
      icon: (
        <img className="icon-item" src="img/challenge.png" alt="challenge" />
      ), //<i className="fas fa-search"></i>,
      href: "/challenge",
      dev: false,
    },
    {
      name: "Лучшие моменты",
      icon: <img className="icon-item" src="img/best.png" alt="best" />, //<i className="fas fa-search"></i>,
      href: "/best-moment",
      dev: false,
    },
    {
      name: "Дневник",
      icon: <img className="icon-item" src="img/dairy.png" alt="best" />, //<i className="fas fa-search"></i>,
      href: "/diary",
      dev: false,
    },
    {
      name: "Коробка",
      icon: <img className="icon-item" src="img/box.png" alt="best" />, //<i className="fas fa-search"></i>,
      href: "/box",
      dev: false,
    },
    {
      name: "Рейтинги",
      icon: <img className="icon-item" src="img/reiting.png" alt="reiting" />, //<i className="fas fa-search"></i>,
      href: "/rating",
      dev: false,
    },
    {
      name: "Поиск",
      icon: <img className="icon-item" src="img/search.png" alt="search" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Лента публикаций",
      icon: <img className="icon-item" src="img/lenta.png" alt="lenta" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Мой Блог",
      icon: (
        <img className="icon-item" src="img/user-icon.png" alt="user-icon" />
      ), //<i className="fas fa-user userIcon"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Сообщения",
      icon: <img className="icon-item" src="img/message.png" alt="message" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Друзья",
      icon: <img className="icon-item" src="img/friend.png" alt="friend" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Мои команды",
      icon: <img className="icon-item" src="img/commanda.png" alt="commanda" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Каталог блогера",
      icon: <img className="icon-item" src="img/blog.png" alt="blog" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Чаты",
      icon: <img className="icon-item" src="img/chat.png" alt="chat" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Новости футбола",
      icon: (
        <img
          className="icon-item"
          src="img/newsFotball.png"
          alt="newsFotball"
        />
      ), //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    // {
    //   name: "Рейтинги",
    //   icon: <img className="icon-item" src="img/reiting.png" alt="reiting" />, //<i className="fas fa-search"></i>,
    //   href: "#",
    //   dev: false,
    // },
    {
      name: "Клубы",
      icon: <img className="icon-item" src="img/club.png" alt="club" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Магазин",
      icon: <img className="icon-item" src="img/shop.png" alt="shop" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Стримы",
      icon: <img className="icon-item" src="img/strim.png" alt="strim" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Статистика",
      icon: <img className="icon-item" src="img/statist.png" alt="statist" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Тех поддержка",
      icon: <img className="icon-item" src="img/support.png" alt="support" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
    {
      name: "Настройки",
      icon: <img className="icon-item" src="img/settings.png" alt="settings" />, //<i className="fas fa-search"></i>,
      href: "#",
      dev: true,
    },
  ];

  const navBarMenu = classProduct.map((item, id) => {
    return (
      <li className="nav-bar-item" key={id}>
        <Link style={item.dev ? {color: "#858585"} : null} to={item.href} onClick={() => auth.setMenuActive(false)}>
          {item.icon}
          {item.name}
          {item.dev && (
            <span style={{ fontSize: "10px", marginLeft: "10px", color: "#858585" }}>
              в разработке
            </span>
          )}
        </Link>
      </li>
    );
  });
  let title = history.location.pathname;
  switch (title) {
    case "/stock-market":
      title = "Биржа";
      break;
    case "/login":
      title = "Авторизация";
      break;
    case "/register":
      title = "Регистрация";
      break;
    case "/likes-kill":
      title = `"Likes kill"`;
      break;
    case "/best-moment":
      title = "Лучшие Моменты";
      break;
    case "/box":
      title = `"Коробка"`;
      break;
    case "/online-school":
      title = "Онлайн-школа";
      break;
    case "/challenge":
      title = "Челленджи";
      break;
    case "/diary":
      title = "Дневник";
      break;
    case "/profile":
      title = "Профиль";
      break;
    case "/rating":
      title = "Рейтинг";
      break; 
    default:
      title = "Главная";
  }
  return (
    <React.Fragment>
      <nav className={auth.menuActive ? "nav-bar active" : "nav-bar"}>
        <div className="title_menuTop">
          <img className="title_menuTop-icon" src="img/settings.png" alt="settings"/>
          <span>Меню</span>
          <img className="title_menuTop-icon" src="img/menu-igol.png" alt="menu-igol"/>
        </div>
        <ul>
          {navBarMenu}
          <li className="nav-bar-item">
            <Link to="/" onClick={logoutHandler}>
              <img className="icon-item" src="img/exit.png" alt="exit" />
              Выйти
            </Link>
          </li>
        </ul>
      </nav>
      <header>
        <div className="header">
          <div className="logo">
            <Link className="logo_title" to="/">
              <img className="logo_img" src="img/LSblack.png" alt="logo" />
            </Link>
          </div>
          {/* {title === "Главная" ? (
          <div className="logo">
            <img className="logo_img" src="img/LSblack.png" alt="logo" />
            <Link className="logo_title" to="/">
              like skill
            </Link>
            <img className="logo_img" src="img/LSblack.png" alt="logo"/>
          </div>
        ) : null} */}
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
          {/* <div
          className={auth.menuActive ? "menu active" : "menu"}
          onClick={auth.menuHandler}
        >
          <span></span>
          <span></span>Личная информация, настройки, статистика, выйти из аккаунта.
          <span></span>
        </div> */}
          {auth.token ? (
            <div className="userName">
              <img
                src="img/avatar.png"
                alt="avatar"
                onClick={() => setModalActive(!modalActive)}
              />
              <div className={`modal ${modalActive ? "modal-active " : ""}`}>
                <ul>
                  <li><Link to="/profile">Личная информация</Link></li>
                  <li>Настройки</li>
                  <li>статистика</li>
                  <li onClick={logoutHandler}>
                    Выйти <i className="fas fa-sign-out-alt"></i>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="userNameLock">
              <i className="fas fa-user-lock userLock"></i>
              <Link to="/login">Войти</Link>
            </div>
          )}
          {/* {auth.token ? (
          <div className="userName">
            <i className="fas fa-user userIcon"></i>
            <span>{auth.userNickName}</span>
            <i
              className="fas fa-sign-out-alt logout"
              onClick={logoutHandler}
            ></i>
          </div>
        ) : (
          <div className="userNameLock">
            <i className="fas fa-user-lock userLock"></i>
            <Link to="/login">Войти</Link>
          </div>
        )} */}
        </div>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
