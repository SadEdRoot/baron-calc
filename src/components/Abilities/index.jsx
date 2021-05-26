import React from 'react';
import './Abilities.css'

const Abilities = () => {
  return (
    <div>
      <div className="abil__header">Abilities</div>
      <select onChange={(event) => {console.log('###: chose ', event.target.value)}} name="" id="" className="">
        <option selected value="">...</option>
        <option value="lime">Agile</option>
        <option  value="coconut">Brace</option>
        <option value="mango">Mongo</option>
      </select>
    </div>
  );
};

export default Abilities;
