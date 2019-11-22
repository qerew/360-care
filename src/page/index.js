import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import Logo from './logo';
import Title from './title';
import Header from './header';
import Histories from './histories';
import ClassFindingsReview from './class-findings-review';
import Exam from './exam';
import DiabesticRiskCategory from './diabetic-risk-category';
import DiabeticFootMeasurement from './diabetic-foot-measurement';
import AdditionalDetails from './additional-details';
import Footer from './footer';
import '../styles/global.scss';

class Main extends Component {
  render() {
    return (
      <div>
        <div id="first-page">
          <div>
            <FlexContainer justify="space-between">
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
          <DiabesticRiskCategory />
          <DiabeticFootMeasurement />
          <AdditionalDetails />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
