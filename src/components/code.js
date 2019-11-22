import React, { Component, Fragment } from 'react';
import '../styles/global.scss';
import '../styles/code.scss';

const KEY_CODE = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

class Code extends Component {
  constructor(props) {
    super(props);
    const { fields, values } = props;
    let vals;
    let totalLength = 0; // return the total length of the code
    let subLength = []; // return the start index of block e.g. 12-34-5678
    if (values && values.length) {
      vals = [];
      for (let i = 0; i < fields; i++) {
        vals.push(values[i] || '');
      }
    } else {
      vals = [];
      for (let i = 0; i < fields.length; i++) {
        subLength[i] = totalLength;
        totalLength += fields[i];
      }
      subLength.push(totalLength);
      vals = Array(totalLength).fill('');
    }
    this.state = {
      values: vals,
      subLength,
      totalLength,
      currentIndex: -1,
    };
    this.iRefs = [];
    for (let i = 0; i < totalLength; i++) {
      this.iRefs.push(React.createRef());
    }
    this.id = +new Date();
  }

  onChange = (e) => {
    const index = parseInt(e.target.dataset.id);
    if (e.target.value === '' || (this.props.type === 'number' && !e.target.validity.valid)) {
      return;
    }
    let { values, totalLength } = this.state;
    let next;
    const value = e.target.value;
    values = Object.assign([], values);
    if (value.length > 1) {
      let nextIndex = value.length + index - 1;
      if (nextIndex >= totalLength) {
        nextIndex = totalLength - 1;
      }
      next = this.iRefs[nextIndex];
      const split = value.split('');
      split.forEach((item, i) => {
        const cursor = index + i;
        if (cursor < totalLength) {
          values[cursor] = item;
        }
      });
      this.setState({ values });
    } else {
      next = this.iRefs[index + 1];
      values[index] = value;
      this.setState({ values });
    }

    if (next) {
      next.current.focus();
      next.current.select();
    }
  };

  onKeyDown = (e) => {
    const index = parseInt(e.target.dataset.id);
    const prevIndex = index - 1;
    const nextIndex = index + 1;
    const prev = this.iRefs[prevIndex];
    const next = this.iRefs[nextIndex];
    switch (e.keyCode) {
      case KEY_CODE.backspace:
        e.preventDefault();
        const vals = [...this.state.values];
        if (this.state.values[index]) {
          vals[index] = '';
          this.setState({ values: vals });
        } else if (prev) {
          vals[prevIndex] = '';
          prev.current.focus();
        }
        break;
      case KEY_CODE.left:
        e.preventDefault();
        if (prev) {
          prev.current.focus();
        }
        break;
      case KEY_CODE.right:
        e.preventDefault();
        if (next) {
          next.current.focus();
        }
        break;
      case KEY_CODE.up:
      case KEY_CODE.down:
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  onFocus = (e) => {
    const index = parseInt(e.target.dataset.id);
    this.setState({ currentIndex: index });
  }

  onBlur = (e) => {
    this.setState({ currentIndex: -1 });
  }

  renderCodeBlock = (index, field) => {
    const inputs = [];
    const { values, subLength } = this.state;
    const { type } = this.props;
    for (let i = 0; i < field; i++) {
      const key = subLength[index] + i;
      inputs.push(
        <input
          key={key}
          type={type === 'number' ? 'tel' : type}
          pattern={type === 'number' ? '[0-9]' : null}
          data-id={key}
          ref={this.iRefs[key]}
          value={values[key]}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />,
      );
    }
    return inputs;
  };

  render() {
    const { title, fields } = this.props;
    const { subLength, currentIndex } = this.state;
    return (
      <div className="code-field">
        <span className="bold">{title}</span>
        {fields.map((field, index) => (
          <Fragment key={index}>
            <div
              className={`react-code-input ${
                currentIndex >= subLength[index] && currentIndex < subLength[index + 1]
                  ? 'active'
                  : ''
              }`}
            >
              {this.renderCodeBlock(index, field)}
            </div>
            {index < fields.length - 1 && <span className="hypen">-</span>}
          </Fragment>
        ))}
      </div>
    );
  }
}

export default Code;
