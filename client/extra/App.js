import React, { Component } from 'react';
import Navbar from './Navbar';
import Body from './body';
import Developers from './Developers';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.saveStatus = true;
    }
    saveToggler = () =>
    {
        this.saveStatus = this.saveStatus == true ? false : true; 
    }
	render()
	{
		return (
            <div>
                <Navbar  />
                <Router>
                    <Switch>
                        <Route path={"/"} exact component={ Body  } />
                        <Route path={"/Developers"} component={ Developers } />
                        <Route path={"/:id"} component={ Body }  />
                    </Switch>
                </Router>  
            </div>
        );
	}
}

export default App;
