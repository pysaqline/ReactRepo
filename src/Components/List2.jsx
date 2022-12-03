import { Fragment, useState } from "react"
import Dummy from "./userData.json"
const List2=()=>{
    let[abc,setAbc]=useState(Dummy)
    return(
        <div>
            {abc.map((x)=>{
                return(
                    // <>
                    <Fragment key={x.id}>
                        <h1>{x.login}</h1>
                        <h1>{x.id}</h1>
                        {/* <img src={x.avatar_url} alt="" /> */}
                    </Fragment>
                    // </>
                )
            })}
        </div>
    )
}
export default List2