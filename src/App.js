import React from 'react';
import {BrowserRouter as Router,Routes, Route, Switch} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Landing from './Components/Landing';
import SignUp from './Components/SignUp';
import Counselling from './Components/Counselling';
import AllCourses from './Components/AllCourses';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/counselling" element={<Counselling/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
