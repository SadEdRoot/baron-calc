import React, {useState} from 'react';

/*
* data: Array ['name', Array]
 */

const TableItem = ({data}) => {
  const itemOptions = data[1];

  const [position, setPosition] = useState(0);

  if (!itemOptions[position]) {
    if (position !== 0) {
      setPosition(0);
    }
    return <></>
  };
  return (
    <div className="equip__table">
      <span className="att__cell">{data[0]}</span>
      <div className="att__cell">
        <select onChange={(e) => {setPosition(e.target.value)}} className="att__select" name="" id="">
          {itemOptions.map((item, index) => (
            <option key={index} value={index}>{item.name}</option>
          ))}
        </select>
      </div>
      <div  className="att__cell">{itemOptions[position].points}</div>
      <div  className="att__cell">{itemOptions[position]["atk-modifier"]}</div>
      <div  className="att__cell">{itemOptions[position].effect}</div>
    </div>
  );
};

export default TableItem;
