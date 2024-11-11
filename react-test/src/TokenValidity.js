import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const TokenValidity = async (navigate) => {
  const token = Cookies.get('token');
  console.log(token)
  try {
    const response = await axios.post('http://localhost:3001/login/verify', { token });
    if (response.status === 200) {
      console.log('토큰이 유효함');
      console.log(response)
      return true
    }
  } catch (error) {
    console.error('토큰 검증 실패:', error);
    return false;
  }
};

export default TokenValidity;