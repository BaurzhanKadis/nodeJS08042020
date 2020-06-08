import React, { Component } from 'react';
import ParamsBox from '../../components/ParamsBox';
import BoxMap from '../../components/BoxMap';
import BoxStructure from '../../components/BoxStructure';

import './Box.css';

class Box extends Component {
  state = {
    pole: [
      { city: "Москва", address: "ул. Красноармейская д.12", p: 11, date: "20.06.20 - 14.00", star: 4.1 },
      { city: "Москва", address: "ул. Красноармейская д.12", p: 11, date: "20.06.20 - 14.00", star: 4.1 },
      { city: "Москва", address: "ул. Красноармейская д.12", p: 11, date: "20.06.20 - 14.00", star: 4.1 },
    ]
  }
  render() {
    return (
      <div className="box-container">
        <ParamsBox />
        <BoxMap />
        <BoxStructure pole={this.state.pole}/>
      </div>
    );
  }
}

export default Box;