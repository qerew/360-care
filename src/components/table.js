import React, { Component, Fragment } from 'react';
import FlexContainer from './flex-container';
import FlexBox from './flex-box';
import Checkbox from './checkbox';
import _ from 'lodash';

class Table extends Component {
  renderCheckbox = (type, field, option) => {
    let name = _.lowerCase(field).replace(' ', '-');
    name += _.lowerCase(option);
    return <Checkbox type={type} name={name} />
  };

  render() {
    const { title, details, fields, options, type, name, description, moreDetails } = this.props;
    return (
      <div>
        <div className="subtitle-2">
          {title}
          {details && <small>details</small>}
        </div>
        <table>
          <tbody>
            <tr>
              <td className="thead">{description || ''}</td>
              {options.map((option, index) => (
                <td key={index}>option</td>
              ))}
            </tr>
            {fields.map((field, tr) => {
              <tr key={tr}>
                <td className="thead">field</td>
                {options.map((option, td) => {
                  <td key={td}>
                    {this.renderCheckbox(type, field, option)}
                  </td>;
                })}
              </tr>;
            })}
          </tbody>
        </table>
        {moreDetails && (
          <Fragment>
            <div style={{height: '5px'}}></div>
            <FlexContainer align="center">
              moreDetails &nbsp;
              <FlexBox>
                <input type="text" />
              </FlexBox>
            </FlexContainer>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Table;
