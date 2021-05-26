import React from 'react'
import './App.css';
import Solder from "./components/Solder";
import Commander from "./components/Commander";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <div className="App_wrap">
        <h1 className="Header">Army roster</h1>
        <Settings />
        <Commander />
        <button>add another commander?</button>
        <div className="solders-wrap">
          //map с данными из стора
          <Solder />
          <button>add solders group </button> //обработчик должен добавлять новые солдат в данные.

        </div>
      </div>
    </div>
  );
}

export default App;
