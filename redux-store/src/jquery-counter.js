// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import $ from  'jquery'
import { createStore } from './redux'

//所有的动作都有一个type
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
function reducer(state={number:0},action){
    switch(action.type){
        case INCREMENT:
            return {number: state.number + 1}
        case DECREMENT:
            return {number : state.number - 1}
        default:
            return state
    }
}

let store =  createStore(reducer)
//获取容器中的状态

store.subscribe(function(){
    $('#count').html(store.getState().number)
})

$('#add').on('click',function(){
    store.dispatch({type:INCREMENT,count:5})
})
$('#minus').on('click',function(){
    store.dispatch({type:DECREMENT,count:3})
})