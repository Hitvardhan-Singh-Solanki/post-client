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
  useEffect(() => {
    if (isAuthenticated) {
      socket.emit('join', { ...currentLoggerInUser });
      socket.on('joined', data => console.log('JOINED DATA >', data));
      return () => {
        socket.emit('disconnect');
      };
    }
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('USER_JOINED', message => {
      console.log('-->', message);
    });
  }, []);

  return isAuthenticated ? (
    <MaindocContaienr>
      <AvatarList users={[{ ...currentLoggerInUser }]} />
    </MaindocContaienr>
  ) : (
    <Error message={'Oops... are you lost?'} />
  );
};
