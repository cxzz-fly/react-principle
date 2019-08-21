import React, { Component } from 'react'
import store from '../store'

export default class Todo extends Component {
    render() {
        return (
            <div>
                {store.getState().todo.length}
            </div>
        )
    }
}
