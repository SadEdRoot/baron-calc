import React, {useState} from 'react';
import './Equipment.css'
import TableItem from "../TableItem";

const Equipment = ({setEquipment, data, levelId}) => {
  return (
    <div>
      <div className="equip__header">Equipment</div>
        <div className="equip__table">
          <div className="table__header">Type</div>
          <div className="table__header">Name</div>
          <div className="table__header">Cost per warrior</div>
          <div className="table__header">Modifier</div>
          <div className="table__header">Effect</div>
        </div>
      {
        Object.entries(data).map((item) => (
          <TableItem key={[item, levelId]} data={item} onChange={setEquipment}/>
        ))
      }
    </div>
  );
};

export default Equipment;
