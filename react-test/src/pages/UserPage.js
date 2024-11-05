import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserPage() {
  const [users, setUsers] = useState([]); // 초기 상태를 빈 배열로 설정

  useEffect(() => {
    axios.get('http://localhost:3001/user')
      .then(response => {
        setUsers(response.data); // 여러 사용자 데이터를 설정
      })
      .catch(error => {
        console.error("서버 요청 중 오류 발생:", error);
      });
  }, []);

  return (
    <div>
      <h2>유저 정보</h2>
      <pre>
        {Object.keys(users).map((key, index) => (
          <div>
            name: {users[key].name} <br />
            email: {users[key].email}
            <form action={`/user/${users[key].user_num}?_method=DELETE`} method="POST" style={{ display: 'inline' }}>
              <input type="submit" className="btn delete" title="삭제" value="X" />
            </form>
          </div>
        ))}
      </pre>
    </div>
  );

}

export default UserPage;