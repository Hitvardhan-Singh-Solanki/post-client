import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthPage from './Pages/hocs/AuthPage';
import Maindoc from './Pages/Maindoc';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Navbar from './Components/Navbar';
import axios from 'axios';

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
            <div>THIS IS HOME</div>
          </Route>
          <Route path="/login">
            <LoginForm
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            />
          </Route>
          <Route path="/sign-up">
            <SignupForm />
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
