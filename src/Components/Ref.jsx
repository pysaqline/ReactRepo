import { useRef } from "react"

const Ref=()=>{
    let demoRef=useRef()
    console.log(demoRef)
    let Clr=()=>{
        demoRef.current.style.background="Red"
    }
    return(
        <div>
            <h1 ref={demoRef}>Heading Tag</h1>
            <button onClick={Clr}>Click</button>
        </div>
    )
}
export default Ref