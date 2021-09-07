import React, {useState} from 'react';
import Commander from "../../components/Commander";
import {setSolder} from "../../store/soldersArr";
import {useDispatch, useSelector} from "react-redux";

const Commanders = () => {
  const [counter, setCounter] = useState(1)

  const startSolder = useSelector((state) => state.solders)
  const dispatch = useDispatch();

  const addCommander = async function () {
    await dispatch(setSolder({id: counter}))
    await setCounter(counter + 1);
  }

  return (
    <div>
      <div className="commander__header">
        commander
      </div>
      <Commander />
      <button  className="soldersButton" onClick={addCommander}>add another commander?</button>
    </div>
  );
};

export default Commanders;
