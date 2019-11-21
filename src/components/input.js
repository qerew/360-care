import React, { Component } from 'react';
import FlexBox from './flexbox';
import '../styles/global.scss';

class Input extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="text-box">
        <span>{title}</span>
        <input type="text" className="textbox" />
      </div>
    );
  }
}

export default Input;
