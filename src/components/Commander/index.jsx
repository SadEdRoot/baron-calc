import React, {useEffect, useState} from 'react';
import Attributes from "../Attributes/indes";
import commanderData from "./commander.json"

import './Commander.css'
import {useDispatch} from "react-redux";


const Commander = () => {
  const comData = commanderData.commander;

  const unitId = 0;

  const [id, setId] = useState(0);
  const [levelId, setLevelId] = useState(0);
  const dispatch = useDispatch();
  const [unitData, setUnitData] = useState({
    id: comData[id].id,
    name: comData[id].name,
    experience: comData[id].units[levelId].experience,
    stats: comData[id].units[levelId].stats,
    equipment: Object.entries(comData[id].units[levelId].equipment).reduce((acc, item,) => {
      const name = item[0];
      acc[name] = item[1][0];
      return acc;
    }, {}),
    abilities: comData[id].units[levelId].abilities,
  });

  const checkSolder = (e) => {
    setId(e.target.value);
    setLevelId(0);
  };

  useEffect(() => {
    const eqipSum = Object.values(unitData.equipment).reduce((acc, index) => {
      acc += index.points
      return acc
    }, 0)
    const sum = (comData[id].units[levelId].stats.points + eqipSum);

    const unit = {...unitData};
    unit.sum = sum;
    //dispatch(setCommanderUnit());
  }, [unitData])


  const changeLevel = (id) => {
    setLevelId(id);
  }

  return (
    <div className="commander__root">
      <div className="commander__header">
        commander
      </div>
      <div className="commander__wrap">
        <label htmlFor="comm_select">Choose your commander: </label>
        <select onChange={checkSolder} name="" id="" className="">
          {comData.map((data) => (
            <option key={data.id} value={data.id}>{data.name}</option>
          ))}
        </select>
      </div>
      <Attributes levelId={levelId} setEquipment={() => {}} handleChange={changeLevel} dataAtt={comData[id]}/>

      <button> add command group?</button>

    </div>
  );
};

export default Commander;
