import React, { Component } from 'react';
import Table from '../components/table';

class RangeOfMotion extends Component {
  render() {
    return (
      <div style={{ margin: '4px' }}>
        <Table
          width="80%"
          title="Range of Motion"
          type="radio"
          fields={[
            'Increased',
            'Decreased',
            'Painful',
            'Spastic',
            'Normal',
          ]}
          options={['R', 'L', 'BOTH']}
          otherField={true}
          description="Choose no more than 2 per laterality"
        />
      </div>
    );
  }
}

export default RangeOfMotion;
