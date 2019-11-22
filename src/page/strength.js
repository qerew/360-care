import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Checkbox from '../components/checkbox';

class Strength extends Component {
  render() {
    return (
      <div>
        <div className="subtitle-2">Strength</div>
        <FlexContainer>
          <FlexBox>
            <div>Plantarflexion</div>
            <div>
              <small>Choose 1 per laterality Toes Details</small>
            </div>
            <table id="plantarflexion" width="80%">
              <tbody>
                <tr>
                  <td></td>
                  <td>R</td>
                  <td>L</td>
                  <td>BOTH</td>
                </tr>
                <tr>
                  <td className="thead">0 / 5</td>
                  <td><Checkbox type="radio" name="plantarflexion-0" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-0" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-0" /></td>
                </tr>
                <tr>
                  <td className="thead">1 / 5</td>
                  <td><Checkbox type="radio" name="plantarflexion-1" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-1" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-1" /></td>
                </tr>
                <tr>
                  <td className="thead">2 / 5</td>
                  <td><Checkbox type="radio" name="plantarflexion-2" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-2" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-2" /></td>
                </tr>
                <tr>
                  <td className="thead">3 / 5</td>
                  <td><Checkbox type="radio" name="plantarflexion-3" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-3" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-3" /></td>
                </tr>
                <tr>
                  <td className="thead">4 / 5</td>
                  <td><Checkbox type="radio" name="plantarflexion-4" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-4" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-4" /></td>
                </tr>
                <tr>
                  <td className="thead">5 / 5</td>
                  <td><Checkbox type="radio" name="plantarflexion-5" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-5" /></td>
                  <td><Checkbox type="radio" name="plantarflexion-5" /></td>
                </tr>
              </tbody>
            </table>
          </FlexBox>
          <FlexBox>
            <div>Dorsiflexion</div>
            <div>
              <small>Choose 1 per laterality</small>
            </div>
            <table id="dorsiflexion" width="80%">
              <tbody>
                <tr>
                  <td></td>
                  <td>R</td>
                  <td>L</td>
                  <td>BOTH</td>
                </tr>
                <tr>
                  <td className="thead">0 / 5</td>
                  <td><Checkbox type="radio" name="dorsiflexion-0" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-0" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-0" /></td>
                </tr>
                <tr>
                  <td className="thead">1 / 5</td>
                  <td><Checkbox type="radio" name="dorsiflexion-1" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-1" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-1" /></td>
                </tr>
                <tr>
                  <td className="thead">2 / 5</td>
                  <td><Checkbox type="radio" name="dorsiflexion-2" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-2" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-2" /></td>
                </tr>
                <tr>
                  <td className="thead">3 / 5</td>
                  <td><Checkbox type="radio" name="dorsiflexion-3" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-3" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-3" /></td>
                </tr>
                <tr>
                  <td className="thead">4 / 5</td>
                  <td><Checkbox type="radio" name="dorsiflexion-4" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-4" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-4" /></td>
                </tr>
                <tr>
                  <td className="thead">5 / 5</td>
                  <td><Checkbox type="radio" name="dorsiflexion-5" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-5" /></td>
                  <td><Checkbox type="radio" name="dorsiflexion-5" /></td>
                </tr>
              </tbody>
            </table>
          </FlexBox>
        </FlexContainer>
        <div style={{height: '5px'}}></div>
        <FlexContainer align="center">
          <span style={{width: '70px'}}>Other (R): &nbsp;</span>
          <FlexBox>
            <input type="text" />
          </FlexBox>
        </FlexContainer>
        <div style={{height: '5px'}}></div>
        <FlexContainer align="center">
          <span style={{width: '70px'}}>Other (L): &nbsp;</span>
          <FlexBox>
            <input type="text" />
          </FlexBox>
        </FlexContainer>
      </div>
    );
  }
}

export default Strength;