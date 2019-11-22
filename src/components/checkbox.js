import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const { label, type, name, value, checked } = this.props;
    return (
      <label className="checkbox">
        {` ${label}`}
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
