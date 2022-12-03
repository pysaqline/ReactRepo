import style from "./zee_navbar.module.css"
import picture from "./Zee5-logo.jpg"
const Zee_navbar=()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.Logo}>
                    <img src={picture} height="100%" width="100%"/>
                </div>
                <div className={style.Menu}>
                    <ol>
                        <li><a href="">Home</a></li>
                        <li><a href="">TV Shows</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Web Series</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Eduauraa</a></li>
                        <li><a href="">Premium</a></li>
                        <li><a href="">Live TV</a></li>
                        <li><a href="">Channels</a></li>
                        <li><a href="">Music</a></li>
                        <li><a href="">Cricket</a></li>
                    </ol>
                </div>
                <div className={style.Admin}>
                    <ol>
                    <li><a href=""><i class="fa-solid fa-magnifying-glass"></i>
                        </a></li><input type=" text area" />
                    <li><a href="">
                       <i class="fa-solid fa-language"></i> 
                       </a></li>
                     <li><a href="">
                        <button><a href=""> LOGIN</a>
                            </button></a></li>
                    <li><a href="">
                        <button><a href="">
                        <i class="fa-solid fa-crown"></i>BUY PLAN </a>
                        </button></a></li>
                    <li><a href="">
                    <i class="fa-solid fa-bars"></i>
                    </a></li>
                    </ol>
                </div>
            </article>
        </section>
    )
}
export default Zee_navbar