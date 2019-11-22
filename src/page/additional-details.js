import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Checkbox from '../components/checkbox';

class AdditionalDetails extends Component {
  render() {
    return (
      <div>
        <FlexContainer align="stretch">
          <FlexBox id="additional-details">
            <div className="subtitle-1">Additional Details</div>
            <textarea></textarea>
          </FlexBox>
          <div className="follow-up-field">
            <div>
              <em style={{ fontSize: '16px', fontWeight: 'bold' }}>Follow Up</em>
            </div>
            <div>
              <Checkbox type="radio" name="follow" label="2-3 mths" />
            </div>
            <div>
              <Checkbox type="radio" name="follow" label="1 mth" />
            </div>
            <div>
              <Checkbox type="radio" name="follow" label="PRN" />
            </div>
          </div>
        </FlexContainer>
        <FlexContainer align="stretch">
          <FlexBox flex={2}>
            <div id="codes">
              <em style={{ fontSize: '16px', fontWeight: 'bold' }}>Codes</em>
            </div>
          </FlexBox>
          <FlexBox flex={1}>
            <div id="signature"></div>
            <hr style={{margin: 0}}/>
            <div className="subtitle-4">Provider Signature</div>
          </FlexBox>
        </FlexContainer>
      </div>
    );
  }
}

export default AdditionalDetails;
