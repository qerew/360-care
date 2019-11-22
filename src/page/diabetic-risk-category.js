import React, { Component } from 'react';
import Checkbox from '../components/checkbox';

class DiabeticRiskCategory extends Component {
  render() {
    return (
      <div className="section mips-section">
        <div className="subtitle-1">Diabetic Risk Category *Required Annually for MIPS*</div>
        <div>
          <Checkbox
            type="radio"
            name="diabetic-risk-category"
            value={0}
            label="0 - No loss of protective sensation."
          />
        </div>
        <div>
          <Checkbox
            type="radio"
            name="diabetic-risk-category"
            value={1}
            label="1 - Loss of protective sensation - no weakness, deformity, callus, pre-ulcer or history of ulceration."
          />
        </div>
        <div>
          <Checkbox
            type="radio"
            name="diabetic-risk-category"
            value={2}
            label="2 - Loss of protective sensation - with weaknes, deformity, pre-ulcer or callus but no history of ulceration."
          />
        </div>
        <div>
          <Checkbox
            type="radio"
            name="diabetic-risk-category"
            value={3}
            label="3 - History of plantar ulceration, or ischemic index <0.45."
          />
        </div>
      </div>
    );
  }
}

export default DiabeticRiskCategory;
