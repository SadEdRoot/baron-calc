import React, {useEffect, useState} from 'react';
import './Attributes.css'
import Equipment from "../Equipment";
import Abilities from "../Abilities";
import {useDispatch} from "react-redux";
import {setSolderUnit} from "../../store/soldersArr";

const Attributes = ({unitId, dataAtt, quantity = 1}) => {
  const unitsData = dataAtt.units;
  const dispatch = useDispatch();

  const [position, setPosition] = useState(0);

  useEffect(()=> {
    if (unitsData[position]) {
      const unit = {
        name: dataAtt.name,
        quantity: quantity,
        sumWeapon: 0,
        sumAbilities: 0,
        sum: unitsData[position].stats.points * quantity,
        data: unitsData[position],
      }
      dispatch(setSolderUnit({unit, unitId}));
    }
    }, [dataAtt, quantity, position]
  )

  if (!unitsData[position]) {
    if (position !== 0) {
      setPosition(0);
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
          <select onChange={(e) => {setPosition(e.target.value)}} className="att__select" name="" id="">
            {unitsData.map((item, index) => (
              <option key={index} value={index}>{item.experience}</option>
            ))}
          </select>
        </div>
        <div className="att__cell">
          {unitsData[position].stats.movement}
        </div>
        <div className="att__cell">
          {unitsData[position].stats.attack}+
        </div>
        <div className="att__cell">
          {unitsData[position].stats.defence}+
        </div>
        <div className="att__cell">
          {unitsData[position].stats.morale}+
        </div>
        <div className="att__cell">
          {unitsData[position].stats.action}
        </div>
        <div className="att__cell">
          {unitsData[position].stats.points}
        </div>
      </div>
      <Equipment unitId={unitId} data={unitsData[position].equipment} />
      <Abilities data={unitsData[position].abilities}/>
    </div>

  );
};

export default Attributes;
