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
  const [enabled,setEnabled] = useState(true);
  const [unitSum, setUnitSum] = useState(0);
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

  const quantityCheck = () => {
    const minimum = solData[id].isMount ? 2 : 3;
    quantity <= minimum ? setEnabled(false) : setEnabled(true);
  }

  useEffect(()=>{
    setUnitData({
      id: solData[id].id,
      name: solData[id].name,
      quantity: quantity,
      experience: solData[id].units[levelId].experience,
      stats: solData[id].units[levelId].stats,
      isMount: solData[id].isMount ? true : false,
      equipment: Object.entries(solData[id].units[levelId].equipment).reduce((acc, item,) => {
        const name = item[0];
        acc[name] = item[1][0];
        return acc;
      }, {}),
      abilities: solData[id].units[levelId].abilities,
    })
    quantityCheck();
  }, [id]);

  useEffect(() => {
    setUnitData({
      ...unitData,
      experience: solData[id].units[levelId].experience,
      stats: solData[id].units[levelId].stats,
      equipment: Object.entries(solData[id].units[levelId].equipment).reduce((acc, item,) => {
        const name = item[0];
        acc[name] = item[1][0];
        return acc;
      }, {}),
      abilities: solData[id].units[levelId].abilities,
    });
  }, [levelId]);

  useEffect(() => {
    setUnitData({...unitData, quantity});
    quantityCheck();
  }, [quantity]);

  useEffect(() => {
    const eqipSum = Object.values(unitData.equipment).reduce((acc, index) => {
      acc += index.points
      return acc
    }, 0)
    const sum = unitData.quantity * (solData[id].units[levelId].stats.points + eqipSum);

    const unit = {...unitData};
    unit.sum = sum;
    setUnitSum(sum);
    dispatch(setSolderUnit({unit, unitId}));
  }, [unitData]);

  const checkSolder = (e) => {
    setId(e.target.value);
    setLevelId(0);
  };

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
      <div className="solder__header">
        <div>
          <select onChange={checkSolder} name="" id="" className="">
            {solData.map((data) => (
              <option key={data.id} value={data.id}>{data.name}</option>
            ))}
          </select>
          <label htmlFor=""></label>
          <button disabled={!enabled} onClick={() => {setQuantity(quantity - 1)}}>-</button>
          {quantity}
          <button onClick={() => {setQuantity(quantity + 1)}}>+</button>
          <button onClick={remove}>remove</button>
        </div>
        <div>
          Unit cost: {unitSum}
        </div>
      </div>
      <Attributes levelId={levelId} setEquipment={setEquipment} handleChange={changeLevel} dataAtt={solData[id]}/>
    </div>
  );
};

export default Solder;
