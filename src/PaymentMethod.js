import React from 'react';
import paypal from './images/paypal.png';
import visa from './images/Visa.png';
import './style/PaymentMethod.css'
import masterCard from './images/masterCard.png';
import inpost from './images/inpost.png'

function PaymentMethod() {
    return (
        <div className='mainConatainer'>
            <p>Payment Method</p>
            <div style={{ marginBottom: 2 }}>

                <img src={paypal} className='payment-option'></img>
                <img src={visa} className='payment-option' style={{ paddingTop: 5 }}></img>
                <img src={masterCard} className='payment-option' style={{ paddingTop: -0, paddingBottom: 0 }}></img>
            </div>
            <div>
                <img src={paypal} className='payment-option'></img>
                <img src={visa} className='payment-option'></img>
                <img src={masterCard} className='payment-option' style={{ paddingTop: -0, paddingBottom: 0 }}></img>
            </div>


            <div>
                <p>Delivery Method</p>
            </div>

            <div style={{ marginBottom: 2 }}>
                <div style={{display:'flex'}}>
                    <div className='delivery-options'>
                        <img src={inpost}  ></img>
                        <p className="price">$20.0</p>
                    </div>
                    <div className='delivery-options'>
                        <img src={inpost}  ></img>
                        <p className="price">$20.0</p>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div className='delivery-options'>
                        <img src={inpost}  ></img>
                        <p className="price"> $20.0</p>
                    </div>
                    <div className='delivery-options'>
                        <img src={inpost}  ></img>
                        <p className="price">$20.0</p>
                    </div>
                </div>

               

            </div>
          

        </div>
    )
}

export default PaymentMethod;