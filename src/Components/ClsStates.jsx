import { Component } from "react";

class ClsStates extends Component{
    constructor(){
        super()
        this.state={
            name:"Good Afternoon"
        }
    }
    btn=()=>{
        this.setState({
            name:'Good evening'
        })
    }
    render(){
        return(
            <div>
                {this.state.name}
                <button onClick={this.btn}>Dynamic</button>
            </div>
        )
    }
}
export default ClsStates