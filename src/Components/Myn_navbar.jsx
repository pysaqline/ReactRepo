import style from "./myn_navbar.module.css"
import picture from "./Myn_logo.jpg"
const Myn_navbar=()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.Logo}>
                    <img src={picture} height="100%" width="100%"/>
                    </div>
                <div className={style.Menu}>
                    <ul>
                        <li><a href="">MEN</a></li>
                        <li><a href="">WOMEN</a></li>
                        <li><a href="">KIDS</a></li>
                        <li><a href="">HOME&LIVING</a></li>
                        <li><a href="">BEAUTY</a></li>
                        <li><a href="">STUDIO <sub>NEW</sub></a></li>
                    </ul>
                </div>
                <div className={style.Search}><button><i class="fa-solid fa-magnifying-glass"></i>
                    
                    </button>
                    <input type="text" placeholder="Search for product,brands and more" /></div>
                <div className={style.User}><ul>
                    <li><a href="">
                    Profile</a><i class="fa-regular fa-user"></i></li>
                    <li><a href="">Wishlist</a><i class="fa-regular fa-heart"></i></li>
                    <li><a href="">Bag</a><i class="fa-solid fa-bag-shopping"></i></li>
                    </ul></div>
            </article>
        </section>
    )
}
export default Myn_navbar