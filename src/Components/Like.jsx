import { useState } from "react"
const Like=()=>{
    let [count,setCount]=useState(0)

    let Incre=()=>{
        setCount(count+1)
    }
    return(
        <div>
            {/* <button onClick={Incre}>Like</button> */}
            <i class="fa-sharp fa-solid fa-thumbs-up" ></i>
            <sup>{count}</sup>
        </div>
    )
}
export default Like