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
        <label htmlFor="comm_select">Choose your commander: </label>
        <select name="" id="comm_select" className="commander__choose">
          <option value="baron">Baron</option>
          <option onClick={() => {console.log("click on option")}} value="baron-m">Mounted baron</option>
          <option value="lord">Lord</option>
          <option value="lord-m">Mounted Lord</option>
          <option value="vsergeant">Veteran Sergeant</option>
          <option value="vsergant-m">Mounted Veteran Sergeant</option>
        </select>
      </div>
      <Attributes dataAtt={

      {
        "id": 0,
        "name": "levy",
        "units": [
      {
        "experience": "green",
        "stats": {
        "movement": 6,
        "attack": 8,
        "defence": 7,
        "morale": 6,
        "action": 1,
        "points": 9
      },
        "equipment": {
        "weapon": [
      {
        "name": "hand weapon",
        "atk-modifier": 0,
        "points": 0
      },
      {
        "name": "sling",
        "atk-modifier": 0,
        "points": 1,
        "effect": "10\u0022 range. Quick shot - can fire twice if stationary. May move full move distance and fire once."
      },
      {
        "name": "spear",
        "atk-modifier": 0,
        "points": 1,
        "effect": "REACH - Cannot counter Attack against spear/bill unless armed with spear/bill"
      },
      {
        "name": "improvised two handed weapon",
        "atk-modifier": -1,
        "points": 3,
        "effect": "SLOW - Will always act second if counter Attacked. Cannot equip shield with this weapon"
      }
        ],
        "shield": [
      {
        "name": "none",
        "points": 0
      },
      {
        "name": "small shield",
        "points": 2,
        "effect": "9+ Shield roll"
      }
        ]
      },
        "abilities": ["Sorry m'lord"]
      },
      {
        "experience": "irregular",
        "stats": {
        "movement": 6,
        "attack": 7,
        "defence": 7,
        "morale": 5,
        "action": 1,
        "points": 12
      },
        "equipment": {
        "weapon": [
      {
        "name": "hand weapon",
        "atk-modifier": 0,
        "points": 0
      },
      {
        "name": "sling",
        "atk-modifier": 0,
        "points": 1,
        "effect": "10\u0022 range. Quick shot - can fire twice if stationary. May move full move distance and fire once."
      },
      {
        "name": "spear",
        "atk-modifier": 0,
        "points": 1,
        "effect": "REACH - Cannot counter Attack against spear/bill unless armed with spear/bill"
      },
      {
        "name": "improvised two handed weapon",
        "atk-modifier": -1,
        "points": 3,
        "effect": "SLOW - Will always act second if counter Attacked. Cannot equip shield with this weapon"
      }
        ],
        "shield": [
      {
        "name": "none",
        "points": 0
      },
      {
        "name": "small shield",
        "points": 2,
        "effect": "9+ Shield roll"
      }
        ]
      },
        "abilities": ["Sorry m'lord"]
      }
        ]
      }}/>
      <button> add command group?</button>

    </div>
  );
};

export default Commander;
