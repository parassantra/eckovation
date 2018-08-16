import React, {Component} from 'react';
class ListItem extends Component
{
    render()
    {
        const code = "fas fa-" + this.props.i;
        return(
            <li className = "nav-item  btn btn-outline-primary" >
                <a className="nav-link" href={this.props.link} data-toggle={this.props.other1} data-target={this.props.other2}>
                    {this.props.title}
                </a> 
            </li>
        );
    }
}
export default ListItem
