import React from 'react';
import styled from 'styled-components';
import bgAuth from '../../assets/images/bg-auth-2.jpg';

const AuthContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-image: linear-gradient(to bottom, #00000077, #00000077),
    url(${bgAuth});
  background-repeat: no-repeat;
  background-position: center;
`;

const FormContainer = styled.div`
  width: 40vw;
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
