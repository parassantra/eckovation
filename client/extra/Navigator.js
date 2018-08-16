import React, { Component } from 'react';
class Navigator extends Component
{
    render()
    {
        return (
            <ul className="nav nav-tabs bg-light border-0" id="codeSelection">
                &nbsp;&nbsp;&nbsp;
                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#code_html"><h6>HTML</h6></a></li>
                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#code_css"><h6>       CSS  </h6> </a></li>
                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#code_js"><h6>  JavaScript </h6></a></li>
                <span className="desktop">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                <li className="nav-item btn-success" ><a  className="nav-link" id="go" onClick={this.props.go} > GO </a> </li>
                
                <li className="nav-item ml-auto"><a className="nav-link" id="useflag" data-toggle="tooltip" data-placement="bottom" title="Rollback to the last saved flag.">i</a></li>
                <li className="nav-item btn-info"><a className="nav-link" id="flag"   data-toggle="tooltip" data-placement="bottom" title="Save Flag"> <i className="far fa-flag"></i></a></li>&nbsp;
            </ul>
        );
    }
}
export default Navigator;