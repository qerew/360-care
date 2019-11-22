import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img
          className="logo"
          src={require('../assets/images/logo.jpg')}
          alt="Canvas Logo"
        />
        <span className="bold">of Maryland</span>
      </div>
    );
  }
}

export default Logo;