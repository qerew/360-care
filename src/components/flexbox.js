import React, { Component } from 'react';
import '../styles/global.scss';

class FlexBox extends Component {
  render() {
    return (
      <div className={`flex-row ${this.props.className || ''}`}>
        {this.props.children}
      </div>
    );
  }
}

export default FlexBox;