import React from 'react';
import styled from 'styled-components';

const AuthContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-color: #212121;
  color: white;
  background-repeat: no-repeat;
  background-position: center;
`;

const FormContainer = styled.div`
  min-width: 40vw;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const AuthPage = props => {
  return (
    <AuthContainer>
      <FormContainer>{props.children}</FormContainer>
    </AuthContainer>
  );
};

export default AuthPage;
