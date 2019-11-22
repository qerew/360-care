import React, { Component, Fragment } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Checkbox from '../components/checkbox';

class AdvancedTrophicChanges extends Component {
  render() {
    return (
      <Fragment>
        <div id="advanced-trophic-changes">
          <div className="subheader">Advanced Trophic Changes</div>
          <table>
            <tbody>
              <tr>
                <td colSpan="2"></td>
                <td>R</td>
                <td>L</td>
                <td>BOTH</td>
                <td>NORMAL</td>
                <td>+3</td>
              </tr>
              <tr>
                <td colSpan="2" className="thead">Capillary Filling Time:</td>
                <td><Checkbox type="radio" name="capillary" /></td>
                <td><Checkbox type="radio" name="capillary" /></td>
                <td><Checkbox type="radio" name="capillary" /></td>
                <td><Checkbox type="radio" name="capillary" /></td>
                <td><Checkbox type="radio" name="capillary" /></td>
              </tr>
              <tr>
                <td colSpan="2" className="thead">Absent Hair Growth:</td>
                <td><Checkbox type="radio" name="absent-hair-growth" /></td>
                <td><Checkbox type="radio" name="absent-hair-growth" /></td>
                <td><Checkbox type="radio" name="absent-hair-growth" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="2" className="thead">Pigmentary Changes:</td>
                <td><Checkbox type="radio" name="absent-hair-growth" /></td>
                <td><Checkbox type="radio" name="absent-hair-growth" /></td>
                <td><Checkbox type="radio" name="absent-hair-growth" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="thead">Skin color:</td>
                <td className="thead">red</td>
                <td><Checkbox type="radio" name="skin-red" /></td>
                <td><Checkbox type="radio" name="skin-red" /></td>
                <td><Checkbox type="radio" name="skin-red" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td className="thead">pale</td>
                <td><Checkbox type="radio" name="skin-pale" /></td>
                <td><Checkbox type="radio" name="skin-pale" /></td>
                <td><Checkbox type="radio" name="skin-pale" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td className="thead">cyanotic</td>
                <td><Checkbox type="radio" name="skin-cyanotic" /></td>
                <td><Checkbox type="radio" name="skin-cyanotic" /></td>
                <td><Checkbox type="radio" name="skin-cyanotic" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td className="thead">normal</td>
                <td><Checkbox type="radio" name="skin-color-normal" /></td>
                <td><Checkbox type="radio" name="skin-color-normal" /></td>
                <td><Checkbox type="radio" name="skin-color-normal" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="thead">Skin texture:</td>
                <td className="thead">thin</td>
                <td><Checkbox type="radio" name="skin-thin" /></td>
                <td><Checkbox type="radio" name="skin-thin" /></td>
                <td><Checkbox type="radio" name="skin-thin" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td className="thead">shiny</td>
                <td><Checkbox type="radio" name="skin-shiny" /></td>
                <td><Checkbox type="radio" name="skin-shiny" /></td>
                <td><Checkbox type="radio" name="skin-shiny" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td className="thead">dry</td>
                <td><Checkbox type="radio" name="skin-dry" /></td>
                <td><Checkbox type="radio" name="skin-dry" /></td>
                <td><Checkbox type="radio" name="skin-dry" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td className="thead">friable</td>
                <td><Checkbox type="radio" name="skin-friable" /></td>
                <td><Checkbox type="radio" name="skin-friable" /></td>
                <td><Checkbox type="radio" name="skin-friable" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td className="thead">atrophic</td>
                <td><Checkbox type="radio" name="skin-atrophic" /></td>
                <td><Checkbox type="radio" name="skin-atrophic" /></td>
                <td><Checkbox type="radio" name="skin-atrophic" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td className="thead">normal</td>
                <td><Checkbox type="radio" name="skin-texture-normal" /></td>
                <td><Checkbox type="radio" name="skin-texture-normal" /></td>
                <td><Checkbox type="radio" name="skin-texture-normal" /></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <FlexContainer>
            Details &nbsp;
            <FlexBox>
              <input type="text" />
            </FlexBox>
          </FlexContainer>
        </div>
        <div id="nail-changes">
          <table>
            <thead>
              <tr>
                <th className="thead">Nail Changes</th>
                <th>TA</th>
                <th>T1</th>
                <th>T2</th>
                <th>T3</th>
                <th>T4</th>
                <th width="10"></th>
                <th>T5</th>
                <th>T6</th>
                <th>T7</th>
                <th>T8</th>
                <th>T9</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="thead">Painful</td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
              </tr>
              <tr>
                <td className="thead">Thickened</td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
              </tr>
              <tr>
                <td className="thead">Discolored</td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
              </tr>
              <tr>
                <td className="thead">Crumbly</td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
              </tr>
              <tr>
                <td className="thead">Dystrophic</td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
              </tr>
              <tr>
                <td className="thead">Incurvated</td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
              </tr>
              <tr>
                <td className="thead">Pitting</td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
              </tr>
              <tr>
                <td className="thead">Other (specify below):</td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
                <td><Checkbox /></td>
              </tr>
            </tbody>
          </table>
          <textarea></textarea>
        </div>
      </Fragment>
    );
  }
}

export default AdvancedTrophicChanges;
