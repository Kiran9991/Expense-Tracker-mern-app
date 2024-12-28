import React, { useContext, useEffect, useState } from 'react';
import fetchApi from './fetchApi';
import { token } from '../App';
import { expenseContext } from '../store/expense-context';

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
          throw new Error(json.message);}
        setData(json);
      } catch(error) {
        setError(error);
      }
    }
    getDataApi(url, method);
    setLoading(false);
  }, [token, url, method])

  return { data, loading, error, fetchApi }
}
