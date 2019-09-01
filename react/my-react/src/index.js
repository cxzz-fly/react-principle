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
// function MyComponennt(props){
//     console.log(props)
//     return <h1> hello {props.value} {props.a}</h1>
// }

//  class 组件
class MyComponennt extends React.Component{
    constructor(props){
        super()
        // this.props=props
        // this.state={}
        this.state={
            a:'hello' 
        }
    }
    componentWillMount(){
        console.log('将要挂载')
    }
    componentDidMount() {
        console.log('挂载完成')
    }
    render(){
        return <h1 onClick={()=>{
            this.setState({a:'word'})
        }}>hello Class {this.state.a}</h1>
    }
}
// console.log(MyComponennt)

// ReactDOM.render(element,document.getElementById('root'))
ReactDOM.render(<MyComponennt value='123' a={1}></MyComponennt>,document.getElementById('root'))