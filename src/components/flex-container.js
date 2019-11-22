import React, { Component } from 'react';
import '../styles/global.scss';

class FlexContainer extends Component {
  render() {
    const { className, justify, align } = this.props;
    const style = {};
    if (justify) style.justifyContent = justify;
    if (align) style.alignItems = align;
    else style.alignItems = 'center';
    return (
      <div
        id={this.props.id || ''}
        className={`flex-row ${className || ''}`}
        style={style}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FlexContainer;
