import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStartPoints} from "../../store/pointSlice";
import './settings.css'


const Settings = () => {
  const currentPoints = useSelector((state) => state.point.currentPoint);
  const startPoint = useSelector((state) => state.point.startPoint)

  const dispatch = useDispatch()

  return (
    <div className={"commander__root header_sticky"}>
      <div className="commander__header">Retinue settings</div>
      <div className="retinueSett">
        <div>
          <label htmlFor="ret_name">Retinue name: </label>
          <input id="ret_name" type="text" placeholder="Get name for you Retinue"/>
        </div>
        <div>
          <label htmlFor="ret_points">Points: </label>
          <input type="number" onChange={(e) =>{
            dispatch(setStartPoints(e.target.value))
          }} value={startPoint}/>
        </div>

        Points remain: {currentPoints}
      </div>
    </div>
  );
};

export default Settings;
