import React, { Component } from 'react';
import Params from '../../components/Params';
import SettingParams from '../../components/SettingParams';
import ListUsers from '../../components/ListUsers';
import './StockMarket.css';

class StockMarket extends Component {
  state = {
    total: '',
    male: false
  }
  smallUsers = () => {
    this.setState({
      total: false
    })
  }
  bigUsers = () => {
    this.setState({
      total: true
    })
  }
  toggleMale = () => {
    this.setState({
      male: !this.state.male
    })
  }
  render() {
    return (
      <div className="stock_market">
        <Params 
          smallUsers={this.smallUsers} 
          bigUsers={this.bigUsers} 
          male={this.state.male} 
          toggleMale={this.toggleMale}
          total={this.state.total}/>
        <SettingParams />
        <ListUsers 
          total={this.state.total}
          male={this.state.male}/>
      </div>
    );
  }
}

export default StockMarket;

// export default StockMarket;