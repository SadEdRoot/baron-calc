import React, { useState } from 'react';
import Solder from "../../components/Solder";
import {useDispatch, useSelector} from "react-redux";
import {setSolder, removeSolderId} from "../../store/soldersArr";

const Solders = () => {
  const [counter, setCounter] = useState(0)

  const startSolder = useSelector((state) => state.solders)
  const dispatch = useDispatch();


  const onRemove = (id) => {
    dispatch(removeSolderId(id));
  }

  const addSolder = async function () {
    await dispatch(setSolder({id: counter}))
    await setCounter(counter + 1);
  }

  return (
    <div className="solder__root">
      <div className="commander__header">Solders</div>
      {startSolder.map(({id}, index) => (
        <Solder
          key={id} unitId={id} remove={() => onRemove(id)}
        />
      ))}
      <button className="soldersButton" onClick={addSolder}>add solders group </button>
    </div>
  );
};

export default Solders;
