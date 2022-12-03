const Child3 =(props)=>{
    console.log(props);
    return(
        <div>
            {/* <h1>{props.content[0].name}</h1>
            <h1>{props.content[1].name}</h1>
            <h1>{props.content[2].name}</h1> */}
            Hello{props.children}
        </div>
    )
}
export default Child3