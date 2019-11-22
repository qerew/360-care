import React, { Component } from 'react';
import Table from '../components/table';

class Skin extends Component {
  render() {
    return (
      <div style={{ margin: '4px' }}>
        <Table
          width="80%"
          title="Skin"
          type="radio"
          fields={['Callus', 'Ecchymosis', 'Hyperhidrosis', 'Inflammation', 'Lesion', 'Swelling']}
          options={['R', 'L', 'BOTH']}
          moreDetails="Skin Details"
        />
      </div>
    );
  }
}

export default Skin;
