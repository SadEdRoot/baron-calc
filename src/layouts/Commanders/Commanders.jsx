import React, {useState} from 'react';
import Commander from "../../components/Commander";
import {removeCommandId, setCommand} from "../../store/commanderSlice";
import {useDispatch, useSelector} from "react-redux";


const Commanders = () => {
  const [counter, setCounter] = useState(0)

  const startCommand = useSelector((state) => state.commanders)
  const dispatch = useDispatch();

  const onRemove = (id) => {
    dispatch(removeCommandId(id));
  }

  const addCommander = async function () {
    await dispatch(setCommand({id: counter}))
    await setCounter(counter + 1);
  }

  return (
    <div>
      <div className="commander__header">
        commander
      </div>
      {startCommand.map(({id}, index) => (
        <Commander
          key={id} unitId={id} remove={() => onRemove(id)}
        />
      ))}
      <button  className="soldersButton" onClick={addCommander}>add another commander?</button>
    </div>
  );
};

export default Commanders;
