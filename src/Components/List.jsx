import { useState } from "react"

const List=()=>{
    let[value,setvalue]=useState(['hii',"hello",'how are you'])
    return(
        <div>
            {value.map((x)=>{
                return(
                    <h1> {x}</h1>
                )
            }
            )}
        </div>
    )
}
export default List