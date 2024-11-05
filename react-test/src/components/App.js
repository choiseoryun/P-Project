import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home';
import UserPage from '../pages/UserPage';
import AddUserPage from '../pages/AddUserPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">홈</Link>
          <Link to="/user">유저 정보</Link>
          <Link to="/user/add">유저 추가</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/add" element={<AddUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;