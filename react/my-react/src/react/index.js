//创建react元素 
function createElement(type,props,...children){
    // console.log(type,props,children);
    return {type,props,children}
}



let React = {
    createElement
}

export default React