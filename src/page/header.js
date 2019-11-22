import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Input from '../components/input';
import Code from '../components/code';
import Select from '../components/select';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <FlexContainer>
          <FlexBox>
            <Input title="Last Name: " />
          </FlexBox>
          <FlexBox>
            <Code title="MRN: " type="number" fields={[12]} />
          </FlexBox>
        </FlexContainer>
        <FlexContainer>
          <FlexBox>
            <Input title="First Name: " />
          </FlexBox>
          <FlexBox>
            <Code title="DOB: " type="number" fields={[2, 2, 4]} />
          </FlexBox>
        </FlexContainer>
        <FlexContainer>
          <FlexBox>
            <Code title="Appt Date: " type="number" fields={[2, 2, 4]} />
          </FlexBox>
          <FlexBox>
            <Select
              title="Gender:"
              type="radio"
              name="gender"
              options={['Male', 'Female']}
              justify="space-around"
            />
          </FlexBox>
        </FlexContainer>
      </div>
    );
  }
}

export default Header;
