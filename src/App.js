import React, { useEffect, useState } from 'react';
import './App.scss';
import UnitList from "./components/UnitList";
import { getProblemUnits, getSimilarUnits } from "./service/UseFetch.service";

const App = () => {
  const [problemUnits, setProblemUnits] = useState([]);
  const [similarUnits, setSimilarUnits] = useState([]);

  useEffect(() => {
    setInitialData();
  }, [])

  const setInitialData = () => {
    getProblemUnits().then(({ data }) => setProblemUnits(data));
    getSimilarUnits().then(({ data }) => setSimilarUnits(data));
  }

  const deleteUnit = (unitId) => {
    setProblemUnits([...problemUnits].filter(_unit => _unit.id !== unitId));
  }

  const problemButton = [
    { name: '유사문항', action: (unitId) => console.log },
    { name: '삭제', action: (unitId) => deleteUnit(unitId) }
  ]

  const similarButton = [
    { name: '추가', action: (unitId) => console.log },
    { name: '교체', action: (unitId) => console.log }
  ]

  return (
    <div className='app'>
      <UnitList
        title={"학습지 상세 편집"}
        units={problemUnits}
        button={problemButton}
      />
      <UnitList
        title={"학습지 상세 편집"}
        units={similarUnits}
        button={similarButton}
      />
    </div>
  );
}

export default App;
