
import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            text: e.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        alert(`You entered:  ${this.state.text}`);
        this.setState({text: ''})
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>React Form : {this.state.text}</h1>
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                    <button>Submit</button>
                </form>
            </div>
            
        )
}
}
       

export default Form;
