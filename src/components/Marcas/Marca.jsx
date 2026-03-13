import "./Marca.css"

import ruby from "../../assets/marcas/RUBYFACE.png"
import ushas from "../../assets/marcas/USHAS.png"
import sas from "../../assets/marcas/SAS.png"
import bioaqua from "../../assets/marcas/BIOAQUA.png"
import vinilady from "../../assets/marcas/VINILADY.png"
import beauvisage from "../../assets/marcas/logobeauvisage.png"
import beautycreation from "../../assets/marcas/logobeautycreations.png"

const Marcas = () => {

const marcas = [
ruby,
ushas,
sas,
bioaqua,
vinilady,
beauvisage,
beautycreation
]

return (

<section className="brands">

<h2 className="brands-title">
Nuestras <span>Marcas</span>
</h2>

<div className="brands-slider">

<div className="brands-track">

{marcas.map((marca,index)=>(

<img
key={index}
src={marca}
alt="Marca de cosméticos"
className="brand-logo"
/>

))}

{/* duplicamos para animación infinita */}

{marcas.map((marca,index)=>(

<img
key={"copy"+index}
src={marca}
alt="Marca de cosméticos"
className="brand-logo"
/>

))}

</div>

</div>

</section>

)

}

export default Marcas
