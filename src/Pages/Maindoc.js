import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  color: #b93131eb;
  font-size: 60px;
`;

const MaindocContaienr = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  & div {
    display: flex;
    align-items: center;
    & h2 {
      display: inline-block;
      border: 2px solid #cacaca;
      padding: 10px;
      border-radius: 5px 0 0 5px;
      margin: 0;
    }
    & div {
      display: inline-block;
      padding: 10px;
    }
  }
`;

export default ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <MaindocContaienr>
      <div>
        <h2>Present</h2>
        <div>down</div>
      </div>
    </MaindocContaienr>
  ) : (
    <Error>Not authorized</Error>
  );
};
