import React from 'react';
import Avatar from '@mui/material/Avatar';
import './style/Cart.css';


function Cart(){
    return(

        <>
          
        <p>Your cart</p>
        <div className='main-container'>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" style={{marginTop:7}}/>
        <div className='product-description-column'>
            <p className='product-description'>T-shirt</p>
            <p className='product-description'>Summer Vibes</p>
            <p className='product-description' style={{color:'gray'}}>#261311</p>
        </div>
        <div>
            <p style={{fontSize:15,marginLeft:40}}>$89.90</p>
        </div>
        </div>
        <div className='main-container'>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" style={{marginTop:7}}/>
        <div className='product-description-column'>
            <p className='product-description'>Basic Slim</p>
            <p className='product-description'>Fit T-shirt</p>
            <p className='product-description' style={{color:'gray'}}>#261311</p>
        </div>
        <div>
            <p style={{fontSize:15,marginLeft:65}}>$69.99</p>
        </div>
        </div>
       

        <div className='total-calculation'>
            <div>
                <p style={{marginRight:20,fontSize:14,marginTop:16,color:'gray'}}>Total cost</p>
            </div>
            <div>
                <p style={{fontSize:15}}>$159.40</p>
            </div>
        </div>


        <div className='shipping-details'>
        <i class="fas fa-truck" style={{marginTop:40,marginRight:20, fontSize:12}}></i>
        <p style={{width:150,fontSize:15}}>You are $30.20 away from free shipping</p>
        </div>
        </>
    )
}

export default Cart;