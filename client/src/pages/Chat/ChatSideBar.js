import React, { useContext, useEffect } from 'react'
import { notify, UserContext } from '../auth'
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hook/useFetch';
import { LocalHost } from '../..';

export default function ChatSideBar() {
    const { users, setUsers } = useContext(UserContext);
    const location = useLocation();
    const pathname = location.pathname;
    const { data, error } = useFetch(`${LocalHost}/user/users-list`, 'GET', pathname);

    useEffect(() => {
        // async function getUsersList(url) {
        //     try {
        //         const res = await fetch(url);
                
        //         if(!res.ok) {
        //             throw new Error(`couldn't received the data`);
        //         }
        //         const data = await res.json();

        //         if(data) {
        //             notify(data.message, 'success', 1000)
        //         }
        //         setUsers(data.users);
        //     } catch(error) {
        //         console.log(error)
        //     }
        // }
        // getUsersList(`${LocalHost}/user/users-list`);
        console.log(data)
        // error && notify(error, 'error', 1000)
        data && setUsers(data.users);
        // data && notify(data.message, 'success', 1000)
    }, [ data, error]);

  return (
    <div className='
     bg-gray-200
      w-[300px]  
      p-3
      '>
      <div className='bg-gray-300
      mb-2
      p-1
      '>Users</div>
      <div className='bg-gray-100
      
      '>
        
        
        {users.map((item) => 
            <div
        className='
        p-1 bg-slate-50 mb-1 cursor-default
        hover:shadow-lg'
        key={Math.random()} >{item.username}</div>
         )}
        
      </div>
    </div>
  )
}
