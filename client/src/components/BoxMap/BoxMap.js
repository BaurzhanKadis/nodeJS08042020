import React, {useState} from "react";
// import { YMaps } from "react-yandex-maps";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import "./BoxMap.css";

const BoxMap = ({ place, chengeMark, mark }) => {
  
  // const [ place = [
  //   {id:1, coordinate:[55.684758, 37.738521]},
  //   {id:2, coordinate:[55.714438, 37.478517]},
  //   {id:3, coordinate:[55.859982, 37.605231]}
  // ], setPlace ] = useState();
  // const [ mark, setMark ] = useState(); 
  // const chengeMark = (id) => {
  //   setMark(id)
  // }
  return (
    <div className="BoxMap-container">
      <YMaps>
        <Map
          className="map_box"
          defaultState={{
            center: [55.75, 37.57],
            zoom: 10,
          }}
        >
          {place.map((item)=>{
            return <Placemark 
              properties={{ iconContent: item.id }} 
              onClick={() => chengeMark(item.id)} 
              options={item.id === mark ? { iconColor: "green" } : { iconColor: "red" }} 
              geometry={item.coordinate}/>
          })}
        </Map>
      </YMaps>
    </div>
  );
};

export default BoxMap;
