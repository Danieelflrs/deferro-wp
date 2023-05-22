import React from 'react';
import '../style-sheets/footer.css';

function Footer(){
    return(
        <footer>
        <div className="footer-basic">
            <div>
                <div className="social">
                    <a href="https://www.instagram.com/deferro_oficial/" target="_BLANK" rel='noreferrer'><i className='icon ion-social-instagram'></i></a>
                    <a href="https://wa.link/pkszxh" target="_BLANK" rel='noreferrer'><i className='icon ion-social-whatsapp'></i></a>
                    <a href="https://www.facebook.com/deferro.flores/photos" target="_BLANK" rel='noreferrer'><i className='icon ion-social-facebook'></i></a>
                </div>
                <p className="copyright">¡SIGUENOS EN NUESTRAS REDES PARA ESTAR AL TANTO DE NUEVOS LANZAMIENTOS!</p>
                <p className="copyright">PRODUCTOS Y SERVICIOS DE INGENIERIA S.A. DE C.V.</p>
                <p className="copyright">© 2023</p>
            </div>
        </div>
    </footer>
    )
}


export default Footer;