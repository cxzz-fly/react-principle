import counter from './couter'
import todo from './todo'
import {combineReducers} from '../../redux'

 // => {counter:{number:1},todo:[1,2,3]}
export default combineReducers({counter,todo})