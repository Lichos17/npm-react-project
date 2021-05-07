import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const MainHeader = () => {
  return (
    <div>
        <header>
          <div className="container">
            <div className="header__content">
              <h1><span>NPM</span> PACKAGES</h1>
              <p>Look the best package of React, Angular and Vue</p>
              <i className="fab fa-react fa-3x"></i>
              <i className="fab fa-angular fa-3x"></i>
              <i className="fab fa-vuejs fa-3x"></i>
            </div>
          </div>
        </header>
        <nav className="navbar">
          <div className="container">
            <ul className="navbar__options">
              <li className="navbar__item"><NavLink to="/react" activeClassName="current">React</NavLink></li>
              <li className="navbar__item"><NavLink to="/angular" activeClassName="current">Angular</NavLink></li>
              <li className="navbar__item"><NavLink to="/vue" activeClassName="current">Vue</NavLink></li>
            </ul>
          </div>
        </nav>
    </div>
  )
}
