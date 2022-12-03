const Theme=()=>{
    let dark=()=>{
        document.body.style.background="Black"
        document.body.style.color="White"
    }
    let light=()=>{
        document.body.style.background="White"
        document.body.style.color="Black"
    }
    return(
        <div>
            <h1>Dark and light theme</h1>
            <br />
            <br />
            Dark
            <input type="radio"  name="abc" onClick={dark}/>
            Light
            <input type="radio" name="abc" onClick={light}/>
            <br />
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nostrum, voluptas, reiciendis neque rerum quos placeat ipsa laudant
        </div>

    )
}
export default Theme