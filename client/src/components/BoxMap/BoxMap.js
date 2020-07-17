import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import "./BoxMap.css";

const BoxMap = ({ place, chengeMark, mark }) => {
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
              key={item.id}
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
