import React, { Component } from 'react';
import Navbar from './Navbar';
import Body from './body';
import Course from './Courses';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component
{
	render()
	{
		return (
            <div>
                <Navbar  />
                <Router>
                    <Switch>
                        <Route path={"/"} exact component={ Body  } />
                        <Route path={"/Course"} component={ Course } />
                        <Route path={"/:id"} component={ Body }  />
                    </Switch>
                </Router>  
            </div>
        );
	}
}

export default App;
