import React, { useState } from 'react';
import Solder from "../../components/Solder";

const Solders = ({solders}) => {
  // eslint-disable-next-line no-undef
  const [solder, setSolders] = useState([])

  let counter = 0;

  const addSolder = function () {
    setSolders([...solder, {id: 1}]);
    console.log('####: добавили солдата')
    console.log(solder)
  }
  return (
    <div className="solder__root">
      <div className="commander__header">Solders</div>
      {solder.map(({id}) => (
        <Solder
          key={id}
        />
      ))}
      <button onClick={addSolder}>add solders group </button>
    </div>
  );
};

export default Solders;
