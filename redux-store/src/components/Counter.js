import React from 'react'
import actions from '../store/actions/counter'
import {connect} from '../react-redux'
// import {bindActionCreators} from '../redux'

class Counter extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     number: store.getState().counter.number
        // }
    }
    // componentDidMount(){
    //     this.unsub = store.subscribe(()=>{
    //         this.setState({number:store.getState().counter.number})
    //     })
    // }
    // componentWillUnmount(){
    //     this.unsub()
    // }
     render(){
         return (
             <div>
                 <button onClick={()=>{
                     this.props.add(2)
                    //  store.dispatch(actions.add(5))
                 }} >+</button>
                 <div>{this.props.counter.number}</div>
                 <button onClick={()=>{
                     this.props.minus(1)
                    //  store.dispatch(actions.minus(3))
                 }}>-</button>
             </div>
         )
     }
}

let mapStateToProps=(state)=>({...state})
// {
//     return {number:state.counter.number}
// }

// let mapDispatchToProps=(dispatch)=>{
//     return {
//         add:(...args)=>dispatch(actions.add(...args)),
//         minus:(...args)=>dispatch(actions.minus(...args))
//     }
// }
//两个函数 
// export default connect(mapStateToProps,(dispatch)=>bindActionCreators(actions,dispatch)
export default connect(mapStateToProps,actions)(Counter)