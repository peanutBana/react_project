import React, { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  // username 의 state 값을 바꾼다
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  // message 의 state 값을 바꾼다
  const onChangeMessage = (e) => {
    setState(e.target.value);
  };

  const onClick = (e) => {
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="입력하세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      ></input>
      <input
        type="text"
        name="username"
        placeholder="입력하세요"
        value={username}
        onChange={onChangeUsername}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
