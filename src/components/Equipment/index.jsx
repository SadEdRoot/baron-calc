import React from 'react';
import './Equipment.css'

const Equipment = ({data}) => {
  console.log(data)
  return (
    <div>
      <div className="equip__header">Equipment</div>
        <div className="equip__table">
          <div className="table__header">Name</div>
          <div className="table__header">Cost per warrior</div>
          <div className="table__header">Modifier</div>
          <div className="table__header">Effect</div>
          <div className="table__header">Required experience</div>
        </div>
        <div className="equip__table">
          <div>Crossbow</div>
          <div>Equipped</div>
          <div> +1 long range</div>
          <div>20" long range / 10" short range. Can move up 3" and shoot</div>
          <div>All</div>
        </div>
    </div>
  );
};

export default Equipment;
