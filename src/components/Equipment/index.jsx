import React, {useEffect, useState} from 'react';
import './Equipment.css'
import TableItem from "../TableItem";
import {useDispatch} from "react-redux";
import {setSolderData} from "../../store/soldersArr";

const Equipment = ({unitId, data}) => {
  const [state, setState] = useState( Object.entries(data).reduce((acc, item) => {
     acc[item[0]]= item[1][0];
     return acc;},{}))
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    setState( Object.entries(data).reduce((acc, item) => {
      acc[item[0]]= item[1][0];
      return acc;},{}))
  }, [unitId]);

  const onChange = async (data) => {
    console.log("#### Передали данные:", data)
    const curState = {...state, ...data};
    console.log("#### Получили стейт:", curState)
    await setState(curState);

    await dispatch(setSolderData({data, unitId}))
  }

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
        Object.entries(data).map((item, index) => (
          <TableItem key={index} data={item} onChange={onChange}/>
        ))
      }
    </div>
  );
};

export default Equipment;
