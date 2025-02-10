import React, { useContext, useEffect } from 'react'
import { notify, UserContext } from '../auth'
import { useLocation } from 'react-router-dom';
import useFetch from '../../hook/useFetch';
import { LocalHost } from '../..';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';

export default function ChatSideBar() {
    const { users, setUsers } = useContext(UserContext);
    const location = useLocation();
    const pathname = location.pathname;
    const { data, error } = useFetch(`${LocalHost}/user/users-list`, 'GET', pathname);

    useEffect(() => {
        error && notify(error, 'error', 1000)
        data && setUsers(data.users);
        data && notify(data.message, 'success', 1000)
    }, [ data, error]);

  return (
    <Container
     className='bg-slate-600 mr-0 w-72 p-2
     rounded-md
     '  >
      <Row>
        <Col> 
        <div className='bg-slate-300
        p-1 my-1 font-semibold text-center
        '>Users</div>
         </Col>
      </Row>
      <ListGroup as='ol' numbered >
        {users.map((item) => 
          <ListGroup.Item as='li' key={Math.random()}
           className='cursor-default
           hover:bg-slate-100 hover:drop-shadow-2xl
           ' >
            {item.username}
          </ListGroup.Item>
        )}
      </ListGroup>
    </Container>
  )
}
