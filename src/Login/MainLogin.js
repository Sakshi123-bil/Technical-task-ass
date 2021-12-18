import React from "react";
import Component from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Login from "./Login";
import Logout from "./Logout";
import Admin from "./Admin";

export default class MainLogin extends Component{
   
    render(){
    return(

     <Switch>
         <Route exact path="/" component={Login}></Route>
         <Route exact path="/admin" component={Admin}></Route>
         <Route exact path="/logout" component={Logout}></Route>

     </Switch>
    )

    }
    
}
