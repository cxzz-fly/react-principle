import React from './react';
import ReactDOM from './react-dom'

// let element = 
// <h1 name='xiaozhuo' 
//     style={{color:'red'}}
//     className='aaa'
//     onClick={()=>{
//         alert(1)
//     }}
// >
//     <span>111</span>
//     xiaozhuo.cheng</h1>

//组件 函数组件
function MyComponennt(props){
    console.log(props)
    return <h1> hello {props.value} {props.a}</h1>
}
// console.log(MyComponennt)

// ReactDOM.render(element,document.getElementById('root'))
ReactDOM.render(<MyComponennt value='123' a={1}></MyComponennt>,document.getElementById('root'))