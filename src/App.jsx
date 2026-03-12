import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import Home from "./Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { ThemeProvider } from "./ThemeContext/ThemeProvider"

function App() {

const [carrito,setCarrito] = useState(
JSON.parse(localStorage.getItem("carrito")) || []
)

useEffect(()=>{
localStorage.setItem("carrito",JSON.stringify(carrito))
},[carrito])

return (

<ThemeProvider>

<Router>

<Navbar/>

<Routes>
<Route path="/" element={<Home carrito={carrito} setCarrito={setCarrito}/>}/>
</Routes>

<Footer/>

</Router>

</ThemeProvider>

)

}

export default App
