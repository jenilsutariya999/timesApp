import React from 'react';
import './App.css';
import DigitalWatch from "./components/Time";
import SecondWatch from "./components/SecondWatch";
import ThrdWatch from './components/ThirdWatch';
import ForthWatch from './components/FourthWatch';
import FifthWatch from './components/FifthWatch';

function App() {
  return (
    <div className="App">
      <table className="time-table">
        <thead>
          <tr>
            <th>Watch</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Watch</td>
            <td><DigitalWatch /></td>
          </tr>
          <tr>
            <td>Second Watch</td>
            <td><SecondWatch /></td>
          </tr>
          <tr>
            <td>Third Watch</td>
            <td><ThrdWatch /></td>
          </tr>
          <tr>
            <td>Fourth Watch</td>
            <td><ForthWatch /></td>
          </tr>
          <tr>
            <td>Fifth Watch</td>
            <td><FifthWatch /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
