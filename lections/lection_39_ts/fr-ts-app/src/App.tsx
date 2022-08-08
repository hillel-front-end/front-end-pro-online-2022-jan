import React, { useCallback } from 'react';
import { Link, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import AboutContainer from './components/AboutContainer';
import Button, { ButtonProps } from './components/Button';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import Table from './components/Table';
import UserData from './components/UserData';
import routes from './routes';

/*
    React Router
  * Init
  * Links, redirection from the code
  * URL Params
  * Search params
  * Nested routes
  * Application - easy login/logout with nodejs
*/

function App() {
  const navigate = useNavigate();

  const buttonConfigs: ButtonProps = {
    title: 'Title',
  };

  const onClick = useCallback(() => {
    navigate('/about?example=qrqwr');
  }, []);


  return (
    <div className="App">
      {/* <Button {...buttonConfigs} />
      <Table title="table test"/>
      <hr />
      <Link to={routes.HOME}>Home</Link>
      <br />
      <Link to={routes.ABOUT}>About</Link>
      <hr />
      <button onClick={onClick}>Action</button>
      <hr />
      <Routes>
        <Route path={routes.HOME} element={<>Component Root</>} />
        <Route path={'/about'} element={<AboutContainer />}>
          <Route path={'all'} element={<>All copy</>}></Route>
        </Route>
        <Route path={'/about/:userId'} element={<UserData />}></Route>
      </Routes> */}
 
      <Routes>
        <Route path="/home" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to={'/home'} replace />}/>
        <Route path="*" element={<>404 <Link to="/login">Go to Login</Link></>}/>
      </Routes>


    </div>
  );
}

export default App;
