import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import Error from './Error';

const StyledButton = styled(Button)`
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 20px !important;
  color: #fff !important;
`;

const SignupForm = ({ history }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');

  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const setValues = async () => {
    if (password !== cnfPassword) {
      setErrorMsg(`Password do not match`);
      setTimeout(() => {
        setShowError(false);
        setErrorMsg('');
      }, 2500);
      return setShowError(true);
    }

    try {
      const { status } = await axios.post(
        'http://localhost:8080/api/auth/signup',
        {
          email,
          password
        }
      );
      if (status === 200) {
        history.push('/login');
      }
    } catch (e) {
      setShowError(true);
      setErrorMsg(`${e.message}: please try again.`);
      setTimeout(() => {
        setShowError(false);
        setErrorMsg('');
      }, 2500);
    }
  };

  const handleEmailInputChange = e => {
    setemail(e.target.value);
  };
  const handlePasswordInputChange = e => {
    setPassword(e.target.value);
  };
  const handleCnfPasswordInputChange = e => {
    setCnfPassword(e.target.value);
  };
  return showError ? (
    <Error message={errorMsg} />
  ) : (
    <Form onSubmit={setValues}>
      <Form.Field>
        <StyledLabel htmlFor="email">Email Address</StyledLabel>
        <input
          placeholder=""
          value={email}
          id="email"
          onChange={handleEmailInputChange}
        />
      </Form.Field>
      <Form.Field>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <input
          placeholder=""
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordInputChange}
        />
      </Form.Field>
      <Form.Field>
        <StyledLabel htmlFor="confirm-password">Confirm Password</StyledLabel>
        <input
          placeholder=""
          id="confirm-password"
          type="password"
          value={cnfPassword}
          onChange={handleCnfPasswordInputChange}
        />
      </Form.Field>
      <StyledButton
        type="submit"
        primary
        disabled={
          password.length < 3 ||
          email.length < 3 ||
          cnfPassword.length !== password.length
        }
      >
        Submit
      </StyledButton>
    </Form>
  );
};

export default withRouter(SignupForm);
