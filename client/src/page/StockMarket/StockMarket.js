import React, { Component } from "react";
import Params from "../../components/Params";
import SettingParams from "../../components/SettingParams";
import ListUsers from "../../components/ListUsers";
import "./StockMarket.css";

class StockMarket extends Component {
  state = {
    total: "",
    male: false,
    modal: false,
    modalParams: false,
  };
  smallUsers = () => {
    this.setState({
      total: false,
    });
  };
  bigUsers = () => {
    this.setState({
      total: true,
    });
  };
  toggleMale = () => {
    this.setState({
      male: !this.state.male,
    });
  };
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  settingHandler = () => {
    this.setState({
      modalParams: !this.state.modalParams,
    });
  };
  render() {
    return (
      <div className="stock_market">
        <Params
          smallUsers={this.smallUsers}
          bigUsers={this.bigUsers}
          male={this.state.male}
          toggleMale={this.toggleMale}
          total={this.state.total}
          modalParams={this.state.modalParams}
          settingHandler={this.settingHandler}
        />
        <SettingParams settingHandler={this.settingHandler}/>
        <ListUsers total={this.state.total} toggleModal={this.toggleModal} male={this.state.male} />
        {this.state.modal && (
          <div onClick={this.toggleModal} className="stock_market-modal-container">
            <div className="stock_market-modal">
              <span>
                доступно только для верифицированных аккаунтов футбольных
                скаутов
              </span>
              <img src="img/modalBirzha.jpg" alt="modalBirzha" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default StockMarket;

// export default StockMarket;
