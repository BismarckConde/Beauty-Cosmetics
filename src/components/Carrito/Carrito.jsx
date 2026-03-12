import "./Carrito.css"

const Carrito = ({carrito,setCarrito,abierto,setAbierto}) => {

const sumar = (id)=>{

const nuevo = carrito.map(p=>
p.id===id
? {...p,cantidad:p.cantidad+1}
: p
)

setCarrito(nuevo)

}

const restar = (id)=>{

const nuevo = carrito.map(p=>
p.id===id && p.cantidad>1
? {...p,cantidad:p.cantidad-1}
: p
)

setCarrito(nuevo)

}

const eliminar = (id)=>{
setCarrito(carrito.filter(p=>p.id!==id))
}

const total = carrito.reduce(
(acc,p)=> acc + p.precio * p.cantidad,
0
)

const mensaje = carrito
.map(p=>`${p.nombre} x${p.cantidad}`)
.join("%0A")

const linkWhatsApp =
`https://wa.me/50500000000?text=Hola quiero comprar:%0A${mensaje}%0ATotal: C$${total}`

return(

<div className={`cart-panel ${abierto ? "open":""}`}>

<div className="cart-header">
<h3>Tu carrito</h3>
<button onClick={()=>setAbierto(false)}>✕</button>
</div>

<div className="cart-items">

{carrito.length===0 && <p>Tu carrito está vacío</p>}

{carrito.map(p=>(

<div className="cart-item" key={p.id}>

<img src={p.img} alt={p.nombre}/>

<div className="cart-info">

<h4>{p.nombre}</h4>
<p>C${p.precio}</p>

<div className="cart-controls">

<button onClick={()=>restar(p.id)}>-</button>
<span>{p.cantidad}</span>
<button onClick={()=>sumar(p.id)}>+</button>

</div>

</div>

<button
className="delete-btn"
onClick={()=>eliminar(p.id)}
>
🗑
</button>

</div>

))}

</div>

<div className="cart-footer">

<h3>Total: C${total}</h3>

<a
href={linkWhatsApp}
target="_blank"
rel="noopener noreferrer"
className="whatsapp-btn"
>
Comprar por WhatsApp
</a>

</div>

</div>

)

}

export default Carrito
