import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Select from '../components/select';
import '../styles/history.scss';

class History extends Component {
  render() {
    const { title, type, options, justify, other } = this.props;
    return (
      <FlexContainer align="center">
        <div style={{width: '165px'}}>
          <div className="subtitle-2">{title}</div>
        </div>
        <FlexBox>
          <Select type={type} options={options} justify={justify} other={other} />
        </FlexBox>
      </FlexContainer>
    );
  }
}

export default History;
