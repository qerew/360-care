import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Checkbox from '../components/checkbox';

class ClassA extends Component {
  render() {
    return (
      <div className="class-field">
        <div className="subtitle-2">Class A</div>
        <table>
          <tbody>
            <tr>
              <td valign="top">Amputation</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td align="center">R</td>
                      <td align="center">L</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="amputation-r" /></td>
                      <td><Checkbox type="radio" name="amputation-l" /></td>
                      <td>None</td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="amputation-r" /></td>
                      <td><Checkbox type="radio" name="amputation-l" /></td>
                      <td>AKA</td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="amputation-r" /></td>
                      <td><Checkbox type="radio" name="amputation-l" /></td>
                      <td>BKA</td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="amputation-r" /></td>
                      <td><Checkbox type="radio" name="amputation-l" /></td>
                      <td>distal foot</td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="amputation-r" /></td>
                      <td><Checkbox type="radio" name="amputation-l" /></td>
                      <td>foot</td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="amputation-r" /></td>
                      <td><Checkbox type="radio" name="amputation-l" /></td>
                      <td>toes</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td valign="top">
                <div className="info">Class Findings / Q Codes Cheat Sheet</div>
                <div className="info">Q7 = 1 Class A Finding</div>
                <div className="info">Q8 = 2 Class B findings</div>
                <div className="info">Q9 = 2 Class C and 1 Class B Findings</div>
              </td>
            </tr>
          </tbody>
        </table>
        <FlexContainer align="center">
          Class A Details &nbsp;
          <FlexBox>
            <input type="text" />
          </FlexBox>
        </FlexContainer>
      </div>
    );
  }
}

export default ClassA;