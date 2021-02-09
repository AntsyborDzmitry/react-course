import "./App.css";

import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <h1>React home task №1</h1>
      <ClassicElement />
      <ClassicFunctionalComponent />
      <ArrowFunctionalComponent />
      <SimpleComponent />
      <PureComponent />
    </div>
  );
}
function ClassicElement() {
  return React.createElement(
    "div",
    { className: "classicElem" },
    "Hello I'm classic createElement component"
  );
}

function ClassicFunctionalComponent() {
  return (
    <div className="classicFunction">
      Hello I'm classic functional component
    </div>
  );
}

let ArrowFunctionalComponent = () => (
  <div className="arrowFunction">Hello I'm arrow functional component</div>
);

class SimpleComponent extends React.Component {
  render() {
    return (
      <div className="simpleComponent">
        Hello I'm "Component" class based component
      </div>
    );
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return (
      <div className="pureComponent">
        Hello I'm "PureComponent" class based component
      </div>
    );
  }
}

export default App;