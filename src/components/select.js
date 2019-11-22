import React, { Component } from 'react';
import FlexContainer from './flex-container';
import FlexBox from './flex-box';
import Checkbox from './checkbox';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
    };
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
    const { type, name, title, options, other } = this.props;
    const { values } = this.state;

    return (
      <div className="checkbox-field">
        {title && <span className="bold">{title}</span>}
        <div>
          <FlexContainer className={this.props.className || ''} justify={this.props.justify}>
            {options.map((option, key) =>
              option === '\n' ? (
                <div class="break"></div>
              ) : (
                <Checkbox
                  key={key}
                  type={type}
                  label={option}
                  value={option}
                  name={name || ''}
                  checked={values[option] ? 'checked' : false}
                  onChange={this.onChange}
                />
              ),
            )}
          </FlexContainer>
          {other && (
            <div style={{marginTop: '9px'}}>
              <FlexContainer>
                <Checkbox
                  type={type}
                  label="Other"
                  value="Other"
                  name={name || ''}
                  checked={values['Other'] ? 'checked' : false}
                  onChange={this.onChange}
                />
                <FlexBox>
                  <textarea rows="2" />
                </FlexBox>
              </FlexContainer>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Select;
