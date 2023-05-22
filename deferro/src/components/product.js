import React from 'react';
import '../style-sheets/product.css';
const Product = (props)=>{
    return (
            <div className="product-container">
                <img
                    className = 'product-image'
                    src={require(`../images/${props.productType}.png`)}
                    alt='logo'
                />
                <p className='product-name'>{props.productName}</p>
                <a className='product-button' href="https://wa.link/pkszxh" target="_BLANK" rel='noreferrer'>Cotizar</a>
            </div>
    );
};


// const ProductInfo = (props) =>{
//     return(
//         <section className="product-info">
//             <div className="body-container">
//             <img
//                 className = 'product-image'
//                 src ={require(`../images/${props.productType}.jpg`)}
//                 alt='logo'
//             />
//             <p>{props.description}</p>
//             <p>{props.precio}</p>
//             <button>CONTACTAR VENDEDOR</button>
//             </div>
//         </section>
//     );
// };

export default Product;