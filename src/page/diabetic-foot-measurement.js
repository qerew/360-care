import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Checkbox from '../components/checkbox';

class DiabeticFootMeasurement extends Component {
  render() {
    return (
      <div className="section mips-section">
        <div className="subtitle-1">
          Diabetic Foot Measurement / Footwear Evaluation and Counseling *Required Annually for
          MIPS*
        </div>
        <FlexContainer>
          <FlexBox>
            <table width="80%">
              <tbody>
                <tr>
                  <td>Footwear evaluation performed:</td>
                  <td>
                    <Checkbox name="footwear-evaluation-performed" label="Yes" />
                  </td>
                </tr>
                <tr>
                  <td>Counseled on proper footwear*:</td>
                  <td>
                    <Checkbox name="counseled-on-proper-footwear" label="Yes" />
                  </td>
                </tr>
              </tbody>
            </table>
          </FlexBox>
          <FlexBox>
            <table width="100%">
              <tbody>
                <tr>
                  <td>Foot measurement performed in NH:</td>
                  <td>
                    <Checkbox type="radio" name="foot-measurement-performed-in-nh" label="No" />
                  </td>
                  <td>
                    <Checkbox type="radio" name="foot-measurement-performed-in-nh" label="Yes" />
                  </td>
                </tr>
              </tbody>
            </table>
          </FlexBox>
        </FlexContainer>
      </div>
    );
  }
}

export default DiabeticFootMeasurement;
