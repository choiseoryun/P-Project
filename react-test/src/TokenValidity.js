import axios from 'axios';
import Cookies from 'js-cookie';

const TokenValidity = async () => {
    const token = Cookies.get('token');
    if (!token) {
        window.location.href = 'http://localhost:3001/login';
        return;
    }

    try {
        const response = await axios.post('http://localhost:3001/login/verify', { token });
        if (response.status === 200) {
            console.log('토큰이 유효함');
        }
    } catch (error) {
        console.error('토큰 검증 실패:', error);
        window.location.href = '/login'; 
    }
};

export default TokenValidity;