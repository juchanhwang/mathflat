import React, { useEffect, useState } from 'react';
import './App.css';
import UnitList from "./UnitList";
import UseFetch from "./service/UseFetch.service";

const App = () => {
  const [problemUnits, setProblemUnits] = useState([]);
  const [similarUnits, setSimilarUnits] = useState([]);

  const getProblemUnits = UseFetch(setProblemUnits, 'http://localhost:5000/fe-problem')
  const getSimilarUnits = UseFetch(setSimilarUnits, 'http://localhost:5000/fe-similars')

  return (
    <>
      <UnitList units={problemUnits}/>
    </>
  );
}

export default App;
