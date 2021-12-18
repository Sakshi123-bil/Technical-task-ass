import React from 'react';
import './style/Shippingandpayment.css';
import truckImage from './images/truck.png';
import shoppingCart from './images/shoppingCart.png'
import { Divider } from '@mui/material';



function ShippingAndPayment(){
    return(
       <div className='Main-container'>
            <div className='sub-container-one'>
              <p style={{fontSize:20,fontWeight:500}}>Shipping and Payment </p>
            </div>

            <div className='sub-container-two'>
            <img src={shoppingCart} style={{borderRadius:'60%',border:'2px solid gray'}}></img>
         
            <img src={truckImage} style={{borderRadius:'60%',border:'2px solid gray'}}></img>
           
            </div>
       </div>
    );
}

export default ShippingAndPayment;