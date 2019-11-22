import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Select from '../components/select';
import History from './history';
import HPI from './hpi';
import '../styles/histories.scss';

class Histories extends Component {
  render() {
    return (
      <div className="histories">
        <FlexContainer>
          <FlexBox flex={3}>
            <div className="subtitle-1 bold">HISTORIES</div>
          </FlexBox>
          <FlexBox flex={1}>
            <div className="subtitle-1 bold">REVIEW OF SYSTEMS</div>
          </FlexBox>
        </FlexContainer>
        <FlexContainer align="flex-start">
          <FlexBox flex={3}>
            <History
              title="Medications Reviewed: "
              type="radio"
              options={['Yes', 'No', 'No Known Meds', 'Medications Reconciled']}
            />
            <History title="Allergies Reviewed: " type="radio" options={['Yes', 'No', 'NKDA']} />
            <History
              title="Medical Hx Reviewed: "
              type="radio"
              options={['Reviewed, no changes', 'No']}
            />
          </FlexBox>
          <FlexBox flex={1}>
            <Select
              type="checkbox"
              options={['Problem-focused ROS appears in the body of this note']}
            />
          </FlexBox>
        </FlexContainer>
        <hr />
        <FlexContainer>
          <FlexBox>
            <History
              type="radio"
              justify="space-between"
              title="Reason for Visit"
              options={[
                'Thick/Mycotic Nail',
                'DM Foot Care',
                'Calluses',
                'New Patient',
                'Established Patient',
              ]}
              other={true}
            />
          </FlexBox>
        </FlexContainer>
        <hr />
        <HPI />
      </div>
    );
  }
}

export default Histories;
