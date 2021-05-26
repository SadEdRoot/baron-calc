import React from 'react';
import Attributes from "../Attributes/indes";
import Equipment from "../Equipment";
import Abilities from "../Abilities";

import './Commander.css'

const Commander = () => {

  return (
    <div className="commander__root">
      <div className="commander__header">
        commander
      </div>
      <div className="commander__wrap">
        <input type="text"/>
        <select name="" id="" className="commander__choose">
          <option value="baron">Baron</option>
          <option onClick={() => {console.log("click on option")}} value="baron-m">Mounted baron</option>
          <option value="lord">Lord</option>
          <option value="lord-m">Mounted Lord</option>
          <option value="vsergeant">Veteran Sergeant</option>
          <option value="vsergant-m">Mounted Veteran Sergeant</option>
        </select>
      </div>
      <Attributes />
      <Equipment />
      <Abilities />
      <button> add command group?</button>

    </div>
  );
};

export default Commander;
