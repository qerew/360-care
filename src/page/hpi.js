import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Checkbox from '../components/checkbox';

class HPI extends Component {
  render() {
    return (
      <FlexContainer align="center">
        <div style={{ width: '165px' }}>
          <div className="subtitle-2">HPI: </div>
        </div>
        <FlexBox>
          <div>
            <table>
              <tr>
                <td>
                  <Checkbox type="radio" name="hpi" label="DM Foot Care" />
                </td>
                <td>
                  <Checkbox type="radio" name="hpi" label="At Risk Foot Care" />
                </td>
                <td>
                  <Checkbox type="radio" name="hpi" label="Presents in Wheelchair" />
                </td>
                <td>
                  <Checkbox type="radio" name="hpi" label="Presents in Gerichair" />
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox type="radio" name="hpi" label="Seen at bedside" />
                </td>
                <td>
                  <Checkbox type="radio" name="hpi" label="Walks with a walker" />
                </td>
                <td>
                  <Checkbox type="radio" name="hpi" label="Altered mental status" />
                </td>
                <td></td>
              </tr>
            </table>
            <FlexContainer>
              <Checkbox type="radio" label="Other" value="Other" name="hpi" />
              <FlexBox>
                <textarea rows="2" />
              </FlexBox>
            </FlexContainer>
          </div>
        </FlexBox>
      </FlexContainer>
    );
  }
}

export default HPI;
