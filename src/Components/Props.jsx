const Props=(data)=>{
    console.log(data)
    return(
        // <h1>Hello {data.abc} </h1>
        <div>
            <h1>hello {data.abc[0]}</h1>
            <h1>hii {data.abc[1]}</h1>
            <h1>hi {data.abc[2]}</h1>
        </div>
        
    )
}
export default Props