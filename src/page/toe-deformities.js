import React, { Component } from 'react';
import Table from '../components/table';

class ToeDeformities extends Component {
  render() {
    return (
      <div style={{ margin: '4px' }}>
        <Table
          width="80%"
          title="Toe Deformities"
          type="radio"
          fields={[
            'Rigid hammertoe',
            'Flexible hammertoe',
            'Mallet toe',
            'Claw toe',
            'Hallux valgus',
            'Hallux limitus',
            'Hallux rigidus',
            'Bunionette',
            'Hallux varus',
          ]}
          options={['R', 'L', 'BOTH']}
          moreDetails="Toes Details"
        />
      </div>
    );
  }
}

export default ToeDeformities;
