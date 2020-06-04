import React from 'react';
import Rubrika from '../../components/Rubrika';
import ShowVideo from '../../components/ShowVideo';

import './LikesKill.css';
//https://www.youtube.com/watch?v=8eZJ9Sinnxg
//https://youtu.be/8eZJ9Sinnxg
// https://www.youtube.com/watch?v=NHLh_CCQlYs
// https://youtu.be/NHLh_CCQlYs
//https://youtu.be/Gt_G96isBlU
//https://youtu.be/ZSKP5MWRxw4
//https://youtu.be/GhfbPLgWS-g
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
      { id: 0, videoId: "8eZJ9Sinnxg", right: false, left: false, like: 541, disLike: 98, type: "freestyle" },
      { id: 1, videoId: "3hRS4Z57TtQ", right: false, left: false, like: 5, disLike: 988, type: "judge" },
      { id: 2, videoId: "ZSKP5MWRxw4", right: false, left: false, like: 5, disLike: 988, type: "judge" },
      { id: 3, videoId: "ezYEBgg-WUA", right: false, left: false, like: 5, disLike: 988, type: "dribbling" },
      { id: 4, videoId: "GhfbPLgWS-g", right: false, left: false, like: 5, disLike: 988, type: "dribbling" },
      { id: 5, videoId: "NHLh_CCQlYs", right: false, left: false, like: 400, disLike: 55, type: "freestyle" },
      { id: 6, videoId: "pnD7A95jNXE", right: false, left: false, like: 400, disLike: 55, type: "freestyle" },
      { id: 7, videoId: "vQ-Z-3wUDu8", right: false, left: false, like: 400, disLike: 55, type: "hits" },
      { id: 8, videoId: "Gt_G96isBlU", right: false, left: false, like: 400, disLike: 55, type: "hits" },
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
    // console.log("visibleItems",visibleItems)
    const height = window.outerWidth > 500 ? "auto" : `${Math.round(window.outerWidth/1.875)}px`;
    const width = window.outerWidth > 500 ? "100%" : `${Math.round(window.outerWidth*0.95)}px`;
    const opts = {
      // height: `${Math.round(window.outerWidth/1.875)}px`,
      // width: `${Math.round(window.outerWidth*0.95)}px`,
      height: height,
      width: width,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        // showinfo: 0,
        // iv_load_policy: 3,
        // rel: 0,
        // showinfo: 0,
        // modestbranding: 1
      },
    };
    return (
      <div className="likes_kill-container">
        <Rubrika filterTodos={this.state.filterData} onFilterDone={this.onFilterDone}/>
        <ShowVideo 
          opts={opts} 
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