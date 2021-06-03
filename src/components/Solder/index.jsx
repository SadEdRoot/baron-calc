import React, {useState} from 'react';
import Attributes from "../Attributes/indes";
import soldersData from "./solders.json"

import "./Solder.css"


const Solder = () => {
  const [quantity, setQuantity] = useState(3)

  const [id, setId] = useState(0);

  const solData = soldersData.solders;

  return (
    <div>
      <div>
        <select onChange={(e) => {setId(e.target.value);}} name="" id="" className="">
          {solData.map((data) => (
            <option key={data.id} value={data.id}>{data.name}</option>
          ))}
        </select>
        <label htmlFor=""></label>
        <button>remove</button>
      </div>
      <Attributes dataAtt={solData[id]}/>
    </div>
  );
};

export default Solder;
