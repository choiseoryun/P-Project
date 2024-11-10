import React from 'react';
function Login() {
    return (
      <div>
        <form id="post-form" method="post" action="http://localhost:3001/login">
        <input autocomplete="off" type="text" name="id"/>
        <input autocomplete="off" type="text" name="password"/>
        <input type="submit"/>
      </form>
      </div>
    );
  }
export default Login;