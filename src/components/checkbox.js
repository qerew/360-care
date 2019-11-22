import React, { Component } from 'react';
import '../styles/checkbox.scss';

class Checkbox extends Component {
  render() {
    const { label, type, name, value, checked } = this.props;
    return (
      <label className={`checkbox ${!label && 'no-padding'}`}>
        {`${label || ''}`}
        <input
          type={type || 'checkbox'}
          value={value}
          name={name}
          checked={checked}
          onChange={this.props.onChange}
        />
        <span className="checkmark"></span>
      </label>
    );
  }
}

export default Checkbox;
