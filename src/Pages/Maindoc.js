import React from 'react';
import styled from 'styled-components';
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
  return isAuthenticated ? (
    <MaindocContaienr>
      <AvatarList users={[{ ...currentLoggerInUser }]} />
    </MaindocContaienr>
  ) : (
    <Error message={'Oops... are you lost?'} />
  );
};
