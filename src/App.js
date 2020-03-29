import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthPage from './Pages/hocs/AuthPage';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Navbar from './Components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {}, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
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
        </Switch>
      </AuthPage>
    </Router>
  );
}

export default App;
