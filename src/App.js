import React from 'react';
import Main from './page';
import ReactToPrint from 'react-to-print';

function App() {
  let componentRef;
  return (
    <div className="app">
      <Main ref={(el) => (componentRef = el)} />
      <ReactToPrint
        trigger={() => <button className="btn-print">Print</button>}
        content={() => componentRef}
      />
    </div>
  );
}

export default App;
