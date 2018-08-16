import React, {Component} from 'react';
import logo from './logo.png';
import ListItem from './NavListItem';
import DropItem from './NavDropDown';
import Login from './Login';
import './App.css';
class Navbar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { user : '' , isLoggedIn : false };
    }
    updateLogin = () =>
    {
        console.log("run");
    }
    render()
    {
        let user;
        if (this.state.isLoggedIn)
            user = <ListItem title = {this.state.user}  i="sign-in-alt"   link="#"  other1="modal" other2="#login" />
        else
            user = <ListItem title = "Login/Signup"     i="sign-in-alt"   link="#"  other1="modal" other2="#login" logfun={this.updateLogin.bind(this)} />

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <a className="navbar-brand" href="http://codeshala.org/" target="new" data-placement="bottom"  data-toggle="popover" data-trigger="hover" data-content="Drawit is an online code editing platform, currently providing HTML,CSS and JavaScript support.">
                    <span id="brand"> Draw It </span>
                    <img src={logo} width="30px" alt="logo"/>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <ListItem title = "New"           i="code"          link="/"            other="" />
                        <ListItem title = "Save"          i="save"          link="/user1"       other="" />
                        {user}
                        <ListItem title = "Developers"    i="link"          link="/Developers"  other="" />
                        <DropItem title = "Change View"   i="columns"               /> 
                    </ul>
                </div>
                <Login />
            </nav>
        );
    }
}
export default Navbar
