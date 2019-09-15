import * as React from 'react'
import {connect} from 'react-redux'
import {Store,Counter1} from '../types'
import actions from '../store/actions/counter'
import { withRouter,RouterProps } from 'react-router'; 
interface props{
    number1:number,
    increment:any,
    decrement:any,
    goto:any,
    history: RouterProps["history"]
}
class Counter extends React.Component<props,object>{
    constructor(props:props){
        super(props)
    }
    btn=()=>{
        this.props.history.push(`/2`);
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <p>{this.props.number1}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={this.props.goto}>redux跳到2</button>
                <button onClick={this.btn}>组件跳转</button>
            </div>
        )
    }
}
export default withRouter<any,any>(connect(
    (state:Store):Counter1=>state.counter1,
    actions
)(Counter))