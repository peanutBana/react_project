//import logo from './logo.svg';
import './App.css';

function App() {
  const name2 = '리액트'
  const name3 = undefined
  const name4 = '리액트'
  const style = {backgroundColor: 'red', color: 'black', fontSize:'48px', display: 'inline-flex'}
  return (
    // 1. 반드시 부모요소로 감싸야 한다.(태그나 fragment 이용)
    // <div>
    //   <h1>리액트</h1>
    //   <h2>리액트안녕</h2>
    // </div>

    //2. {} 중괄호를 이용시 자바스크립트 표현식을 쓸 수 있다.
    // <>
    //   <h1>{name}리액ㅌ,</h1>
    //   <h2>ㄴㄴ</h2>
    // </>
    // <>
    //   {name === '리액트' ? <h1>리액트 입니다.</h1> : <h2>아닙니다.</h2>}
    // </>

    //3. && || 연산
    //<div>{name3 || '리액트'}</div>

    //4. style 지정
    // <div style={style}>{name4}</div>

    //5. css 적용
    //<div className='react'>{name4}</div>

    // 6. input 태그
    // <>
    //   <div className='react'>{name4}</div>
    //   <input/>
    // </>

    //리액트 주석
    <>
      {/* <div className='react'>{name4}</div> */}
    </>

  );
}

export default App;
