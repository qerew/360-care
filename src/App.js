import React from 'react';
import FlexBox from './components/flexbox';
import Input from './components/input';
import Code from './components/code';
import Logo from './page/logo';
import Title from './page/title';
import './styles/global.scss';

function App() {
  return (
    <div className="app">
      <div>
        <FlexBox>
          <Logo />
          <Title />
        </FlexBox>
      </div>

      <div>
        <FlexBox>
          <Input title="Last Name: " />
          <Code title="MRN: " type="number" fields={[12]}/>
        </FlexBox>
        <FlexBox>
          <Input title="First Name: " />
          <Code title="DOB: " type="number" fields={[2, 2, 4]}/>
        </FlexBox>
      </div>
    </div>
  );
}

export default App;
