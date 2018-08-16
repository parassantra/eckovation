import React, {Component} from 'react';
class DropItem extends Component
{
    render()
    {
        
        const code = "fas fa-" + this.props.i;
        return(
            <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle btn btn-primary" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className={code}></i> {this.props.title}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" ><i className="fas fa-align-left"></i>&nbsp;&nbsp; Left</a>
                    <a className="dropdown-item" ><i className="fas fa-align-left"></i>&nbsp;&nbsp; Up</a>
                    <a className="dropdown-item" ><i className="fas fa-align-right"></i>&nbsp;&nbsp;Right</a>
                    <a className="dropdown-item"  ><i className="fas fa-align-right"></i>&nbsp;&nbsp;Down</a>  
                </div>
            </li>
        );
    }
}
export default DropItem
