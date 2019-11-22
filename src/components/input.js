import React, { Component } from 'react';
import FlexContainer from './flex-container';
import '../styles/global.scss';

class Input extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="text-field">
        <span className="bold">{title}</span>
        <input type="text" className="input-text" />
      </div>
    );
  }
}

export default Input;
