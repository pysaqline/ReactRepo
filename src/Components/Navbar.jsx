import style from "./navbar.module.css"
import picture from "./Logo.jpg"
const Navbar=()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.Logo}>
                    <img src={picture} height="100%" width="100%"/>
                </div>

                <div className={style.Menu}>
                    <ol>
                       <li><a href="">What we  do</a></li>
                       <li><a href="">Who  we are</a></li>
                       <li><a href="">Insight</a></li>
                       <li><a href="">Careers</a></li>
                       <li><a href="">Investors</a></li>
                    </ol>
                </div>
                <div className={style.Contact}>
                    <ol>
                        <li><a href="">CONTACT US</a></li>
                        <li><a href="">TCS WORLDWIDE</a></li>
                        <li><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></li>
                        <li><a href=""></a></li>
                    </ol>
                </div>
            </article>
        </section>
    )
}
export default Navbar