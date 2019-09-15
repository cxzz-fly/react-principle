import * as types from '../action-types'
import {Counter2} from '../../types'
import {Action} from '../actions/counter'
let initState:Counter2={
    number2:0
}
export default function(state:Counter2=initState,action:Action){
    switch(action.type){
        case types.INCREMENT2:
            return {number2:state.number2 + 1}
        case types.DECREMENT2:
            return {number2:state.number2 - 1}
        default:
            return state
    }
}