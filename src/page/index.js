import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import Logo from './logo';
import Title from './title';
import '../styles/global.scss';
import Header from './header';
import Histories from './histories';
import ClassFindingsReview from './class-findings-review';
import Exam from './exam';

class Main extends Component {
  render() {
    return (
      <div>
        <div id="first-page">
          <div>
            <FlexContainer>
              <Logo />
              <Title />
            </FlexContainer>
          </div>
          <Header />
          <section>
            <Histories />
            <ClassFindingsReview />
          </section>
        </div>
        <div id="second-page">
          <Exam />
        </div>
      </div>
    );
  }
}

export default Main;
