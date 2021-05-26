import React, {useState} from 'react';
import './Attributes.css'


const Attributes = () => {
  const Riba = [
    {
      Experience: 'Irregular',
      Movement: '6',
      Attack: '6',
      Defence: '7',
      Morale: '4',
      Actions: '3',
      Points: '40',
    },
    {
      Experience: 'Regular',
      Movement: '6',
      Attack: '5',
      Defence: '7',
      Morale: '3',
      Actions: '3',
      Points: '44',
    },{
      Experience: 'Veteran',
      Movement: '6',
      Attack: '4',
      Defence: '7',
      Morale: '2',
      Actions: '3',
      Points: '47',
    }
  ];
  const [position, setPosition] = useState(0);
  return (
    <div className="att__root">
      <div>
        <div className="att__headCell">Experience</div>
        <div className="att__cell">
          <select onChange={(e) => {setPosition(e.target.value)}} className="att__select" name="" id="">
            {Riba.map((item, index) => (
              <option key={item.Experience} value={index}>{item.Experience}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <div className="att__headCell">Movement</div>
        <div className="att__cell">
          {Riba[position].Movement}
        </div>
      </div>
      <div>
        <div className="att__headCell">Attack</div>
        <div className="att__cell">
          {Riba[position].Attack}+
        </div>
      </div>
      <div>
        <div className="att__headCell">Defence</div>
        <div className="att__cell">
          {Riba[position].Defence}+
        </div>
      </div>
      <div>
        <div className="att__headCell">Morale</div>
        <div className="att__cell">
          {Riba[position].Morale}+
        </div>
      </div>
      <div>
        <div className="att__headCell">Actions</div>
        <div className="att__cell">
          {Riba[position].Actions}
        </div>
      </div>
      <div>
        <div className="att__headCell">Points</div>
        <div className="att__cell">
          {Riba[position].Points}
        </div>
      </div>
    </div>
  );
};

export default Attributes;
