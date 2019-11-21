import React, { Component, Fragment } from 'react';
import ReactCodeInput from 'react-verification-code-input';
import '../styles/global.scss';

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
    let total_length = 0; // return the total length of the code
    let sub_length = []; // return the start index of block e.g. 12-34-5678
    if (values && values.length) {
      vals = [];
      for (let i = 0; i < fields; i++) {
        vals.push(values[i] || '');
      }
    } else {
      vals = [];
      for (let i = 0; i < fields.length; i++) {
        sub_length[i] = total_length;
        total_length += fields[i];
      }
      vals = Array(total_length).fill('');
    }
    this.state = {
      values: vals,
      sub_length,
      total_length,
    };
    this.iRefs = [];
    for (let i = 0; i < total_length; i++) {
      this.iRefs.push(React.createRef());
    }
    this.id = +new Date();
  }

  onChange = (e) => {
    const index = parseInt(e.target.dataset.id);
    if (e.target.value === '' || (this.props.type === 'number' && !e.target.validity.valid)) {
      return;
    }
    let { values, total_length } = this.state;
    let next;
    const value = e.target.value;
    values = Object.assign([], values);
    if (value.length > 1) {
      let nextIndex = value.length + index - 1;
      if (nextIndex >= total_length) {
        nextIndex = total_length - 1;
      }
      next = this.iRefs[nextIndex];
      const split = value.split('');
      split.forEach((item, i) => {
        const cursor = index + i;
        if (cursor < total_length) {
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
          this.setState({ values: vals });
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

  renderCodeBlock = (index, field) => {
    const inputs = [];
    const { values, sub_length } = this.state;
    const { type } = this.props;
    for (let i = 0; i < field; i++) {
      const key = sub_length[index] + i;
      inputs.push(
        <input
          key={key}
          type={type === 'number' ? 'tel' : type}
          pattern={type === 'number' ? '[0-9]' : null}
          data-id={key}
          ref={this.iRefs[key]}
          value={values[key]}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />,
      );
    }
    return inputs;
  };

  render() {
    const { title, fields } = this.props;
    return (
      <div className="code-field">
        <span>{title}</span>
        {fields.map((field, index) => (
          <Fragment key={index}>
            <div className="react-code-input">{this.renderCodeBlock(index, field)}</div>
            {index < fields.length - 1 && <span className="hypen">-</span>}
          </Fragment>
        ))}
      </div>
    );
  }
}

export default Code;
