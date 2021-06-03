import React, {useState} from 'react';
import './Attributes.css'
import Equipment from "../Equipment";
import Abilities from "../Abilities";


const Attributes = ({dataAtt}) => {
  const unitsData = dataAtt.units

  const [position, setPosition] = useState(0);

  if (!unitsData[position]) {
      setPosition(0);
      return <></>
  };

  return (
    <div>
      <div className="att__root">
        <div>
          <div className="att__headCell">Experience</div>
          <div className="att__cell">
            <select onChange={(e) => {setPosition(e.target.value)}} className="att__select" name="" id="">
              {unitsData.map((item, index) => (
                <option key={index} value={index}>{item.experience}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="att__headCell">Movement</div>
          <div className="att__cell">
            {unitsData[position].stats.movement}
          </div>
        </div>
        <div>
          <div className="att__headCell">Attack</div>
          <div className="att__cell">
            {unitsData[position].stats.attack}+
          </div>
        </div>
        <div>
          <div className="att__headCell">Defence</div>
          <div className="att__cell">
            {unitsData[position].stats.defence}+
          </div>
        </div>
        <div>
          <div className="att__headCell">Morale</div>
          <div className="att__cell">
            {unitsData[position].stats.morale}+
          </div>
        </div>
        <div>
          <div className="att__headCell">Actions</div>
          <div className="att__cell">
            {unitsData[position].stats.action}
          </div>
        </div>
        <div>
          <div className="att__headCell">Points</div>
          <div className="att__cell">
            {unitsData[position].stats.points}
          </div>
        </div>
      </div>
      <Equipment data={unitsData[position].equipment}/>
      <Abilities data={unitsData[position].abilities}/>
    </div>


  );
};

export default Attributes;
