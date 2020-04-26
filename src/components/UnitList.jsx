import React from 'react';
import './UnitList.scss'

const UnitList = ({ title, units, button }) => {
  const unitList = units.map((unit) =>
    <li key={unit.id}>
      <div>
        <p>{unit.problemType}</p>
        <p className='unitName'>{unit.unitName}</p>
        <button onClick={() => button[0].action(unit.id)}>{button[0].name}</button>
        <button onClick={() => button[1].action(unit.id)}>{button[1].name}</button>
      </div>

      <img src={unit.problemURL}/>
    </li>
  )

  return (
    <ul>
      <h1>{title}</h1>
      {unitList}
    </ul>
  )
}

export default UnitList;
