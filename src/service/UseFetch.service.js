const fetchData = (url) => {
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      throw err;
    })
}

export const getProblemUnits = () => {
  return fetchData('http://localhost:5000/fe-problem')
};

export const getSimilarUnits = () => {
  return fetchData('http://localhost:5000/fe-similars')
};
