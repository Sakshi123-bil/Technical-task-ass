import React from 'react';
import './style/Header.css';
import logo from './images/logoimg.png';


function Header() {
     return(
        <div className='header-section'>
             <div className='logo'>
                 <p style={{fontSize:20,fontWeight:400}}><span style={{color:'gold'}}>E-</span><span style={{color:'gray',fontSize:20}}>Shop</span></p>
             </div>
             <div className='person-category'>
               <p style={{padding:20}}>Men</p>
               <p style={{padding:20}}>Women</p>
               <p style={{padding:20}}>Kids</p>
             </div>
             <div className='profile-cart-section'>
             <i class="fas fa-search" style={{padding:10}}></i>
             
             <i class="fas fa-shopping-cart fa-x" style={{padding:10}}></i>
             <i class="fas fa-user-alt" style={{padding:10}}></i>
             </div>

        </div>
     );
}

export default Header;