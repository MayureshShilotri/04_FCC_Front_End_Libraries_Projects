import './App.css';
import React from 'react'

class App extends React.Component {
  render() {
    return (<div className="container" id="drum-machine">
      <h1 id = "display">Drum Machine</h1>
      <div className = "drum-pad" id="Q">Q</div>
      <div className = "drum-pad" id="W">W</div>
      <div className = "drum-pad" id="E">E</div>
      <div className = "drum-pad" id="A">A</div>
      <div className = "drum-pad" id="S">S</div>
      <div className = "drum-pad" id="D">D</div>
      <div className = "drum-pad" id="Z">Z</div>
      <div className = "drum-pad" id="X">X</div>
      <div className = "drum-pad" id="C">C</div>
    </div>);
  }
}

export default App;
