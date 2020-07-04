import React from 'react';
import Rubrika from '../../components/Rubrika';
import ShowVideo from '../../components/ShowVideo';

import './LikesKill.css';

class LikesKill extends React.Component {
  state = {
    filterData: [
      { id: 0, title: "Все", active: false },
      { id: 1, title: "Дриблинг", active: false },
      { id: 2, title: "Удары", active: false },
      { id: 3, title: "Фристайл", active: false },
      { id: 4, title: `"Я-Судья"`, active: false },
      { id: 5, title: "Другое", active: false }
    ],
    video: [
      { id: 0, videoUrl: "video/LikesKill/lk1.mp4", right: false, left: false, like: 541, disLike: 98, type: "freestyle" },
      { id: 1, videoUrl: "video/LikesKill/lk2.mp4", right: false, left: false, like: 5, disLike: 988, type: "judge" },
      { id: 2, videoUrl: "video/LikesKill/lk3.mp4", right: false, left: false, like: 5, disLike: 988, type: "judge" },
      { id: 3, videoUrl: "video/LikesKill/lk4.mp4", right: false, left: false, like: 5, disLike: 988, type: "dribbling" },
      { id: 4, videoUrl: "video/LikesKill/lk5.mp4", right: false, left: false, like: 5, disLike: 988, type: "dribbling" },
      { id: 5, videoUrl: "video/LikesKill/lk6.mp4", right: false, left: false, like: 400, disLike: 55, type: "freestyle" },
      { id: 6, videoUrl: "video/LikesKill/lk7.mp4", right: false, left: false, like: 400, disLike: 55, type: "freestyle" },
      { id: 7, videoUrl: "video/LikesKill/lk8.mp4", right: false, left: false, like: 400, disLike: 55, type: "hits" },
      { id: 8, videoUrl: "video/LikesKill/lk9.mp4", right: false, left: false, like: 400, disLike: 55, type: "hits" },
    ]
  }
  onFilterDone = (id) => {
    this.setState(({ filterData, }) => {
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
  disLikeHandler = (id) => {
    this.setState(({ video }) => {
      const idx = video.findIndex((el) => el.id === id);
      const oldItem = video[idx];
      const newItem = { ...oldItem, left: !oldItem.left, disLike: oldItem.disLike + 1 };
      const newArray = [ 
        ...video.slice(0, idx),
        newItem,
        ...video.slice(idx + 1)
      ];
      return {
        video: newArray
      }
    })
  }
  likeHandler = (id) => {
    this.setState(({ video }) => {
      const idx = video.findIndex((el) => el.id === id);
      const oldItem = video[idx];
      const newItem = { ...oldItem, right: !oldItem.right, like: oldItem.like + 1 };
      const newArray = [ 
        ...video.slice(0, idx),
        newItem,
        ...video.slice(idx + 1)
      ];
      return {
        video: newArray
      }
    })
  }
  deleteItem = (id) => {
      this.setState(({video})=>{
        const idx = video.findIndex((el)=>el.id===id);
        const newArray = [ 
          ...video.slice(0, idx),
          ...video.slice(idx + 1)
        ];
        
        return {
          video: newArray
        };
      })
  };
  mouse = (e) => {
    console.log(e.clientX);
  }
  filter = (items, filter) => {
    const idx = filter.findIndex((el) => el.active === true);
    // const itemzzz = filterData[idx];
    switch(idx) {
      case 0: 
        return items;
      case 1:
        return items.filter((item) => item.type === "dribbling");
      case 2:
        return items.filter((item) => item.type === "hits");
      case 3:
        return items.filter((item) => item.type ==="freestyle");
      case 4:
        return items.filter((item) => item.type ==="judge");
      default:
        return items;      
    }
   };
  render() {
    const visibleItems = this.filter(this.state.video, this.state.filterData);
    return (
      <div className="likes_kill-container">
        <Rubrika filterTodos={this.state.filterData} onFilterDone={this.onFilterDone}/>
        <ShowVideo 
          // opts={opts} 
          video={visibleItems} 
          // video={this.state.video} 
          disLikeHandler={this.disLikeHandler} 
          likeHandler={this.likeHandler}
          deleteItem={this.deleteItem}
          // mouse={this.mouse}
        />
      </div>
    );
  }
}

export default LikesKill;