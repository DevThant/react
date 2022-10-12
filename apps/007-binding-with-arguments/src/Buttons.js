import React, { Component } from 'react'
import './Buttons.css'

class Buttons extends Component {
    static defaultProps = {
        colors: ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4']
    }
    constructor(props){
        super(props);
        this.state = {
            color : '#ffcad4'
        }
    }
    changeColor(color){
        this.setState({color})
    }
    render(){
        return(
           <div className='ButtonGroup' style={{backgroundColor: this.state.color}}>
            {this.props.colors.map(c=>{
                const colorObj = {backgroundColor: c}
                return(
                <button style={colorObj} onClick={this.changeColor.bind(this, c)}>Click Me!</button>
                ) 
            })}
           </div>
        )
    }
}

export default Buttons