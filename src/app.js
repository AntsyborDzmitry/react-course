import './styles/app.css';
import React from 'react';
import FunctionalComponent from './components/functionalComponentWithTextControl';
import SimpleComponent from './components/simpleComponentWithTextControl';

function App() {
  return (
    <div className="App">
      <h1>React home task №2</h1>
      <FunctionalComponent text="Hello I'm classic functional component !" />
      <SimpleComponent text="Hello I'm  class based component !" />
    </div>
  );
}

export default App;
