import React, { Component } from 'react'


class MultipleFormInputs extends Component {
    constructor (props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        // use es2015 Computed Property name
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        alert(`Welcome: ${this.state.username}`)
        this.setState({
            username: "",
            email: "",
            password: "",
        })
    }
    render(){
        return(
            <div>
                <h1>Form with Multiple Inputs</h1>
                <form onSubmit={this.handleSubmit}>
                 <input type="text" onChange={this.handleChange} value={this.state.username} name="username" placeholder='Username'/>
                 <input type="email" onChange={this.handleChange} value={this.state.email} name="email" placeholder='Email' /> 
                 <input type="password" onChange={this.handleChange} value={this.state.password} name="password" placeholder='Password'/> 
                 <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MultipleFormInputs