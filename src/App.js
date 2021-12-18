import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ShippingAndPayment from './ShippingAndPayment';
import UsreInfo from './UserInfo';
import PaymentMethod from './PaymentMethod';
import Cart from './Cart';
import { Button, Grid } from '@mui/material';


function App() {
  return (
    <div className='mainContanier'>
   <Header></Header>
   <ShippingAndPayment></ShippingAndPayment>

   <Grid container spacing={0}>
   <Grid xs={12} lg={4} md={12}>
   <UsreInfo></UsreInfo>
   </Grid>
   <Grid xs={12} lg={4} md={12}>
   <PaymentMethod></PaymentMethod>
   </Grid>
   <Grid xs={12} lg={4} md={12}>
   <Cart></Cart>
   </Grid>
   </Grid>
   

   <div className='subcontainer'>
     <div style={{display:'flex'}}>
     <i class="fas fa-arrow-left" style={{marginTop:20}}></i>
       <p>Back</p>
     </div>
     <div style={{marginTop:40}} className='btn-section'>
       <Button variant='outlined' style={{color:'gray',borderColor:'gray',borderRadius:20,fontSize:13}}>CONTINUE SHOPPING</Button>
       <Button variant='contained' style={{borderColor:'white',borderRadius:20,backgroundColor:'MediumTurquoise',marginLeft:10}}>proceed to payment</Button>
     </div>
   </div>
   
  
   </div>
    );
}

export default App;
