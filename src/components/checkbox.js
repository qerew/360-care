import React, { Component, Fragment } from 'react';
import FlexBox from './flexbox';
import '../styles/checkbox.scss';

class CheckBox extends Component {
  state = {
    value: this.props.value || false,
  }

  onChange = (e) => {
    this.setState({
      value: !this.state.value,
    })
    // this.props.onChange(!this.state.value);
  }

  render() {
    const { type, name, title, options } = this.props;
    return (
      <div className="checkbox-field">
        <span>{title}</span>
        <FlexBox className="space-around">
          {options.map((option, key) => (
            <label className="checkbox">
              {` ${option}`}
              <input
                type={type || 'checkbox'}
                value={option}
                name={name || ''}
                onClick={this.onChange}
              />
              <span class="checkmark"></span>
            </label>
          ))}
        </FlexBox>
      </div>
    );
  }
}

export default CheckBox;
