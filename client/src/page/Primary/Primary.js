import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Primary.css';

class Primary extends Component {
  render() {
    return (
      <main>
        <section className="banner">
          <div className="sale_bcg"></div>
          <p className="sale_title">
            <span>Новая колекция уже в продаже!</span>
          </p>
          <img src="img/title.png" alt=""/>
          <Link className="banner_link" to="/shop">В магазин</Link>
        </section>
      </main>
    );
  }
}

export default Primary;