import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Input from '../components/input';
import Code from '../components/code';
import Select from '../components/select';
import Logo from './logo';
import Title from './title';
import '../styles/global.scss';
import Header from './header';
import Histories from './histories';

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
        <Header />
        <section>
          <Histories />
        </section>
      </div>
    );
  }
}

export default Main;
