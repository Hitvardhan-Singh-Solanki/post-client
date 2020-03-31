import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import socketIOClient from 'socket.io-client';
import Error from '../Components/Error';
import AvatarList from '../Components/AvatarList';

const MaindocContaienr = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ({ isAuthenticated, currentLoggerInUser }) => {
  const ENDPOINT = 'http://localhost:8080';
  const socket = socketIOClient(ENDPOINT);

  const [newUser, setNewUser] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      socket.emit('join', { ...currentLoggerInUser });
      socket.on('joined', data => {
        alert(data.text);
      });
      return () => {
        socket.emit('disconnect');
      };
    }
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('USER_JOINED', user => {
      setNewUser(user);
    });
    socket.on('ROOM_DATA', ({ users }) => {
      console.log(users);
      setUsers(users);
    });
    socket.on('USER_LEFT', data => {
      console.log('-->', data);
    });
    return () => {
      socket.emit('disconnect', { data: 'test' });
    };
  }, []);

  return isAuthenticated ? (
    <MaindocContaienr>
      {newUser.email}
      <AvatarList users={users} />
    </MaindocContaienr>
  ) : (
    <Error message={'Oops... are you lost?'} />
  );
};
