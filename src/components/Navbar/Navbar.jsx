import "./Navbar.css"
import { useState } from "react"
import ThemeToggle from "../ThemeToggle/ThemeToggle"

const Navbar = () => {

const [menuOpen,setMenuOpen] = useState(false)

const scrollTo = (id)=>{
const section = document.getElementById(id)
if(section){
section.scrollIntoView({behavior:"smooth"})
}
setMenuOpen(false)
}

return (

<header className="navbar-header">

<nav className="navbar-container">

<div className="logo" onClick={()=>scrollTo("hero")}>
<span className="logo-gold">S&F</span>
<span className="logo-text">Beauty & Cosmetics</span>
</div>

<ul className={menuOpen ? "nav-links active":"nav-links"}>

<li>
<button onClick={()=>scrollTo("hero")}>
Inicio
</button>
</li>

<li>
<button onClick={()=>scrollTo("about")}>
Nosotros
</button>
</li>

<li>
<button onClick={()=>scrollTo("catalog")}>
Catálogo
</button>
</li>

<li>
<button onClick={()=>scrollTo("contact")}>
Contacto
</button>
</li>

<i
className="fa-solid fa-xmark mobile-close"
onClick={()=>setMenuOpen(false)}
></i>

</ul>

<div className="nav-actions">

<ThemeToggle/>

<i
className="fa-solid fa-bars mobile-open"
onClick={()=>setMenuOpen(true)}
></i>

</div>

</nav>

</header>

)

}

export default Navbar
