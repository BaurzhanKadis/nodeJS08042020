import React, { Component } from 'react';
import Params from '../../components/Params';
import ListUsers from '../../components/ListUsers';
import './StockMarket.css';

class StockMarket extends Component {
  state = {
    total: ''
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
  render() {
    return (
      <div className="stock_market">
        <Params smallUsers={this.smallUsers} bigUsers={this.bigUsers}/>
        <ListUsers total={this.state.total}/>
      </div>
    );
  }
}

export default StockMarket;

// export default StockMarket;