import React, {useState} from 'react';
import Attributes from "../Attributes/indes";
import soldersData from "./solders.json"

import "./Solder.css"


const Solder = ({remove}) => {
  const solData = soldersData.solders;
  const [quantity, setQuantity] = useState(3);
  const [id, setId] = useState(0);

  const checkSolder = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={checkSolder} name="" id="" className="">
          {solData.map((data) => (
            <option key={data.id} value={data.id}>{data.name}</option>
          ))}
        </select>
        <label htmlFor=""></label>
        <button disabled onClick={() => {setQuantity(quantity - 1)}}>-</button>
        {quantity}
        <button onClick={() => {setQuantity(quantity + 1)}}>+</button>
        <button onClick={remove}>remove</button>
      </div>
      <Attributes dataAtt={solData[id]} quantity={quantity}/>
    </div>
  );
};

export default Solder;
