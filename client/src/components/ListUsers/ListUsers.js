import React from "react";
import "./ListUsers.css";

const dataUsers = [
  {
    id: 1,
    avatar: "img/__12/m/max.png",
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
    avatar: "img/__12/m/valentin.png",
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
    avatar: "img/__12/m/kosty.png",
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
    avatar: "https://img1.goodfon.ru/original/640x480/7/9c/cristiano-ronaldo-ronaldo-7268.jpg",
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
    avatar: "img/12__/w/skvorcova.jpg",
    amplua: "Вратарь",
    club: "Факел",
    firstName: "Екатерина",
    surName: "Скворцова",
    born: 2007,
    footbalPlay: 2014,
    goll: 39,
    male: "w",
  },
  {
    id: 6,
    avatar: "img/12__/m/borisenko.jpg",
    amplua: "Защитник",
    club: "Сокол",
    firstName: "Борис",
    surName: "Борисенко",
    born: 2007,
    footbalPlay: 2016,
    goll: 16,
    male: "m",
  },
  {
    id: 7,
    avatar: "img/12__/w/belova.jpg",
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
    avatar: "img/12__/w/usman.jpg",
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
    id: 14,
    avatar: "img/12__/w/osipova.jpg",
    amplua: "Нападающий",
    club: "Милан",
    firstName: "Варвара",
    surName: "Осипова",
    born: 2006,
    footbalPlay: 2013,
    goll: 13,
    male: "w",
  },
  {
    id: 9,
    avatar: "img/__12/w/romanova.jpg",
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
    avatar: "img/__12/w/novikova.jpg",
    amplua: "Нападающий",
    club: "Зенит",
    firstName: "Белла",
    surName: "Новикова",
    born: 2010,
    footbalPlay: 2015,
    goll: 16,
    male: "w",
  },
  {
    id: 11,
    avatar:"img/12__/m/timur.jpg",
    amplua: "Защитник",
    club: "Знамя",
    firstName: "Тимур",
    surName: "Аскеров",
    born: 2006,
    footbalPlay: 2011,
    goll: 2,
    male: "m",
  },
  {
    id: 12,
    avatar: "img/12__/m/kalinin.jpg",
    amplua: "Защитник",
    club: "Звезда",
    firstName: "Иван",
    surName: "Калинин",
    born: 2005,
    footbalPlay: 2013,
    goll: 16,
    male: "m",
  },
  {
    id: 13,
    avatar:"img/12__/m/maximov.jpg",
    amplua: "Нападающий",
    club: "Вымпел",
    firstName: "Максимов",
    surName: "Илья",
    born: 2007,
    footbalPlay: 2013,
    goll: 3,
    male: "m",
  },
  {
    id: 15,
    avatar:"img/__12/w/smirnova.jpg",
    amplua: "Вратарь",
    club: "Чертаново",
    firstName: "Аня",
    surName: "Смирнова",
    born: 2010,
    footbalPlay: 2017,
    goll: 3,
    male: "w",
  },
  {
    id: 16,
    avatar:"img/__12/w/piragova.jpg",
    amplua: "Защитник",
    club: "Чертаново",
    firstName: "Валя",
    surName: "Пирогова",
    born: 2011,
    footbalPlay: 2018,
    goll: 3,
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
