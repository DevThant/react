import React, { Component } from 'react'
import "./ListGroup.css"
import Item from './Item';

class ListGroup extends Component{
    constructor(props){
        super(props);
        this.state = {
            lists: [
                "React",
                "NextJs",
                "Redux",
                "NestJs",
                "Docker + Kubernetes"
            ]
        }
        this.remove = this.remove.bind(this)
    }

remove(item){
    console.log("Inside remover function")
    this.setState(st=>({
        lists: st.lists.filter(i => i!==item)
    }))
}
    render(){
        let items = this.state.lists.map(item => (<Item value={item} remove={this.remove} />))
        return(
            <div className='ListGroup' >
                <h1>Passing Methods To Child Components</h1>
                <ul>
                {items}
                </ul>
            </div>
        )
    }
}

export default ListGroup