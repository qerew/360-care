import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Checkbox from '../components/checkbox';

class ClassC extends Component {
  render() {
    return (
      <div id="class-c" className="class-field">
        <div className="subtitle-2">Class C</div>
        <table>
          <tbody>
            <tr>
              <td className="thead"><em>Patient States:</em></td>
              <td>R</td>
              <td>L</td>
              <td>BOTH</td>
              <td>ABSENT</td>
            </tr>
            <tr>
              <td className="thead">Edema</td>
              <td><Checkbox type="radio" name="edema" /></td>
              <td><Checkbox type="radio" name="edema" /></td>
              <td><Checkbox type="radio" name="edema" /></td>
              <td><Checkbox type="radio" name="edema" /></td>
            </tr>
            <tr>
              <td className="thead">Burning</td>
              <td><Checkbox type="radio" name="burning" /></td>
              <td><Checkbox type="radio" name="burning" /></td>
              <td><Checkbox type="radio" name="burning" /></td>
              <td><Checkbox type="radio" name="burning" /></td>
            </tr>
            <tr>
              <td className="thead">Tingling</td>
              <td><Checkbox type="radio" name="tingling" /></td>
              <td><Checkbox type="radio" name="tingling" /></td>
              <td><Checkbox type="radio" name="tingling" /></td>
              <td><Checkbox type="radio" name="tingling" /></td>
            </tr>
            <tr>
              <td className="thead">Claudication</td>
              <td><Checkbox type="radio" name="claudication" /></td>
              <td><Checkbox type="radio" name="claudication" /></td>
              <td><Checkbox type="radio" name="claudication" /></td>
              <td><Checkbox type="radio" name="claudication" /></td>
            </tr>
            <tr>
              <td className="thead">Temp Change</td>
              <td><Checkbox type="radio" name="temp-change" /></td>
              <td><Checkbox type="radio" name="temp-change" /></td>
              <td><Checkbox type="radio" name="temp-change" /></td>
              <td><Checkbox type="radio" name="temp-change" /></td>
            </tr>
          </tbody>
        </table>
        <FlexContainer>
        Objective Findings &nbsp;
          <FlexBox>
            <input type="text" />
          </FlexBox>
        </FlexContainer>
        <FlexContainer>
          <FlexBox>
            <div className="subtitle-3">Refer to Vascular Surgeon:</div>
          </FlexBox>
          <FlexBox>
            <Checkbox type="radio" name="refer-vascular" label="Yes"/>
            <Checkbox type="radio" name="refer-vascular" label="No"/>
          </FlexBox>
        </FlexContainer>
      </div>
    );
  }
}

export default ClassC;