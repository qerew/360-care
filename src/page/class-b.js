import React, { Component } from 'react';
import Checkbox from '../components/checkbox';

class ClassB extends Component {
  render() {
    return (
      <div className="class-field">
        <div className="subtitle-2">Class B</div>
        <div className="subtitle-3">Pulse Exam</div>
        <table>
          <tbody>
            <tr>
              <td style={{paddingRight: '10px'}}>
                Dorsails Pedis:
                <table>
                  <tbody>
                    <tr>
                      <td align="center">R</td>
                      <td align="center">L</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="dorsails-r" /></td>
                      <td><Checkbox type="radio" name="dorsails-l" /></td>
                      <td>non-palpable</td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="dorsails-r" /></td>
                      <td><Checkbox type="radio" name="dorsails-l" /></td>
                      <td>decreased</td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="dorsails-r" /></td>
                      <td><Checkbox type="radio" name="dorsails-l" /></td>
                      <td>present</td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="dorsails-r" /></td>
                      <td><Checkbox type="radio" name="dorsails-l" /></td>
                      <td>upstroke brisk</td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="dorsails-r" /></td>
                      <td><Checkbox type="radio" name="dorsails-l" /></td>
                      <td>brisk</td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="dorsails-r" /></td>
                      <td><Checkbox type="radio" name="dorsails-l" /></td>
                      <td>normal</td>
                    </tr>
                    <tr>
                      <td><Checkbox type="radio" name="dorsails-r" /></td>
                      <td><Checkbox type="radio" name="dorsails-l" /></td>
                      <td>bounding</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
              Posterior Tibial:
              <table>
                <tbody>
                  <tr>
                    <td align="center">R</td>
                    <td align="center">L</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><Checkbox type="radio" name="posterior-r" /></td>
                    <td><Checkbox type="radio" name="posterior-l" /></td>
                    <td>non-palpable</td>
                  </tr>
                  <tr>
                    <td><Checkbox type="radio" name="posterior-r" /></td>
                    <td><Checkbox type="radio" name="posterior-l" /></td>
                    <td>decreased</td>
                  </tr>
                  <tr>
                    <td><Checkbox type="radio" name="posterior-r" /></td>
                    <td><Checkbox type="radio" name="posterior-l" /></td>
                    <td>present</td>
                  </tr>
                  <tr>
                    <td><Checkbox type="radio" name="posterior-r" /></td>
                    <td><Checkbox type="radio" name="posterior-l" /></td>
                    <td>upstroke brisk</td>
                  </tr>
                  <tr>
                    <td><Checkbox type="radio" name="posterior-r" /></td>
                    <td><Checkbox type="radio" name="posterior-l" /></td>
                    <td>brisk</td>
                  </tr>
                  <tr>
                    <td><Checkbox type="radio" name="posterior-r" /></td>
                    <td><Checkbox type="radio" name="posterior-l" /></td>
                    <td>normal</td>
                  </tr>
                  <tr>
                    <td><Checkbox type="radio" name="dorsails-r" /></td>
                    <td><Checkbox type="radio" name="dorsails-l" /></td>
                    <td>bounding</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClassB;