import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MemberInfo from '../pages/Member';
import SignupRegular from '../pages/SignupRegular';
import Login from '../pages/Login';
import TestPage from '../pages/TestPage';


const Home = () => {



  return (
    <div>
      <Routes>
        <Route path="/member/:memberId" element={<MemberInfo />} />
        <Route path="/signup/regular" element={<SignupRegular />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
};

export default Home;