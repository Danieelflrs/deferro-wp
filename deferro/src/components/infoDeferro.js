import React from 'react';
import '../style-sheets/infoDeferro.css'


const infoDeferro = ()=>{
    return (
        <div className="ideferro-container">
            <img
          className="ideferro-image"
          src={require(`../images/logoDeferro-nobg.png`)}
          alt='logo'
        />
        </div>
    )
}

export default infoDeferro;