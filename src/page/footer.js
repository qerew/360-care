import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import Checkbox from '../components/checkbox';

class Footer extends Component {
  render() {
    return (
      <footer>
        <FlexContainer justify="space-around">
          <Checkbox type="radio" name="center" label="Tomika Coleman, DPM" />
          <Checkbox type="radio" name="center" label="Scott Giaimo, DPM" />
          <Checkbox type="radio" name="center" label="Marshall Tarzy, DPM" />
        </FlexContainer>
      </footer>
    );
  }
}

export default Footer;