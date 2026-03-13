import { useState, useEffect } from "react"
import "./Catalogo.css"
import Carrito from "../Carrito/Carrito"

// Productos
import aguamicelarVINI from "../../assets/productos/aguamicelarViniLADY.webp"
import bloqueadorsolaUSHAS from "../../assets/productos/bloqueadorsolaUSHAS.webp"
import contornoojeraUSHAS from "../../assets/productos/contornodeojerasUSHAS.webp"
import cremamanosUSHAS from "../../assets/productos/cremademanosUSHAS.webp"
import cremafacialUSHAS from "../../assets/productos/cremafacialUSHAS.webp"
import difuminadoresRUBY from "../../assets/productos/difuminadoresmaquillajeRUBYFACE.webp"
import espumafacialUSHAS from "../../assets/productos/espumafacialUSHAS.webp"
import kitbeutytoolsRUBY from "../../assets/productos/kitbeautytoolsRubyFace.webp"
import kittoolsRUBY from "../../assets/productos/kittoolsRUBYFACE.webp"
import limpiadorfacialUSHAS from "../../assets/productos/limpiadorfacialrosasUSHAS.webp"
import lipoilUSHAS from "../../assets/productos/lipoilUSHAS.webp"
import lipserumUSHAS from "../../assets/productos/lipserumUSHAS.webp"
import parcheojoBIOAQUA from "../../assets/productos/parcheojoBIOAQUA.webp"
import serumpresentacionesUSHAS from "../../assets/productos/serumpresentacionesUSHAS.webp"
import setaroRUBY from "../../assets/productos/setaroRUBYFACE.webp"
import setbanddanaRUBY from "../../assets/productos/setbandanaRUBYFACE.webp"
import toallasdesmaquiUSHAS from "../../assets/productos/toallasdesmaquillantesUSHAS.webp"
import tonicoacidoSAS from "../../assets/productos/tonicoconacidoSAS.webp"
import tonicocolagenoSAS from "../../assets/productos/tonicoconcolagenoSAS.webp"
import tonicomanzanillaSAS from "../../assets/productos/tonicoconmanzanillaSAS.webp"
import ruboriluminadores from "../../assets/productos/ruboreiluminadorbeauvisage.PNG"
import primerhidratante from "../../assets/productos/primerhidratantebeauvisage.PNG"
import polvobanana from "../../assets/productos/polvobananabeautycreation.PNG"
import ilunimadoresbeutycreation from "../../assets/productos/iluminadoresbeautycreation.PNG"
import fijadoracabadomatte from "../../assets/productos/fijadoracabadomattebeauvisage.PNG"
import correctornuevaformulabeauvisage from "../../assets/productos/correctornuevaformulabeuvisage.PNG"
import mascarapestaña from "../../assets/productos/mascaradepestañasushas.webp"
import lipgloskevincoco from "../../assets/productos/lipgloskevin.webp"

