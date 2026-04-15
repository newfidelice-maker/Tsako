import React from 'react';
import './App.css'; // Assuming custom styles are in App.css
import Logo from './components/Logo'; // Assuming Logo component is available
import Splash from './components/Splash'; // Assuming Splash component is available

const App = () => {
  return (
    <div className="App">
      <Splash />
      <header className="App-header">
        <Logo />
        <h1>Welcome to Tsako App</h1>
      </header>
      <main>
        <section>
          <h2>Phase 1 Structure Completion</h2>
          <p>This is the initial layout of the Tsako app.</p>
        </section>
      </main>
    </div>
  );
}

export default App;