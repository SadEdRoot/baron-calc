import React from 'react'
import './App.css';
import Solders from "./layouts/Solders/Solders";
import Commander from "./components/Commander";
import Settings from "./components/Settings";

function App() {
  const company = {
    solders: [
      {
        unit: {
          "name": "sergeants",
          "level": "veteran",
          "stats": {
            "movement": 6,
            "attack": 4,
            "defence": 7,
            "morale": 4,
            "action": 1,
            "points": 19
          },
          "equipment": {
            "weapon": {
              "name": "crossbow",
              "atk-modifier": [0, 1]
            },
            "armour": {
              "name": "mail",
              "def-modifier": 2
            },
            "shield": {

            },
            "options": [{
              "name": "lance",
              "isChecked": true
            }]
          },
          "abilities": ["Every Bloody Sunday"]
        }
      }
    ]
  }
  return (
    <div className="App">
      <div className="App_wrap">
        <h1 className="Header">Army roster</h1>
        <Settings />
        <Commander />
        <button>add another commander?</button>
        <div className="solders-wrap">
          //map с данными из стора
          <Solders />
        </div>
      </div>
    </div>
  );
}

export default App;
