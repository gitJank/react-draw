import React, { useState } from 'react';
import AppBar from '../Components/AppBar/AppBar';
import HomePage from '../Pages/HomePage/HomePage';
import Aside from '../Components/Aside/Aside';

function App() {
  const [asideOpen, setAsideOpen] = useState(false);

  return (
    <div id="app" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppBar setAsideOpen={setAsideOpen} asideOpen={asideOpen} />
      <Aside asideOpen={asideOpen} />
      <HomePage />
    </div>
  );
}

export default App;
