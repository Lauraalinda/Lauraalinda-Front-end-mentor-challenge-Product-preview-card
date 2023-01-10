import React from 'react';
import perfume from '../assets/images/perfume1.jpg';
import {TbShoppingCart} from 'react-icons/tb'

function Product() {
  return (
     <section>
      <div className="content">
        <div className="image">
          <img src={perfume}></img>

        </div>
        <div className="details">
          <h4>PERFUME</h4>
          <h2>Grabrielle Essence Eau De Parfum</h2>
          <p>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
          <h3>$149.99 <span>$169.99</span></h3>
          <button>
            <TbShoppingCart className="cart_icon" /> 
            Add to Cart</button>
        </div>
      </div>
      </section>
    
  )
}

export default Product