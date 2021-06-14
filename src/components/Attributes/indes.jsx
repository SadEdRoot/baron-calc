import React, {useEffect, useState} from 'react';
import './Attributes.css'
import Equipment from "../Equipment";
import Abilities from "../Abilities";


const Attributes = ({levelId, setEquipment, handleChange, dataAtt}) => {
  const unitsData = dataAtt.units;

  if (!unitsData[levelId]) {
    if (levelId !== 0) {
      handleChange(0);
    }
    return <></>
  };

  return (
    <div>
      <div className="att__root">
        <div className="att__headCell">Experience</div>
        <div className="att__headCell">Movement</div>
        <div className="att__headCell">Attack</div>
        <div className="att__headCell">Defence</div>
        <div className="att__headCell">Morale</div>
        <div className="att__headCell">Actions</div>
        <div className="att__headCell">Points</div>
      </div>
      <div className="att__root">
        <div className="att__cell">
          <select onChange={(e) => handleChange(e.target.value)} className="att__select" name="" id="">
            {unitsData.map((item, index) => (
              <option key={index} value={index}>{item.experience}</option>
            ))}
          </select>
        </div>
        <div className="att__cell">
          {unitsData[levelId].stats.movement}
        </div>
        <div className="att__cell">
          {unitsData[levelId].stats.attack}+
        </div>
        <div className="att__cell">
          {unitsData[levelId].stats.defence}+
        </div>
        <div className="att__cell">
          {unitsData[levelId].stats.morale}+
        </div>
        <div className="att__cell">
          {unitsData[levelId].stats.action}
        </div>
        <div className="att__cell">
          {unitsData[levelId].stats.points}
        </div>
      </div>
      <Equipment setEquipment={setEquipment} data={unitsData[levelId].equipment} />
      <Abilities data={unitsData[levelId].abilities}/>
    </div>

  );
};

export default Attributes;
