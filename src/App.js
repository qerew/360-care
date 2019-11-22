import React from 'react';
import Main from './page';

function App() {
  function printDoc() {
    window.print();
  }
  return (
    <div className="app">
      <Main />
      <button id="btn-print" onClick={printDoc}>Print</button>
    </div>
  );
}

export default App;
