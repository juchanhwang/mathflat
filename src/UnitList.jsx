import React from 'react';

const UnitList = ({ units }) => {

  const unitList = units.map((unit) => <li key={unit.id}>{unit.unitName}</li>)

  return (
    <ul>
      {unitList}
    </ul>
  )
}

export default UnitList;
