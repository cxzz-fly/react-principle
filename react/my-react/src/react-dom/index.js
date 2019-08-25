function render(vnode,container){
    container.appendChild(_render(vnode))
}
function setAttribute(element,key,value){
    if(key === 'className') key='class'
    if(key === 'style'){
        if(typeof value ==='object'){
            for(let k in value){
                element.style[k] = value[k]
            }
        }
        return
    }
    if(key.startsWith('on')){
        key = key.toLowerCase();
        element[key]=value;
        return;
    }
    element.setAttribute(key,value)
}

function isType(type){
    return function(content){
       return Object.prototype.toString.call(content)===`[object ${type}]`
    }
}

let util = {}; 
let arr = ['String','Object','Function','Null']
arr.forEach(t=>{
    util['is'+t] = isType(t)
})
console.log(util.isString('222'))


function _render(vnode){
    if(util.isString(vnode)) return document.createTextNode(vnode)
    let {props,type,children} = vnode;
    let element = document.createElement(type);
    if(props){
        for(let key in props){
            setAttribute(element,key,props[key])
        }
    }
    //递归
    if(children){
        children.forEach(child=>render(child,element))
    }
    return element
}
let ReactDOM = {
    render
}

export default ReactDOM;