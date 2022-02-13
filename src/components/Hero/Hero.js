import hero from "../../images/hero.png"
import style from "./Hero.module.css"
export default function Hero() {
    return (
        <>
            <div>
                <img src={hero} alt="hero" className={style.img}
                />
            </div>
        </>
    )
}