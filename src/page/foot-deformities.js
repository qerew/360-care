import React, { Component } from 'react';
import Checkbox from '../components/checkbox';

class FootDeformities extends Component {
  render() {
    return (
      <div className="exam-fields">
        <div className="subtitle-2">Foot Deformities</div>
        <table id="foot-deformities" width="80%">
          <tbody>
            <tr>
              <td className="thead"><small>Choose 1 per laterality</small></td>
              <td>R</td>
              <td>L</td>
              <td>BOTH</td>
            </tr>
            <tr>
              <td className="thead">Cavus</td>
              <td><Checkbox type="radio" name="cavus" /></td>
              <td><Checkbox type="radio" name="cavus" /></td>
              <td><Checkbox type="radio" name="cavus" /></td>
            </tr>
            <tr>
              <td className="thead">Planus</td>
              <td><Checkbox type="radio" name="planus" /></td>
              <td><Checkbox type="radio" name="planus" /></td>
              <td><Checkbox type="radio" name="planus" /></td>
            </tr>
            <tr>
              <td className="thead">Equinous</td>
              <td><Checkbox type="radio" name="equinous" /></td>
              <td><Checkbox type="radio" name="equinous" /></td>
              <td><Checkbox type="radio" name="equinous" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FootDeformities;