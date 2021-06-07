import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStartPoints} from "../../store/pointSlice";


const Settings = () => {
  const currentPoints = useSelector((state) => state.point.currentPoint);
  const startPoint = useSelector((state) => state.point.startPoint)

  const dispatch = useDispatch()


  return (
    <div className="commander__root">
      <div className="commander__header">Retinue settings</div>
      <div style={{"display": "flex"}}>
          <label htmlFor="ret_name">Retinue name: </label>
          <input id="ret_name" type="text" placeholder="Get name for you Retinue"/>
          <label htmlFor="ret_points">Points: </label>
          <input type="number" onChange={(e) =>{
            dispatch(setStartPoints(e.target.value))
            //* TODO: проверка на изменение стейта после изменения калькуляции не должно допускаться перезаписи.*/
          }} value={startPoint}/>
          Points remain: {currentPoints}
        </div>
    </div>
  );
};

export default Settings;
