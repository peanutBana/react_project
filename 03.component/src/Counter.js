import React, { Component } from 'react';

class Counter extends Component {
    constructor (props) {
        super(props)    //super는 component의 생성자 함수를 호출한다
        //state 초기화(number가 0)
        this.state = {  //this는 
            number: 0,
            fixedNumber: 0
        }

    }
    render() {
      const { number , fixedNumber } = this.state

      return (
        <div>
          <h1>{number}</h1>
          <h2>{fixedNumber}</h2>
          <button onClick={() => {
            this.setState((prevState){
                number: number + 1
            }), ()=>{
                console.log('방금 state가 호출되었습니다.');
                console.log(this.state);
            }

            // this.setState((prevState) => {
            //     return {number : number + 1}
            // })

          }}>+1</button>
          <button onClick={() => {
            this.setState({ number: number -1})
          }}>-1</button>
        </div>
      );
    }
}

export default Counter;