import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = { isToogleOn: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToogleOn: !prevState.isToogleOn
    }))
  }

  render() {
    
    let menuActive = this.state.isToogleOn ? 'is-active' : '';

    return (
         <div className="nav has-shadow">
      <div className="container">
        <div className="nav-left">
          <a className="nav-item">My Company</a>
        </div>

        <div className={'nav-toggle ' + menuActive} onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={'nav-right nav-menu ' + menuActive}>
          <Link to="/" className="nav-item r-item">Home</Link>
          <Link to="/faq" className="nav-item r-item">Features</Link>
          <Link to="/faq" className="nav-item r-item">About</Link>
          <Link to="/faq" className="nav-item r-item">FAQ</Link>

          <div className="nav-item">
            <p className="control">
              <a className="button is-primary is-outlined">
                <span className="icon">
                  <i className="fa fa-download"></i>
                </span>
                <span>Join Now</span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
    );
  }
}

export default Header;
