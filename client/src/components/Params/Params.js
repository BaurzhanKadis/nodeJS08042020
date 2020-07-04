import React from "react";

import "./Params.css";

const Params = ({
  total,
  smallUsers,
  bigUsers,
  male,
  toggleMale,
  settingHandler,
  modalParams,
}) => {
  return (
    <div
      className={`stock_market-container ${
        modalParams ? "stock_market-container_active" : ""
      }`}
    >
      <div>Параметры</div>
      <div
        className={`params_block ${!total ? "params_block-active" : ""}`}
        onClick={smallUsers}
      >
        <span>Игроки до 12 лет</span>
      </div>
      <div
        className={`params_block ${total ? "params_block-active" : ""}`}
        onClick={bigUsers}
      >
        <span>Игроки от 12 лет</span>
      </div>
      <div className="params_block-male">
        <div
          onClick={male ? toggleMale : undefined}
          className={`params_block-wm ${!male ? "params_block-wm_active" : ""}`}
        >
          <span className="check"></span>
          <span className="people">Женщины</span>
        </div>
        {/* <span 
          className="params_block-check"
          onClick={toggleMale}>
          <span className={`params_block-toggle ${male ? "activeToggle" : ""}`}></span>
        </span> */}
        <div
          onClick={!male ? toggleMale : undefined}
          className={`params_block-wm ${male ? "params_block-wm_active" : ""}`}
        >
          <span className="check"></span>
          <span className="people">Mужчины</span>
        </div>
      </div>
      <div className="params_block" onClick={settingHandler}>
        <span>Показать результаты</span>
      </div>
    </div>
  );
};

export default Params;
