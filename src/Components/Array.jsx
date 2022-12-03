import { useState } from "react"
const Array=()=>{
    let [data,setData] = useState(['hii',"hello",'how are you'])
    return(
        <div>
            {/* Array{data[2]} */}
            <h1>{data[0]}</h1>
            <h1>{data[1]}</h1>
            <h1>{data[2]}</h1>
        </div>
    )
}   
export default Array