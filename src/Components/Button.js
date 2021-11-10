import React from "react";

class Button extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    addCounter = () =>{
        this.setState(
            {
                count : this.state.count+1
            }
        )
    }

    decreaseCounter(){
        this.setState(
            {
                count: this.state.count-1
            }
        )
    }


    reset(){
        this.setState(
            {
                count: 0
            }
        )
    }

    render(){
        return(
            <div>
                <button className='inc' onClick={(e) => this.addCounter(e)}>Add Counter</button>
                <button className='dec' onClick={(e) => this.decreaseCounter(e)}>Decrease Counter</button>
                <button className='reset' onClick={(e) => this.reset(e)}>Reset Counter</button>
                <h1>Current Counter ng utak ko: {this.state.count}</h1>

                
            </div>
        )
           
        
    }

}
export default Button