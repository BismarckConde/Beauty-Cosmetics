import "./Hero.css"
import inicio1 from "../../assets/logos/logo_light.webp"

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-text animate-fade-in">
                <h1>Elevando la <span className="highlight-pink">belleza</span> a un arte sublime</h1>
                <p>Descubre el cuidado perfecto para tu piel.</p>
                <a href="#catalog" className="btn-primary">
                    Explorar Catálogo
                </a>
            </div>

            <div className="hero-image animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <img src={inicio1} alt="S&F Beauty Cosmetics Logo" />
            </div>
        </section>
    )
}

export default Hero