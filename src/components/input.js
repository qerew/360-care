import React, { Component } from 'react';
import FlexBox from './flexbox';
import '../styles/global.scss';

class Input extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="text-field">
        <span>{title}</span>
        <input type="text" className="input-text" />
      </div>
    );
  }
}

export default Input;
