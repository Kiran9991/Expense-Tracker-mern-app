import React, { useEffect, useState } from 'react';
import fetchApi from './fetchApi';
import { token } from '../App';

export default function useFetch(url, method) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!token) return;
     async function getDataApi(url, method) {
      setLoading(true);
      try{
        const response = await fetchApi(url, method);
        const json = await response.json();
        if(!response.ok) {
          // console.log('error')
          throw new Error(json.message);}
        setData(json);
      } catch(error) {
        console.log(error)
        // console.log(error.message);
        setError(error);
      }
    }
    getDataApi(url, method);
    setLoading(false);
  }, [token, url, method])

  return { data, loading, error, fetchApi }
}
