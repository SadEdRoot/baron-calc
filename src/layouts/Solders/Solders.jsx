import React, { useState } from 'react';
import Solder from "../../components/Solder";
import {useDispatch, useSelector} from "react-redux";
import {setSolder, removeSolderId} from "../../store/soldersArr";

const Solders = () => {
  const [solder, setSolders] = useState([])
  const [counter, setCounter] = useState(0)

  const startSolder = useSelector((state) => state.solders)
  const dispatch = useDispatch();


  const onRemove = (id) => {
    setSolders(solder.filter((el) => el.id !== id));
    dispatch(removeSolderId(id));
  }

  const addSolder = function () {
    dispatch(setSolder({id: counter}))
    setSolders([...solder, {id: counter}]);
    setCounter(counter + 1);
    console.log(startSolder)
  }

  return (
    <div className="solder__root">
      <div className="commander__header">Solders</div>
      {solder.map(({id}, index) => (
        <Solder
          key={id} remove={() => onRemove(id)}
        />
      ))}
      <button onClick={addSolder}>add solders group </button>
    </div>
  );
};

export default Solders;
