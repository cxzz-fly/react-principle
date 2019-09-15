import * as React from 'react'
import {connect} from 'react-redux'
import {Store,Counter2} from '../types'
import actions from '../store/actions/counter'
import { withRouter,RouterProps } from 'react-router'; 
interface props{
    number2:number,
    increment2:any,
    decrement2:any,
    history: RouterProps["history"]
}
interface state{
    id:number
}
class Counter extends React.Component<props,state>{
    state = {
        id:0
    }
    componentDidMount(){
        this.setState({
            id:this.props.history.location.state.id
        })
        
    }
    render(){
        return (
            <div>
                <p>{this.props.number2}</p>
                <button onClick={this.props.increment2}>+</button>
                <button onClick={this.props.decrement2}>-</button>
                id:{this.state.id}
            </div>
        )
    }
}
export default withRouter<any,any>(connect(
    (state:Store):Counter2=>state.counter2,
    actions
)(Counter))