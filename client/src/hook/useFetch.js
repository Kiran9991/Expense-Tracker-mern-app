import React, { useContext, useEffect, useState } from 'react';
import FetchApi from './FetchApi';
// import { token } from '../App';
import { expenseContext } from '../store/expense-context';
import { UserContext } from '../store/user-context';
import decodeToken from './decodeToken';

export default function useFetch(url, method) {
  const { token, } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if(!token) return;
     async function getDataApi(url, method) {
      setLoading(true);
      try{
        const response = await FetchApi(url, method, token);
        const json = await response.json();
        if(!response.ok) {
          throw new Error(json.message);}
        setData(json);
      } catch(error) {
        console.log(error.message)
        setError(error);
      }
    }
    getDataApi(url, method);
    setLoading(false);
  }, [token, url, method])

  return { data, loading, error, FetchApi }
}
