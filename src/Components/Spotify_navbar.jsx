import style from"./spotify_navbar.module.css"
import picture from "./LogoS.jpg"
const Spotify_navbar=()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.Logo}>
                   <center><img src={picture} height="30%" width="20%" /></center> 
                </div>
                <div className={style.Menu}>
                    <ol>
                        <li><a href="">Premium</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Herunterladen</a></li>
                        <li><a href="">|</a></li>
                        <li><a href="">Registrierne</a></li>
                        <li><a href="">Anmelden</a></li>
                    </ol>
                </div>
            </article>

        </section>

    )
}
export default Spotify_navbar