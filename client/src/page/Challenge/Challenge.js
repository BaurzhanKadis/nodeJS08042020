import React, { Component } from "react";
import ParamsChallenge from "../../components/ParamsChallenge";
import VideoChallenge from "../../components/VideoChallenge";

import "./Challenge.css";

class Challenge extends Component {
  state = {
    challenge: [
      {
        id: 1,
        userName: "Filicia Armani",
        img: "img/che/FiliciaArmani.jpg",
        city: "Италия, Милан",
        url: "video/Challenge/aroundtheworld.mp4",
        text: `Look at my video. Challenge "#Around the world 2020". Can you repeat it?`,
        add: false,
        dot: false,
        filterItem: "volley",
        like: 2000,
        date: "Mon Jul 04 2020 14:49:28",
      },
      {
        id: 2,
        userName: "Наталья Фролова",
        img: "img/che/nataliRus.jpg",
        city: "Россия, Ногинск",
        url: "video/Challenge/aroundtheworld2.mp4",
        text: `Решила попробовать повторить челлендж "#Around the world 2020" у себя дома) На мой взгляд получилось довольно неплохо) Сможете повторить?`,
        add: false,
        dot: false,
        filterItem: "volley",
        like: 2050,
        date: "Mon Jul 03 2020 14:49:28",
      },
      {
        id: 3,
        userName: " Louren Gonsales",
        img: "img/che/LourenGonsales.jpg",
        city: "Венесуэла, Каракас",
        url: "video/Challenge/aroundtheworld3.mp4",
        text: `My first experience in slow motion."#Around the world 2020"`,
        add: false,
        dot: false,
        filterItem: "dribbling",
        like: 2080,
        date: "Mon Jul 04 2020 14:49:28",
      },
      {
        id: 4,
        userName: "Amir Askerov",
        img: "img/che/AmirAskerov.jpg",
        city: "Азербайджан, Баку",
        url: "video/Challenge/Danceball.mp4",
        text: `Привет друзья! Мы запускаем новый челлендж "#Danceball"`,
        add: false,
        dot: false,
        filterItem: "dribbling",
        like: 9520,
        date: "Mon Jul 03 2020 14:49:28",
      },
      {
        id: 5,
        userName: "Laura Mendez",
        img: "img/che/LauraMendez.jpg",
        city: "Франция, Марсель",
        url: "video/Challenge/exercise-on-technique.mp4",
        text: `Hi. Try to pass 12 chips in the challenge "#Snake12" faster than me ;)`,
        add: false,
        dot: false,
        filterItem: "freestyle",
        like: 4000,
        date: "Mon Jul 04 2020 14:49:28",
      },
      {
        id: 6,
        userName: "Alex Berger",
        img: "img/che/AlexBerger.jpg",
        city: "Германия, Кёльн",
        date: "Mon Jul 03 2020 14:49:28",
        url: "video/Challenge/wallskill.mp4",
        text: `Hi. Can you repeat the "#WALLBALL" challenge?`,
        add: false,
        dot: false,
        filterItem: "freestyle",
        like: 5000
      },
    ],
    itemTeam: [
      {
        id: 1,
        url: "img/volley.png",
        name: "Удары с лета",
        active: false,
        filterItem: "volley",
      },
      {
        id: 2,
        url: "img/dribbling.png",
        name: "Дриблинг",
        active: false,
        filterItem: "dribbling",
      },
      {
        id: 3,
        url: "img/freestyle.png",
        name: "Фристайл",
        active: false,
        filterItem: "freestyle",
      },
    ],
    filter: "volley",
    label: null,
    labelUl: [
      {id: 1,name:"Профиль игрока",},
      {id: 2,name:"Копировать ссылку",},
      {id: 3,name:"Скрыть публикации",}],
    setting: 2,
    filterParam: [
      {id:1, name: "По популярности"},
      {id:2, name: "По дате добавления"}
    ]
  };
  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  onToggleLike = (id) => {
    this.setState(({ challenge }) => {
      const idx = challenge.findIndex((el) => el.id === id);
      const oldItem = challenge[idx];
      const newItem = { ...oldItem, like: oldItem.like + 1 };
      const newArray = [ 
        ...challenge.slice(0, idx),
        newItem,
        ...challenge.slice(idx + 1)
      ];
      return {
        challenge: newArray
      }
    })
  }
  onToggleAdd = (id) => {
    this.setState(({ challenge }) => {
      const idx = challenge.findIndex((el) => el.id === id);
      const oldItem = challenge[idx];
      const newItem = { ...oldItem, add: !oldItem.add };
      const newArray = [ 
        ...challenge.slice(0, idx),
        newItem,
        ...challenge.slice(idx + 1)
      ];
      return {
        challenge: newArray
      };
    })
  }
  onToggleDot = (id) => {
    this.setState(({ challenge }) => {
      const idx = challenge.findIndex((el) => el.id === id);
      const oldItem = challenge[idx];
      const newItem = { ...oldItem, dot: !oldItem.dot };
      const newArray = [ 
        ...challenge.slice(0, idx),
        newItem,
        ...challenge.slice(idx + 1)
      ];
      return {
        challenge: newArray
      };
    })
  }
  onToggleLable = (label) => {
    this.setState({ label })
  }
  prom = (id, setting) => {
    this.setState({ setting })
    switch (id) {
      case 1:
        return this.state.challenge.sort((a,b)=>{return b.like-a.like});
      case 2: 
        return this.state.challenge.sort((a,b)=>{return new Date(b.date).getTime()-new Date(a.date).getTime()});
      default:
        return 1
    }
   }
  filter(items, filter) {
    switch (filter) {
      case "volley":
        return items.filter((item) => item.filterItem === filter);
      case "dribbling":
        return items.filter((item) => item.filterItem === filter);
      case "freestyle":
        return items.filter((item) => item.filterItem === filter);
      default:
        return items;
    }
  }
  render() {
    const visibleItems = this.filter(this.state.challenge, this.state.filter);
    return (
      <div className="Challenge-container">
        <ParamsChallenge
          itemTeam={this.state.itemTeam}
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}
          prom={this.prom} 
          setting={this.state.setting} 
          filterParam={this.state.filterParam}
        />
        <VideoChallenge 
          onToggleAdd={this.onToggleAdd} 
          onToggleLike={this.onToggleLike}
          challenge={visibleItems} 
          onToggleDot={this.onToggleDot}
          labelUl={this.state.labelUl}
          label={this.state.label}
          onToggleLable={this.onToggleLable}/>
      </div>
    );
  }
}

export default Challenge;
