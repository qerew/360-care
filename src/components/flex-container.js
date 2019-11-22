import React, { Component } from 'react';
import '../styles/global.scss';

class FlexContainer extends Component {
  render() {
    const { className, justify } = this.props;
    return (
      <div
        className={`flex-row ${className || ''}`}
        style={justify ? { justifyContent: justify } : {}}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FlexContainer;
