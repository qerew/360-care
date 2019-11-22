import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Input from '../components/input';
import Code from '../components/code';
import CheckBox from '../components/checkbox';
import Logo from './logo';
import Title from './title';
import '../styles/global.scss';

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <FlexContainer>
            <Logo />
            <Title />
          </FlexContainer>
        </div>

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
              <CheckBox title="Gender:" type="radio" name="gender" options={['Male', 'Female']} />
            </FlexBox>
          </FlexContainer>
        </div>

        <section>
          <div className="histories">
            <FlexContainer></FlexContainer>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
