import {renderComponent} from '../react-dom'

//创建react元素 
function createElement(type,props,...children){
    // console.log(type,props,children);
    return {type,props,children}
}

class Component{
    constructor(props){
        this.props = props;
        this.state={};
    }
    setState(newState){
        Object.assign(this.state,newState) 
        let old = this.dom;
        let newEle = renderComponent(this);
        old.parentNode.replaceChild(newEle,old)
        this.dom = newEle;
    }
}


let React = {
    createElement,
    Component
}

export default React