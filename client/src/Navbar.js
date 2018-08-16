import React, {Component} from 'react';
import logo from './logo.png';
import ListItem from './NavListItem';
import './App.css';
class Navbar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { user : '' , isLoggedIn : false };
    }
    render()
    {
       
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <a className="navbar-brand" href="http://codehala.org/" target="new" data-placement="bottom"  data-toggle="popover" data-trigger="hover" data-content="Drawit is an online code editing platform, currently providing HTML,CSS and JavaScript support.">
                    <span id="brand"> Learn Here</span>
                    <img src={logo} className="ml-2" width="30px" alt="logo"/>
                </a>
                
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <ListItem title = "New"           link="/"            other="" />
                        <ListItem title = "Save"          link="/user1"       other="" />
                        <ListItem title = "Developers"    link="/Developers"  other="" />
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar
