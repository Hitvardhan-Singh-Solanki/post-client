import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

axios.defaults.withCredentials = 'include';

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 16px;
`;

const StyledLabel = styled.label`
  font-size: 20px !important;
  color: #fff !important;
`;

const LoginForm = ({ history, setIsAuthenticated, isAuthenticated }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const setValues = async () => {
    const response = await axios.post('http://localhost:8080/api/auth/login', {
      email,
      password
    });
    if (response.status === 200) {
      setIsAuthenticated(true);
      history.push('/doc');
    } else {
      alert('Login failed');
    }
  };

  const handleEmailInputChange = e => {
    setemail(e.target.value);
  };
  const handlePasswordInputChange = e => {
    setPassword(e.target.value);
  };
  return (
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
      <StyledButton
        type="submit"
        primary
        disabled={password.length < 3 || email.length < 3}
      >
        Submit
      </StyledButton>
    </Form>
  );
};

export default withRouter(LoginForm);
