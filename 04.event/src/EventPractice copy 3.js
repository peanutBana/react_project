import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: "",
  };

  //constructor 제거

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message + ":" + this.state.username);
    this.setState({
      message: "",
      username: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></input>
        <input
          type="text"
          name="username"
          placeholder="입력하세요"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
