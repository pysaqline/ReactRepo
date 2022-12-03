import { useState } from "react"
import Dummy from "./userData.json"
const List1=()=>{
    let[abc,setAbc]=useState(Dummy)
    return(
        <div>
            {abc.map((x)=>{
                return(
                    <div>
                        <h1>{x.login}</h1>
                        <h1>{x.id}</h1>
                        <img src={x.avatar_url} alt="" />
                    </div>
                )
            })}
        </div>
    )
}
export default List1