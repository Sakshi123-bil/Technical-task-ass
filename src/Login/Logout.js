import React from "react";
import Component from 'react';
import { Link } from "react-router-dom";


export default class Logout extends Component{
  


  
    
    render(){
    return(

       <div>
         <h1>You have been loed out</h1>
         <Link to="/">Log in again</Link>
       </div>
    )

    }
    
}


