import { useState } from "react"
const State=()=>{
    let[data,setData]= useState("kahana de do")
    let Sharwarma=()=>{
        setData("I am hungry")
    }
    return(
        <div>
            {data}
            <button onClick={Sharwarma}>Food</button>
        </div>
    )
}
export default State