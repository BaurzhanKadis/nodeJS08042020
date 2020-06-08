import React from "react";
// import { YMaps } from "react-yandex-maps";
import { YMaps, Map } from "react-yandex-maps";

import "./BoxMap.css";

const BoxMap = () => {
  return (
    <div className="BoxMap-container">
      <YMaps>
        <Map
          className="map_box"
          defaultState={{
            center: [55.75, 37.57],
            zoom: 10,
          }}
        />
      </YMaps>
    </div>
  );
};

export default BoxMap;
