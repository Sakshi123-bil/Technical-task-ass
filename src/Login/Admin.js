import React from "react";
import Component from 'react';
import { Link } from "react-router-dom";


export default class Admin extends Component{
  


  
    
    render(){
    return(

       <div>
         <h1>This is Admin Page only Auth pepole can see this</h1>
         <Link to="/logout">Log OUt</Link>
       </div>
    )

    }
    
}


