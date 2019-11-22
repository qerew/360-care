import React, { Component, Fragment } from 'react';
import FlexContainer from './flex-container';
import '../styles/checkbox.scss';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        'Male': true,
      },
    }
  }

  onChange = (e) => {
    let { values } = this.state;
    const key = e.target.value;
    const { type } = this.props;

    if (type === 'radio') {
      if (!values[key]) {
        values = {};
        values[key] = true;
      }
    } else {
      values[key] = !values[key];
    }
    this.setState({ values });
  };

  render() {
    const { type, name, title, options } = this.props;
    const { values } = this.state;

    return (
      <div className="checkbox-field">
        <span className="bold">{title}</span>
        <FlexContainer className="space-around">
          {options.map((option, key) => (
            <label key={key} className="checkbox">
              {` ${option}`}
              <input
                key={Math.random()}
                type={type || 'checkbox'}
                value={option}
                name={name || ''}
                checked={values[option] ? 'checked' : false}
                onChange={this.onChange}
              />
              <span className="checkmark"></span>
            </label>
          ))}
        </FlexContainer>
      </div>
    );
  }
}

export default CheckBox;
