import React from 'react';
import Rubrika from '../../components/Rubrika';
import ShowVideo from '../../components/ShowVideo';

import './LikesKill.css';
//https://www.youtube.com/watch?v=8eZJ9Sinnxg
//https://youtu.be/8eZJ9Sinnxg
class LikesKill extends React.Component {
  state = {
    filterData: [
      // { id: 0, title: "Все", active: false },
      { id: 1, title: "Дриблинг", active: false },
      { id: 2, title: "Удары", active: false },
      { id: 3, title: "Фристайл", active: false },
      { id: 4, title: `"Я-Судья"`, active: false },
      { id: 5, title: "Другое", active: false }
    ]
  }
  onFilterDone = (id) => {
    this.setState(({ filterData }) => {
      const idx = filterData.findIndex((el) => el.id === id);
      const oldItem = filterData[idx];
      const newItem = { ...oldItem, active: !oldItem.active };
      const newArray = [ 
        ...filterData.slice(0, idx),
        newItem,
        ...filterData.slice(idx + 1)
      ];
      return {
        filterData: newArray
      };
    })
  }

  render() {
    return (
      <div className="likes_kill-container">
        <Rubrika filterTodos={this.state.filterData} onFilterDone={this.onFilterDone}/>
        <ShowVideo />
      </div>
    );
  }
}

export default LikesKill;