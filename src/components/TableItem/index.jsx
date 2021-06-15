import React, {useEffect, useState} from 'react';

/*
* data: Array ['name', Array]
 */

const TableItem = ({data, onChange}) => {
  const name = data[0];
  const itemOptions = data[1];
  const [position, setPosition] = useState(0);


  useEffect(() => {
    onChange(name, position);
  }, [position])

  if (!itemOptions[position]) {
    if (position !== 0) {
      setPosition(0);
    }
    return <></>
  };

  return (
    <div className="equip__table">
      <span className="att__cell">{name}</span>
      <div className="att__cell">
        <select value={position} onChange={(e) => setPosition(e.target.value)} className="att__select" name="" id="">
          {itemOptions.map((item, index) => (
            <option key={index} value={index}>{item.name}</option>
          ))}
        </select>
      </div>
      <div  className="att__cell">{itemOptions[position].points}</div>
      <div  className="att__cell">{itemOptions[position].attModifier ? itemOptions[position].attModifier + " Attack" : itemOptions[position].defModifier}</div>
      <div  className="att__cell">{itemOptions[position].effect}</div>
    </div>
  );
};

export default TableItem;
