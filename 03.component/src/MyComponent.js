import propTypes from 'prop-types' 

class MyComponent extends Component {
    render () {
        const {name, forNumber, children } = this.props
        return (
          <>
            <div>안녕 {name}새로운 컴포넌트 입니다.</div> <br />
            칠드런 값은 {children} 입니다. // 좋아하는 숫자는 {forNumber}{" "}
            입니다. //{" "}
          </>
        );
    }
}

MyComponent.defaultProps = {
    name: propTypes.string,
    forNumber: propTypes.number.isRequired
}



// const MyComponent = (props) => {    //함수값에  props를 넣어준다

//     const { name, children } = props    //props는 name과 children에 포함된다
//     return (
//     <>
//        <div>안녕 {name}새로운 컴포넌트 입니다.</div> <br />
//         칠드런 값은 {children} 입니다.
//         좋아하는 숫자는 {forNumber} 입니다.
//        </>
//     )
// }    

// // MyComponent.defaultProps = {
// //     name: '기본이름'
// // }

// MyComponent.propTypes = {
//     name: propTypes.string  //propTypes는 boolean 역할이다
//     forNumber: propTypes.number.isRequired
// }

// export default MyComponent  //export를 해줘야 mycomponent를 내보낼 수 있다.

