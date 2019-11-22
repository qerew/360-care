import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Checkbox from '../components/checkbox';

class Skin extends Component {
  render() {
    return (
      <div style={{margin: '4px'}}>
        <div className="subtitle-2">
          Skin&nbsp;&nbsp;&nbsp;&nbsp;
          <small style={{fontWeight: 'initial'}}>
            (See lower extremities / feet drawing for details)
          </small>
        </div>
        <table className="table-format-2" width="80%">
          <tbody>
            <tr>
              <td></td>
              <td>R</td>
              <td>L</td>
              <td>BOTH</td>
            </tr>
            <tr>
              <td className="thead">Callus</td>
              <td><Checkbox type="radio" name="skin-callus" /></td>
              <td><Checkbox type="radio" name="skin-callus" /></td>
              <td><Checkbox type="radio" name="skin-callus" /></td>
            </tr>
            <tr>
              <td className="thead">Ecchymosis</td>
              <td><Checkbox type="radio" name="skin-ecchymosis" /></td>
              <td><Checkbox type="radio" name="skin-ecchymosis" /></td>
              <td><Checkbox type="radio" name="skin-ecchymosis" /></td>
            </tr>
            <tr>
              <td className="thead">Hyperhidrosis</td>
              <td><Checkbox type="radio" name="skin-hyperhidrosis" /></td>
              <td><Checkbox type="radio" name="skin-hyperhidrosis" /></td>
              <td><Checkbox type="radio" name="skin-hyperhidrosis" /></td>
            </tr>
            <tr>
              <td className="thead">Inflammation</td>
              <td><Checkbox type="radio" name="skin-inflammation" /></td>
              <td><Checkbox type="radio" name="skin-inflammation" /></td>
              <td><Checkbox type="radio" name="skin-inflammation" /></td>
            </tr>
            <tr>
              <td className="thead">Lesion</td>
              <td><Checkbox type="radio" name="skin-lesion" /></td>
              <td><Checkbox type="radio" name="skin-lesion" /></td>
              <td><Checkbox type="radio" name="skin-lesion" /></td>
            </tr>
            <tr>
              <td className="thead">Swelling</td>
              <td><Checkbox type="radio" name="skin-swelling" /></td>
              <td><Checkbox type="radio" name="skin-swelling" /></td>
              <td><Checkbox type="radio" name="skin-swelling" /></td>
            </tr>
          </tbody>
        </table>
        <div style={{height: '5px'}}></div>
        <FlexContainer align="center">
          <span>Skin Details &nbsp;</span>
          <FlexBox>
            <input type="text" />
          </FlexBox>
        </FlexContainer>
      </div>
    );
  }
}

export default Skin;