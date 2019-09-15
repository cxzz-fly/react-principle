import * as types from '../action-types'
import { push } from 'connected-react-router';
interface incrementAction{
    type:string
}
interface decrementAction{
    type:string
}
export type Action = incrementAction | decrementAction;
export default {
    increment(){
        return function(dispatch:any,getState){
            setTimeout(()=>{
                dispatch({type:types.INCREMENT})
            },1000)
        }
        // return {type:types.INCREMENT}
    },
    decrement():decrementAction{
        return {type:types.DECREMENT}
    },
    increment2():incrementAction{
        return {type:types.INCREMENT2}
    },
    decrement2():decrementAction{
        return {type:types.DECREMENT2}
    },
    goto(){
        return push('/2')
    }
}