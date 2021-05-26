import React from 'react';
import Attributes from "../Attributes/indes";
import Equipment from "../Equipment";
import Abilities from "../Abilities";

import s from "./Solder.css"

const Solder = () => {
  return (
    <div  className="solder__root">
      <div>
        <select name="" id="" className="">
          <option value="knight">Knights</option>
          <option value="sergeant">Sergeants</option>
          <option selected value="coconut">Spearmens</option>
          <option value="mango">Mango</option>
        </select>
        <button>remove</button>
      </div>
      <Attributes />
      <Equipment />
      <Abilities />
    </div>
  );
};

export default Solder;
