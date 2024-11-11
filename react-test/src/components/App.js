import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../pages/Home';
import UserPage from '../pages/UserPage';
import AddUserPage from '../pages/AddUserPage';
import Login from '../pages/Login';
import TokenValidity from '../TokenValidity'; 
import UpdateUserPage from '../pages/updateUserPage';
import Payment from '../pages/Payment';

function App() {
  const [token, setToken] = useState(null); 
  useEffect(() => {
    const checkToken = async () => {
      const token = await TokenValidity(); 
      if (!token) {
        setToken(null);
      } else {
        setToken(token); 
      }
    };
    checkToken();
  }, []);

  return (
    <Router>
      <div>
        {/* 토큰이 있을 경우에만 네비게이션 메뉴를 보여줌 */}
        {token && (
          <nav>
            <Link to="/">홈 </Link>
            <Link to="/user">유저 정보 </Link>
            <Link to="/user/add">유저 추가 </Link>
            <Link to="/payment">결제하기 </Link>
            <a href="/login/logout">로그아웃 </a>
          </nav>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/add" element={<AddUserPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:id" element={<UpdateUserPage />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
