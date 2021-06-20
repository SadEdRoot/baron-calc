import React from 'react';
import Commander from "../../components/Commander";

const Commanders = () => {
  return (
    <div>
      <div className="commander__header">
        commander
      </div>
      <Commander />
      <button  className="soldersButton" >add another commander?</button>
    </div>
  );
};

export default Commanders;
