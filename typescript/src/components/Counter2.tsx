import * as React from 'react'
import {connect} from 'react-redux'
import {Store,Counter2} from '../types'
import actions from '../store/actions/counter'
interface props{
    number2:number,
    increment2:any,
    decrement2:any
}
class Counter extends React.Component<props,object>{
    render(){
        return (
            <div>
                <p>{this.props.number2}</p>
                <button onClick={this.props.increment2}>+</button>
                <button onClick={this.props.decrement2}>-</button>
            </div>
        )
    }
}
export default connect(
    (state:Store):Counter2=>state.counter2,
    actions
)(Counter)