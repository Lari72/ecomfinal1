import React from 'react'
import { Link } from 'react-router-dom'
// import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>Almacen online</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/organico">Organico</Link></li>
            <li><Link className="menu-link" to="/productos/fresca">Fresca</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><Link className="menu-link" to="/carrito">Carrito</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar