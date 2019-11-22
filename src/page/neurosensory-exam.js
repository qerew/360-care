import React, { Component } from 'react';
import FlexContainer from '../components/flex-container';
import FlexBox from '../components/flex-box';
import Checkbox from '../components/checkbox';

class NeurosensoryExam extends Component {
  render() {
    return (
      <div className="exam-fields">
        <table id="neurosensory-main">
          <tbody>
            <tr>
              <td className="subtitle-2 thead">Neurosensory Exam</td>
              <td className="subtitle-2 thead">*Required for MIPS if Diabetic</td>
            </tr>
            <tr>
              <td>Monofilament Exam</td>
              <td>
                <Checkbox type="radio" name="monofilament-exam" label="Abnormal" />
                <Checkbox type="radio" name="monofilament-exam" label="Normal" />
              </td>
            </tr>
          </tbody>
        </table>
        <small>(see diagram for details)</small>
        <p></p>
        <FlexContainer>
          <FlexBox>
            <div className="subtitle-4">Vibratory sense</div>
            <table>
              <tbody>
                <tr>
                  <td align="center">R</td>
                  <td align="center">L</td>
                  <td></td>
                </tr>
                <tr>
                  <td><Checkbox type="radio" name="vibratory-absense"/></td>
                  <td><Checkbox type="radio" name="vibratory-absense"/></td>
                  <td>absent</td>
                </tr>
                <tr>
                  <td><Checkbox type="radio" name="vibratory-impaired"/></td>
                  <td><Checkbox type="radio" name="vibratory-impaired"/></td>
                  <td>impaired</td>
                </tr>
                <tr>
                  <td><Checkbox type="radio" name="vibratory-normal"/></td>
                  <td><Checkbox type="radio" name="vibratory-normal"/></td>
                  <td>normal</td>
                </tr>
              </tbody>
            </table>
            <p></p>
            <div className="subtitle-4">2 Point Discrimination</div>
            <table>
              <tbody>
                <tr>
                  <td align="center">R</td>
                  <td align="center">L</td>
                  <td></td>
                </tr>
                <tr>
                  <td><Checkbox type="radio" name="two-point-absense"/></td>
                  <td><Checkbox type="radio" name="two-point-absense"/></td>
                  <td>absent</td>
                </tr>
                <tr>
                  <td><Checkbox type="radio" name="two-point-impaired"/></td>
                  <td><Checkbox type="radio" name="two-point-impaired"/></td>
                  <td>impaired</td>
                </tr>
                <tr>
                  <td><Checkbox type="radio" name="two-point-normal"/></td>
                  <td><Checkbox type="radio" name="two-point-normal"/></td>
                  <td>normal</td>
                </tr>
              </tbody>
            </table>
          </FlexBox>
          <FlexBox>
            <div className="subtitle-4">Achilles reflex</div>
            <table>
              <tbody>
                <tr>
                  <td align="center">R</td>
                  <td align="center">L</td>
                  <td></td>
                </tr>
                <tr>
                  <td><Checkbox type="radio" name="achilles-reflex-one-plus"/></td>
                  <td><Checkbox type="radio" name="achilles-reflex-one-plus"/></td>
                  <td>1+</td>
                </tr>
                <tr>
                  <td><Checkbox type="radio" name="achilles-reflex-two-plus"/></td>
                  <td><Checkbox type="radio" name="achilles-reflex-two-plus"/></td>
                  <td>2+</td>
                </tr>
                <tr>
                  <td><Checkbox type="radio" name="achilles-reflex-three-plus"/></td>
                  <td><Checkbox type="radio" name="achilles-reflex-three-plus"/></td>
                  <td>3+</td>
                </tr>
                <tr>
                  <td><Checkbox type="radio" name="achilles-reflex-four-plus"/></td>
                  <td><Checkbox type="radio" name="achilles-reflex-four-plus"/></td>
                  <td>4+</td>
                </tr>
                <tr>
                  <td><Checkbox type="radio" name="achilles-reflex-absent"/></td>
                  <td><Checkbox type="radio" name="achilles-reflex-absent"/></td>
                  <td>absent</td>
                </tr>
              </tbody>
            </table>
          </FlexBox>
        </FlexContainer>
      </div>
    );
  }
}

export default NeurosensoryExam;