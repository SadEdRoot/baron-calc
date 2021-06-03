import React from 'react';

const Settings = () => {
  const value = 500;
  const cur_points = value - 22;
  return (
    <div className="commander__root">
      <div className="commander__header">Retinue settings</div>
      <div style={{"display": "flex"}}>
          <label htmlFor="ret_name">Retinue name: </label>
          <input id="ret_name" type="text" placeholder="Get name for you Retinue"/>
          <label htmlFor="ret_points">Points: </label>
          <input type="text" value={value}/>
          Points remain: {cur_points}
        </div>
    </div>
  );
};

export default Settings;
