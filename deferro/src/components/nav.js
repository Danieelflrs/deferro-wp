import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../style-sheets/nav.css'
function Nav() {
  return <div className="nav-container">
        <Link to="/" className="nav-title">Inicio</Link>
        
        <Link to="/catalogo" className="nav-title">Catálogo</Link>
        <Link to="/nosotros" className="nav-title">Nosotros</Link>
        <div className="social">
          <a href="https://www.instagram.com/deferro_oficial/" target="_BLANK" rel='noreferrer'><i className='icon ion-social-instagram'></i></a>
          <a href="https://wa.link/pkszxh" target="_BLANK" rel='noreferrer'><i className='icon ion-social-whatsapp'></i></a>
          <a href="https://www.facebook.com/deferro.flores/photos" target="_BLANK" rel='noreferrer'><i className='icon ion-social-facebook'></i></a>
        </div>
      <Outlet/>
  </div>
}
export default Nav;
