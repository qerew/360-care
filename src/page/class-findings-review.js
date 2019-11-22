import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import ClassA from './class-a';
import ClassB from './class-b';
import ClassC from './class-c';
import AdvancedTrophicChanges from './advanced-trophic-changes';
import '../styles/class-findings-review.scss';

class ClassFindingsReview extends Component {
  render() {
    return (
      <div>
        <div className="subtitle-1">Class Findings Review</div>
        <FlexContainer align="flex-start">
          <FlexBox>
            <ClassA />
            <ClassB />
            <ClassC />
          </FlexBox>
          <FlexBox>
            <AdvancedTrophicChanges />
          </FlexBox>
        </FlexContainer>
      </div>
    );
  }
}

export default ClassFindingsReview;