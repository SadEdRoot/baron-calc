import React, {useEffect, useState} from 'react';
import Attributes from "../Attributes/indes";
import soldersData from "./solders.json"

import "./Solder.css"
import {useDispatch} from "react-redux";
import {setSolderUnit} from "../../store/soldersArr";

const Solder = ({unitId, remove}) => {
  const solData = soldersData.solders;
  const [quantity, setQuantity] = useState(3);
  const [id, setId] = useState(0);
  const [levelId, setLevelId] = useState(0);
  const dispatch = useDispatch();
  const [unitData, setUnitData] = useState({
    id: solData[id].id,
    name: solData[id].name,
    quantity: quantity,
    experience: solData[id].units[levelId].experience,
    stats: solData[id].units[levelId].stats,
    equipment: Object.entries(solData[id].units[levelId].equipment).reduce((acc, item,) => {
      const name = item[0];
      acc[name] = item[1][0];
      return acc;
    }, {}),
    abilities: solData[id].units[levelId].abilities,
  });

  const checkSolder = (e) => {
    setId(e.target.value);
    setLevelId(0);
  };

  useEffect(() => {
    setUnitData({...unitData, quantity})
  }, [quantity]);

  useEffect(() => {
    const eqipSum = Object.values(unitData.equipment).reduce((acc, index) => {
      acc += index.points
      return acc
    }, 0)
    const sum = unitData.quantity * (solData[id].units[levelId].stats.points + eqipSum);

    const unit = {...unitData};
    unit.sum = sum;
    dispatch(setSolderUnit({unit, unitId}));
  }, [unitData])


  const setEquipment = (weaponType, weaponId) => {
    const wtObj = {}
    wtObj[weaponType] = solData[id].units[levelId].equipment[weaponType][weaponId];
    setUnitData({...unitData, equipment: {...unitData.equipment, ...wtObj}});
  }

  const changeLevel = (id) => {
    setLevelId(id);
  }

  return (
    <div>
      <div>
        <select onChange={checkSolder} name="" id="" className="">
          {solData.map((data) => (
            <option key={data.id} value={data.id}>{data.name}</option>
          ))}
        </select>
        <label htmlFor=""></label>
        <button onClick={() => {setQuantity(quantity - 1)}}>-</button>
        {quantity}
        <button onClick={() => {setQuantity(quantity + 1)}}>+</button>
        <button onClick={remove}>remove</button>
      </div>
      <Attributes levelId={levelId} setEquipment={setEquipment} handleChange={changeLevel} dataAtt={solData[id]}/>
    </div>
  );
};

export default Solder;
