import React from 'react';
import './Abilities.css'

const Abilities = ({data}) => {
  return (
    <div>
      <div className="abil__header">Abilities</div>
      <div className="abil__text">
        {data.reduce((acc, item, index) => {
          if (data.length - 1 === index) {
            return acc + item;
          }
          return acc + item + ", ";
        }, "")}
      </div>
    </div>
  );
};

export default Abilities;
