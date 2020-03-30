import React from 'react';
import styled from 'styled-components';
import Error from '../Components/Error';

const MaindocContaienr = styled.div`
  height: 100%;
  width: 100%;
`;

export default ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <MaindocContaienr></MaindocContaienr>
  ) : (
    <Error message={'Not Authorized To view this page'} />
  );
};
