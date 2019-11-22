import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Checkbox from '../components/checkbox';

class ToeDeformities extends Component {
  render() {
    return (
      <div style={{margin: '4px'}}>
        <div className="subtitle-2">
          Toe Deformities
        </div>
        <table className="table-format-2" width="80%">
          <tbody>
            <tr>
              <td className="thead"><small>May select 2 per laterality</small></td>
              <td>R</td>
              <td>L</td>
              <td>BOTH</td>
            </tr>
            <tr>
              <td className="thead">Rigid hammertoe</td>
              <td><Checkbox type="radio" name="rigid-hammertoe" /></td>
              <td><Checkbox type="radio" name="rigid-hammertoe" /></td>
              <td><Checkbox type="radio" name="rigid-hammertoe" /></td>
            </tr>
            <tr>
              <td className="thead">Flexible hammertoe</td>
              <td><Checkbox type="radio" name="flexible-hammertoe" /></td>
              <td><Checkbox type="radio" name="flexible-hammertoe" /></td>
              <td><Checkbox type="radio" name="flexible-hammertoe" /></td>
            </tr>
            <tr>
              <td className="thead">Mallet toe</td>
              <td><Checkbox type="radio" name="mallet-toe" /></td>
              <td><Checkbox type="radio" name="mallet-toe" /></td>
              <td><Checkbox type="radio" name="mallet-toe" /></td>
            </tr>
            <tr>
              <td className="thead">Claw toe</td>
              <td><Checkbox type="radio" name="claw-toe" /></td>
              <td><Checkbox type="radio" name="claw-toe" /></td>
              <td><Checkbox type="radio" name="claw-toe" /></td>
            </tr>
            <tr>
              <td className="thead">Hallux valgus</td>
              <td><Checkbox type="radio" name="hallux-valgus" /></td>
              <td><Checkbox type="radio" name="hallux-valgus" /></td>
              <td><Checkbox type="radio" name="hallux-valgus" /></td>
            </tr>
            <tr>
              <td className="thead">Hallux limitus</td>
              <td><Checkbox type="radio" name="hallux-limitus" /></td>
              <td><Checkbox type="radio" name="hallux-limitus" /></td>
              <td><Checkbox type="radio" name="hallux-limitus" /></td>
            </tr>
            <tr>
              <td className="thead">Hallux rigidus</td>
              <td><Checkbox type="radio" name="" /></td>
              <td><Checkbox type="radio" name="" /></td>
              <td><Checkbox type="radio" name="" /></td>
            </tr>
            <tr>
              <td className="thead"></td>
              <td><Checkbox type="radio" name="" /></td>
              <td><Checkbox type="radio" name="" /></td>
              <td><Checkbox type="radio" name="" /></td>
            </tr>
            <tr>
              <td className="thead"></td>
              <td><Checkbox type="radio" name="" /></td>
              <td><Checkbox type="radio" name="" /></td>
              <td><Checkbox type="radio" name="" /></td>
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

export default ToeDeformities;