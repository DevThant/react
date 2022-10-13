import React, { Component } from 'react'

class Item extends Component{
    constructor(props){
        super(props)
        this.handler = this.handler.bind(this)
    }

    handler(evt){
        this.props.remove(this.props.value)
    }

    render(){
        return(
        <li>
        {this.props.value}
        <button onClick={this.handler}>
             X
        </button>
        </li>
        )
    }
}

export default Item