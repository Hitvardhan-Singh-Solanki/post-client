import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthPage from './Pages/hocs/AuthPage';
import Maindoc from './Pages/Maindoc';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Navbar from './Components/Navbar';
import axios from 'axios';
import Home from './Pages/Home';
import FormContainer from './Pages/hocs/FormContainer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/auth/check-token')
      .then(res => {
        if (res.status === 200) setIsAuthenticated(true);
        else setIsAuthenticated(false);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <AuthPage>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <FormContainer>
              <LoginForm
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
              />
            </FormContainer>
          </Route>
          <Route path="/sign-up">
            <FormContainer>
              <SignupForm />
            </FormContainer>
          </Route>
          <Route path="/doc">
            <Maindoc isAuthenticated={isAuthenticated} />
          </Route>
        </Switch>
      </AuthPage>
    </Router>
  );
}

export default App;
