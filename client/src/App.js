import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './LoginPages/Login';
import Register from './LoginPages/Register';
import Home from './Home/HomePageTest'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
