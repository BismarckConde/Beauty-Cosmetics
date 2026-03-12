import "./About.css"
import logo from "../../assets/logos/logo_light.webp"

const About = () => {

return(

<section className="about" id="about">

<div className="about-image">
<img src={logo} alt="logo"/>
</div>

<div className="about-text">

<h2>Acerca de <span>Nosotros</span></h2>

<p>
En <b>S&F Beauty & Cosmetics</b> ofrecemos productos
de skincare y maquillaje de alta calidad
para resaltar tu belleza natural.
</p>

<p>
Nuestra misión es brindarte productos originales
y asesoría personalizada en toda Nicaragua.
</p>

</div>

</section>

)

}

export default About
