import React, { Component } from 'react';
import ParamsChallenge from '../../components/ParamsChallenge';
import VideoChallenge from '../../components/VideoChallenge';

import './Challenge.css';

class Challenge extends Component {
  state = {
    challenge: [
      { id: 1, name: "around the world", url: "video/Challenge/aroundtheworld.mp4" },
      { id: 2, name: "around the world 2", url: "video/Challenge/aroundtheworld2.mp4" },
      { id: 3, name: "around the world 3", url: "video/Challenge/aroundtheworld3.mp4" },
      { id: 4, name: "Danceball!", url: "video/Challenge/Danceball.mp4" },
      { id: 5, name: "exercise on technique", url: "video/Challenge/exercise-on-technique.mp4" },
      { id: 6, name: "wallskill!", url: "video/Challenge/wallskill.mp4" },
    ],
    itemTeam: [
      {id: 1, url: "img/volley.png", name: "Удары с лета", active: false, filterItem: "volley"},
      {id: 2, url: "img/dribbling.png", name: "Дриблинг", active: false, filterItem: "dribbling"},
      {id: 3, url: "img/freestyle.png", name: "Фристайл", active: false, filterItem: "freestyle"},
    ],
    filter: ""
  }
  onFilterChange = (filter) => {
    this.setState({ filter });
  }
  filter(items, filter) {
    switch(filter) {
      case 'volley': 
        return items.filter((item) => item.filterItem === filter);
      case 'dribbling':
        return items.filter((item) => item.filterItem === filter);
      case 'freestyle':
        return items.filter((item) => item.filterItem === filter);
      default:
        return items;      
    }
   };
  render() {
    return (
      <div className="Challenge-container">
        <ParamsChallenge 
          itemTeam={this.state.itemTeam}
          // challenge={this.state.challenge}
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}/>
        <VideoChallenge challenge={this.state.challenge}/>
      </div>
    );
  }
}

export default Challenge;