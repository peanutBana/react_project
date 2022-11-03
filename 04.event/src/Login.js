import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>로그인</h1>
        <input type="text" name="id" placeholder="아이디를 입력하세요"></input>
        <br />
        <input
          type="password"
          name="pwd"
          placeholder="비밀번호를 입력하세요"
        ></input>
        <br />
        <button>로그인</button>
      </div>
    );
  }
}

export default Login;
