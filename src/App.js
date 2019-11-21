import React from 'react';
import FlexBox from './components/flexbox';
import Logo from './components/logo';
import Title from './components/title';
import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <FlexBox>
        <Logo />
        <Title />
      </FlexBox>
    </div>
  );
}

export default App;
