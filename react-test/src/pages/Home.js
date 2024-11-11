import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TokenValidity from '../TokenValidity';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTokenValid, setIsTokenValid] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const isValid = await TokenValidity();
      console.log(isValid)
      if (!isValid) {
        navigate("/login")
      }
      setIsTokenValid(isValid);
    };
    checkToken();
  }, [location, navigate]);

  return (
    <div>
      <h1>메인 페이지</h1>
      <p>안녕하세요, 메인 페이지에 오신 것을 환영합니다!</p>
    </div>
  );
}

export default Home;