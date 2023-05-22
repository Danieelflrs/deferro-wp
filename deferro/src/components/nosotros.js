import React from 'react';
import Nav from './nav';
import Footer from './footer';
import '../style-sheets/nosotros.css';

function Nosotros() {
  return (
    <div className="App">
      <Nav/>
      <div className='nosotros-item'>
        <div className='nosotros-container'>
          <p className='nosotros-txt'>¡Bienvenidos a Deferro! Somos un emprendimiento orgullosamente Salvadoreño, nos especializamos en la venta de figuras de metal únicas y creativas. 
            En un momento en que el mundo entero ha sido afectado por la pandemia del Covid-19,
            hemos encontrado en la creatividad y la pasión por el arte una oportunidad para ofrecer algo especial, natural y diferente al mercado.
            <br/><br/>
            En Deferro, nuestro compromiso es ofrecer a nuestros clientes piezas de metal excepcionales que reflejen la belleza y la singularidad de nuestra cultura y nuestro entorno. Nuestras figuras con formas de búhos, hojas, estrellas, entre otras, han sido diseñadas para transmitir un mensaje de esperanza y alegría,
            al mismo tiempo que añaden un toque de elegancia y sofisticación a cualquier espacio.
            <br/><br/>
          </p>
          <img
            className='nosotros-img'
            src={require('../images/angel3.jpg')}
            alt='imagen'
          />
        </div>
      </div>
      <div className='nosotros-item'>
          <div className='nosotros-container'>
            <img
              className='nosotros-img'
              src={require('../images/niño2n.jpg')}
              alt='imagen'
            />
            <p className='nosotros-txt'>
            Nuestra historia se remonta a los días más oscuros de la pandemia, cuando nuestra fundadora, inspirada por la capacidad de la humanidad para encontrar la luz en tiempos difíciles,       decidió tomar acción y crear algo hermoso y significativo, tambien tomando en cuenta al planeta para tener una influencia positiva en este.
            Desde entonces, hemos trabajado incansablemente para llevar nuestras piezas a cada hogar y oficina en el país, y estamos orgullosos de decir que hemos tenido un impacto positivo en la vida de muchos. 
            <br/><br/>
            En Deferro, creemos en la importancia de la calidad, la innovación y la responsabilidad social. Por eso, trabajamos con los mejores materiales y técnicas de fabricación,
            y siempre nos esforzamos por ser un negocio ético y sostenible que aporte valor a nuestra comunidad y al medio ambiente.
            <br/><br/>
            ¡Gracias por visitar nuestro sitio web! Esperamos que encuentre la pieza perfecta para su hogar u oficina,
            y que pueda unirse a nuestra comunidad de personas que aman la belleza y la creatividad.
            </p>
          </div>
        </div>
      <Footer/>
    </div>
  )
};

export default Nosotros;