import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import NeurosensoryExam from './neurosensory-exam';
import FootDeformities from './foot-deformities';
import Strength from './strength';
import Skin from './skin';
import ToeDeformities from './toe-deformities';
import '../styles/exam.scss';

class Exam extends Component {
  render() {
    return (
      <div>
        <div className="subtitle-1">Exam</div>
        <FlexContainer align="flex-start">
          <FlexBox>
            <NeurosensoryExam />
            <FootDeformities />
            <Strength />
          </FlexBox>
          <FlexBox>
            <div>
              <Skin />
              <ToeDeformities />
            </div>
          </FlexBox>
        </FlexContainer>
      </div>
    );
  }
}

export default Exam;