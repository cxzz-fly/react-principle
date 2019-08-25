import React from './react';
import ReactDOM from './react-dom'

let element = 
<h1 name='xiaozhuo' 
    style={{color:'red'}}
    className='aaa'
    onClick={()=>{
        alert(1)
    }}
>
    <span>111</span>
    xiaozhuo.cheng</h1>

ReactDOM.render(element,document.getElementById('root'))