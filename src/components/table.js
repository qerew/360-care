import React, { Component, Fragment } from 'react';
import FlexContainer from './flex-container';
import FlexBox from './flex-box';
import Checkbox from './checkbox';
import _ from 'lodash';

class Table extends Component {
  onChange = (e) => {};

  renderCheckbox = (field, option) => {
    const { title, type } = this.props;
    let name = _.lowerCase(title).replace(' ', '-') + '-';
    name += _.lowerCase(field).replace(' ', '-');
    if (type === 'checkbox') name += '-' + option;
    return <Checkbox type={type} name={name} onChange={this.onChange} />;
  };

  renderMoreDetails = (moreDetails) => {
    const { title } = this.props;
    let name = _.lowerCase(title).replace(' ', '-') + '-';
    name += _.lowerCase(moreDetails).replace(' ', '-');
    return (
      <Fragment>
        <div style={{ height: '5px' }}></div>
        <FlexContainer align="center">
          {moreDetails} &nbsp;
          <FlexBox>
            <input type="text" name={name} />
          </FlexBox>
        </FlexContainer>
      </Fragment>
    );
  };

  renderOtherFieldRow = () => {
    const { title, options } = this.props;
    let name = _.lowerCase(title).replace(' ', '-') + '-other';
    return (
      <tr>
        <td>
          <FlexContainer>
            Other &nbsp;
            <FlexBox>
              <input type="text" name={name} />
            </FlexBox>
          </FlexContainer>
        </td>
        {options.map((option, index) => (
          <td key={index}>{this.renderCheckbox('other', option)}</td>
        ))}
      </tr>
    );
  };

  render() {
    const {
      title,
      details,
      width,
      type,
      fields,
      options,
      description,
      moreDetails,
      otherField,
    } = this.props;
    if (!width) width = '100%';

    return (
      <div>
        <div className="subtitle-2">
          {title}
          {details && <small>details</small>}
        </div>
        <table className="table-format-2" width={width}>
          <tbody>
            <tr>
              <td className="thead" width="60%">
                <small>{description || ''}</small>
              </td>
              {options.map((option, index) => (
                <td key={index}>{option}</td>
              ))}
            </tr>
            {fields.map((field, tr) => (
              <tr key={tr}>
                <td className="thead">{field}</td>
                {options.map((option, td) => (
                  <td key={td}>{this.renderCheckbox(field, option)}</td>
                ))}
              </tr>
            ))}
            {otherField && this.renderOtherFieldRow()}
          </tbody>
        </table>
        {moreDetails && this.renderMoreDetails(moreDetails)}
      </div>
    );
  }
}

export default Table;
