import React from 'react';
import './style/UserInfo.css';
import Login from './Login/Login';
import MainLogin from './Login/MainLogin';


function UserInfo(){
    return(
        <>
       <div style={{marginTop:10}}>
           {/* <LoginButton style={{backgroundColor:'MediumTurquoise',padding:10,borderRadius:30,paddingLeft:30,paddingRight:30,color:'white',fontSize:15,marginRight:10}}></LoginButton>
           <Profile></Profile>
           <LogoutButton></LogoutButton>
           <a >LOG IN</a> */}
           {/* <Login></Login> */}
           <MainLogin></MainLogin>


          
           <a style={{padding:10,border:'1px solid rgb(220, 220, 220)',borderRadius:30,paddingLeft:30,paddingRight:30}}>SIGN UP</a>
       </div>

       <p style={{marginTop:30}}>Shipping information</p>
       <div className='userdetails'>
       <div style={{marginRight:10}}>
       <input type="text" class="userinfo" name="fname" placeholder='Email'/><br />
       <input type="text"  class="userinfo" name="fname" placeholder='First name'/><br />
       <input type="text"   class="userinfo"  name="fname" placeholder='Last name'/><br />
       <input type="text"  class="userinfo" name="fname" placeholder='Phone number'/><br />
      
       </div>
       <div>
       <input type="text" class="userinfo" name="fname" placeholder='Email'/><br />
       <input type="text"  class="userinfo" name="fname" placeholder='First name'/><br />
       <input type="text"   class="userinfo"  name="fname" placeholder='Last name'/><br />
       <input type="text"  class="userinfo" name="fname" placeholder='Phone number'/><br />
      
       </div>
       </div>
       </>
    )
}

export default UserInfo;