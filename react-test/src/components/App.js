import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home';
import UserPage from '../pages/UserPage';
import AddUserPage from '../pages/AddUserPage';
import Login from '../pages/Login';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">홈</Link>
          <Link to="/user">유저 정보</Link>
          <Link to="/user/add">유저 추가</Link>
          <Link to="/login">로그인</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/add" element={<AddUserPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;