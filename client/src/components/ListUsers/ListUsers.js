import React from "react";
import "./ListUsers.css";

const dataUsers = [
  {
    id: 1,
    avatar: "img/max.png",
    amplua: "Нападающий",
    club: "Ника",
    firstName: "Максим",
    surName: "Петров",
    born: 2009,
    footbalPlay: 2015,
    goll: 50,
    male: "m",
  },
  {
    id: 2,
    avatar: "img/valentin.png",
    amplua: "Нападающий",
    club: "Сокол",
    firstName: "Валентин",
    surName: "Ушаков",
    born: 2009,
    footbalPlay: 2017,
    goll: 26,
    male: "m",
  },
  {
    id: 3,
    avatar: "img/kosty.png",
    amplua: "Нападающий",
    club: "Олимп",
    firstName: "Константин",
    surName: "Иванов",
    born: 2009,
    footbalPlay: 2014,
    goll: 32,
    male: "m",
  },
  {
    id: 4,
    avatar:
      "https://img1.goodfon.ru/original/640x480/7/9c/cristiano-ronaldo-ronaldo-7268.jpg",
    amplua: "Нападающий",
    club: "Орел",
    firstName: "Игорь",
    surName: "Олейник",
    born: 2009,
    footbalPlay: 2016,
    goll: 16,
    male: "m",
  },
  {
    id: 5,
    avatar:
      "https://img1.goodfon.ru/original/640x480/7/9c/cristiano-ronaldo-ronaldo-7268.jpg",
    amplua: "Вратарь",
    club: "Сатурн",
    firstName: "Илья",
    surName: "Кочетков",
    born: 2001,
    footbalPlay: 2008,
    goll: 39,
    male: "m",
  },
  {
    id: 6,
    avatar:
      "https://img1.goodfon.ru/original/640x480/7/9c/cristiano-ronaldo-ronaldo-7268.jpg",
    amplua: "Защитник",
    club: "Кама",
    firstName: "Борис",
    surName: "Борисенко",
    born: 2002,
    footbalPlay: 2010,
    goll: 16,
    male: "m",
  },
  {
    id: 7,
    avatar:
      "https://img1.goodfon.ru/original/640x480/7/9c/cristiano-ronaldo-ronaldo-7268.jpg",
    amplua: "Защитник",
    club: "Беларус",
    firstName: "Анастасия",
    surName: "Белова",
    born: 2005,
    footbalPlay: 2010,
    goll: 16,
    male: "w",
  },
  {
    id: 8,
    avatar:
      "https://img1.goodfon.ru/original/640x480/7/9c/cristiano-ronaldo-ronaldo-7268.jpg",
    amplua: "Нападающий",
    club: "Зенит",
    firstName: "Карина",
    surName: "Усман",
    born: 2005,
    footbalPlay: 2010,
    goll: 16,
    male: "w",
  },
  {
    id: 9,
    avatar:
      "https://img1.goodfon.ru/original/640x480/7/9c/cristiano-ronaldo-ronaldo-7268.jpg",
    amplua: "Нападающий",
    club: "Зенит",
    firstName: "Татьяна",
    surName: "Романова",
    born: 2009,
    footbalPlay: 2018,
    goll: 16,
    male: "w",
  },
  {
    id: 10,
    avatar:
      "https://img1.goodfon.ru/original/640x480/7/9c/cristiano-ronaldo-ronaldo-7268.jpg",
    amplua: "Нападающий",
    club: "Зенит",
    firstName: "Белла",
    surName: "Новикова",
    born: 2010,
    footbalPlay: 2015,
    goll: 16,
    male: "w",
  },
];
const date = new Date();

const ListUsers = ({ total, male }) => {
  const listUser = dataUsers
    .filter((item) => {
      return total
        ? date.getFullYear() - item.born > 12
        : date.getFullYear() - item.born < 12;
    })
    .filter((item) => {
      return male
        ? item.male === "m"
        : item.male === "w";
    })
    .map((item) => {
      return (
        <li className="list_user" key={item.id}>
          <div className="list_user-img">
            <img src={item.avatar} alt="avatar" />
          </div>
          <div className="list_user-data">
            <div className="list_user-fio">
              {item.surName} {item.firstName}
            </div>
            <div>
              {date.getFullYear() - item.born} лет, {item.amplua} "{item.club}"
            </div>
            <div>Играю в футбол с {item.footbalPlay - item.born} лет</div>
            {item.goll > 40 ? (
              <div>Лучший бомбардир 4 раза</div>
            ) : (
              <div>{item.goll} голов за прошлый сезон</div>
            )}
            <div className="list_user-data_link">Посмотреть анкету</div>
          </div>
        </li>
      );
    });
  return <ul className="list_user-container">{listUser}</ul>;
};

export default ListUsers;
