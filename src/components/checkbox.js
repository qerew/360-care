import React, { Component } from 'react';
import '../styles/checkbox.scss';

class Checkbox extends Component {
  render() {
    const { label, type, name, value, checked } = this.props;
    let className = 'checkbox';
    if (!label) className += ' no-padding';
    return (
      <label className={className}>
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
