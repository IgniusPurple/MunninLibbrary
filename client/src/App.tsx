import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import CreateAccount from './pages/CreateAccount/create'
import ForgetPassword from './pages/ForgetPassword/forgetPassword';
import Home from './pages/homePage/home'
import MyAccount from './pages/MyAccount/myAccount'
import ContinueReading from './pages/ContinueReading';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path='/forgetPassword'element={<ForgetPassword/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/myAccount' element={<MyAccount/>}/>
        <Route path='/ContinueReading' element={<ContinueReading/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
};

export default App;