const Catalogo = () => {

const productos = [
    { id:1, nombre:"Agua Micelar", marca:"VINI LADY", precio:110, img:aguamicelarVINI },
    { id:2, nombre:"Bloqueador Solar", marca:"USHAS", precio:220, img:bloqueadorsolaUSHAS },
    { id:3, nombre:"Contorno de Ojeras", marca:"USHAS", precio:90, img:contornoojeraUSHAS },
    { id:4, nombre:"Crema de Manos", marca:"USHAS", precio:70, img:cremamanosUSHAS },
    { id:5, nombre:"Crema Facial", marca:"USHAS", precio:100, img:cremafacialUSHAS },
    { id:6, nombre:"Difuminadores de Maquillaje", marca:"RUBY FACE", precio:20, img:difuminadoresRUBY },
    { id:7, nombre:"Espuma Facial", marca:"USHAS", precio:90, img:espumafacialUSHAS },
    { id:8, nombre:"Kit Beauty Tools", marca:"RUBY FACE", precio:100, img:kitbeutytoolsRUBY },
    { id:9, nombre:"Kit Tools", marca:"RUBY FACE", precio:120, img:kittoolsRUBY },
    { id:10, nombre:"Limpiador Facial Rosas", marca:"USHAS", precio:100, img:limpiadorfacialUSHAS },
    { id:11, nombre:"Lip Oil juicy glass", marca:"USHAS", precio:100, img:lipoilUSHAS },
    { id:12, nombre:"Lip Serum", marca:"USHAS", precio:90, img:lipserumUSHAS },
    { id:13, nombre:"Parche de Ojos", marca:"BIOAQUA", precio:110, img:parcheojoBIOAQUA },
    { id:14, nombre:"Serum Facial", marca:"USHAS", precio:170, img:serumpresentacionesUSHAS },
    { id:15, nombre:"Set Aro", marca:"RUBY FACE", precio:150, img:setaroRUBY },
    { id:16, nombre:"Set Bandana", marca:"RUBY FACE", precio:130, img:setbanddanaRUBY },
    { id:17, nombre:"Toallas Desmaquillantes", marca:"USHAS", precio:80, img:toallasdesmaquiUSHAS },
    { id:18, nombre:"Tónico Ácido Hialurónico", marca:"SAS", precio:110, img:tonicoacidoSAS },
    { id:19, nombre:"Tónico Colágeno", marca:"SAS", precio:110, img:tonicocolagenoSAS },
    { id:20, nombre:"Tónico Manzanilla", marca:"SAS", precio:110, img:tonicomanzanillaSAS },
    { id:21, nombre:"Rubor e iluminadores en barra", marca:"BEAU VISAGE", precio:200, img:ruboriluminadores},
    { id:22, nombre:"Iluminadores", marca:"BEAUTY CREATIONS", precio:300, img:ilunimadoresbeutycreation},
    { id:23, nombre:"Fijador Acabado Matte", marca:"BEAU VISAGE", precio:150, img:fijadoracabadomatte},
    { id:24, nombre:"Polvo Banana", marca:"BEAUTY CREATIONS", precio:200, img:polvobanana},
    { id:25, nombre:"Primer Hidratante", marca:"BEAU VISAGE", precio:100, img:primerhidratante},
    { id:26, nombre:"Corrector Nueva Fórmula", marca:"BEAU VISAGE", precio:160, img:correctornuevaformulabeauvisage},
    { id:27, nombre:"Lip Gloss Más Labial Balm", marca:"KEVIN & COCO", precio:160, img:lipgloskevincoco},
    { id:28, nombre:"Máscara de Pestañas", marca:"USHAS", precio:120, img:mascarapestaña}
]


const [marcaActiva,setMarcaActiva] = useState("Todos")
const [busqueda,setBusqueda] = useState("")
const [carritoAbierto,setCarritoAbierto] = useState(false)

const [carrito,setCarrito] = useState(
JSON.parse(localStorage.getItem("carrito")) || []
)

const [toast,setToast] = useState(false)

useEffect(()=>{
localStorage.setItem("carrito",JSON.stringify(carrito))
},[carrito])

const marcas = ["Todos",...new Set(productos.map(p=>p.marca))]

const productosFiltrados = productos
.filter(p=> marcaActiva==="Todos" || p.marca===marcaActiva)
.filter(p=> p.nombre.toLowerCase().includes(busqueda.toLowerCase()))

const agregarCarrito = (producto)=>{

const existe = carrito.find(p=>p.id===producto.id)

if(existe){

const nuevo = carrito.map(p =>
p.id===producto.id
? {...p,cantidad:p.cantidad+1}
: p
)

setCarrito(nuevo)

}else{

setCarrito([...carrito,{...producto,cantidad:1}])

}

setToast(true)

setTimeout(()=>{
setToast(false)
},2000)

}

return(

<section className="catalog" id="catalog">

<div className="catalog-header">
<h2>Catálogo de <span className="highlight-gold">Productos</span></h2>
<p>Envíos a toda Nicaragua</p>
</div>

<button
className="cart-open"
onClick={()=>setCarritoAbierto(true)}
>
🛒 {carrito.length}
</button>

<div className="search-container">
<input
type="text"
placeholder="Buscar productos..."
value={busqueda}
onChange={(e)=>setBusqueda(e.target.value)}
/>
</div>

<div className="brand-filter">

{marcas.map(marca=>(

<button
key={marca}
className={marcaActiva===marca ? "active":""}
onClick={()=>setMarcaActiva(marca)}
>

{marca}

</button>

))}

</div>

<div className="cards">

{productosFiltrados.map(p=>(

<article className="card animate-view" key={p.id}>

<div className="card-img-container">
<img src={p.img} alt={p.nombre}/>
</div>

<div className="card-info">

<h3>{p.nombre}</h3>

<p className="price">
C${p.precio}
</p>

<button
className="btn-secondary add-cart"
onClick={()=>agregarCarrito(p)}
>

Añadir al carrito

</button>

</div>

</article>

))}

</div>

<Carrito
carrito={carrito}
setCarrito={setCarrito}
abierto={carritoAbierto}
setAbierto={setCarritoAbierto}
/>

{toast && (

<div className="toast">
Producto añadido al carrito 🛒
</div>

)}

</section>

)

}

export default Catalogo
