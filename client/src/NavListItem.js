import React, {Component} from 'react';
class ListItem extends Component
{
    render()
    {
        return(
            <li className = "nav-item  btn btn-outline-dark ml-1 mr-1" >
                <a className="nav-link" href={this.props.link}>
                    {this.props.title}
                </a> 
            </li>
        );
    }
}
export default ListItem
