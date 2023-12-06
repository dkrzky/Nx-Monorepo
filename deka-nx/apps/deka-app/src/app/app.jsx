import React from 'react';
import { Button } from 'deka-lib';
import '../../../../libs/deka-lib/src/tailwind.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <h1>AFJOAIHFIAJPFOJPOOJP</h1>
      </div>
      <div className="button-container">
        <Button text="Click" style="default" />
        <Button text="Click" style="dark" />
        <Button text="Click" style="light" />
        <Button text="Click" style="defaultGreen" />
        <Button text="Click" style="defaultRed" />
        <Button text="Click" style="defaultYellow" />
        <Button text="Click" style="defaultPurple" />
        <br/>
        <Button text="Click" style="defaultRounded" />
        <Button text="Click" style="roundedDark" />
        <Button text="Click" style="roundedLight" />
        <Button text="Click" style="roundedGreen" />
        <Button text="Click" style="roundedRed" />
        <Button text="Click" style="roundedYellow" />
        <Button text="Click" style="roundedPurple" />
        <br/>
        <Button text="Click" style="defaultShadow" />
        <Button text="Click" style="shadowGreen" />
        <Button text="Click" style="shadowCyan" />
        <Button text="Click" style="shadowLime" />
        <Button text="Click" style="shadowRed" />
        <Button text="Click" style="shadowPink" />
        <Button text="Click" style="shadowPurple" />
      </div>
    </div>
  );
}

export default App;
