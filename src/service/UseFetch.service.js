import { useEffect } from "react";

const UseFetch = (callback, url) => {
  const fetchInitialData = async () => {
    const response = await fetch(url);
    const { data } = await response.json();
    callback(data);
  }

  useEffect(() => {
    fetchInitialData();
  }, [])
}

export default UseFetch;
