import React from 'react';
import Product from './product';
import InfoDeferro from './infoDeferro';
import '../style-sheets/body.css'

const Body = ()=>{
  return(
    <div className="body-container">
        <InfoDeferro/>
        <div className='product-grid'>
            <Product
                productType = "botella1n-nobg"
                productName = "Botella"
            />

            <Product
                productType = "estrella1b-nobg"
                productName = "Estrella"
            />

            <Product
                productType = "buho1n-nobg"
                productName = "Búho"
            />

            <Product
                productType = "candelero1n-nobg"
                productName = "Candelero"
            />
            
            <Product
                productType = "corazonNido2b-nobg"
                productName = "Corazón Nido"
            />

            <Product
                productType = "gatoLuna1n-nobg"
                productName = "Luna Gatitos"
            />
    
            <Product
                productType = "cubo2b-nobg"
                productName = "Cubo"
            />

            <Product
                productType = "niño1b-nobg"
                productName = "Niño"
            />
    
            <Product
                productType = "hoja1n-nobg"
                productName = "Hoja"
            />
    
            <Product
                productType = "doblej1b-nobg"
                productName = "Doble J"
            />

            <Product
                productType = "canastaRectangular2n-nobg"
                productName = "Canasta Rectangular"
            />

            <Product
                productType = "repisa1b-nobg"
                productName = "Repisa"
            />

            <Product
                productType = "repisa1b-nobg"
                productName = "Repisa"
            />

            <Product
                productType = "pisis2n-nobg"
                productName = "Repisa"
            />

            <Product
                productType = "colgante1n-nobg"
                productName = "Repisa"
            />
        </div>
    </div>
)};
export default Body;
