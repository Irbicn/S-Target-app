import React from 'react';
import { AppUi } from './AppUi';
import {STargetProvider} from '../utils/STargetContext'

function App() {
  return (
    <STargetProvider>
      <AppUi />
    </STargetProvider>
  );
}

export default App;
