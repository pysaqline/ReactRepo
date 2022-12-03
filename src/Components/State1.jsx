import { useState } from "react"
const State1=()=>{
    let[data,setData]= useState(0)
    let Plus=()=>{
        setData(data+1)
    }
    let Minus=()=>{
        setData(data-1)
    }
    let Re=()=>{
        setData(0)
    }
    return(
        <div>
            {data}<br></br>
            <button onClick={Plus}>Increment</button>
            <br />
            <button onClick={Minus}>Decrement</button>
            <br />
            <button onClick={Re}>Reset</button>
            <br />
        </div>
    )
}
export default State1