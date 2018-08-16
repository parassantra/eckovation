import React, { Component } from 'react';
import Editor from './Editor';
import Navigator from './Navigator';
class Body extends Component
{
    constructor(props)
    {
        super();
        this.html = '';
        this.script = '';
        this.style = '' ;
        this.state = { flag : '0' };
    }
    componentWillMount()
    {
        if( this.props.match.params.id )
            this.loadCode();
    }
    saveFunction = () => {
        var url = prompt('dalo','Enter');
        var body = { html : this.html , css : this.style , js : this.script , url : url  };
        fetch('save', { 
            method: 'POST',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => console.log(json));
    };
    render()
    {
        return (
            <div>
                <Navigator go={this.renderOutput.bind(this)} />
                <div className="row no-gutters" >
                    <div className="col-lg-4 order-1 col-md-12 border-right" id="col4" >
                        <button className="btn btn-primary" onClick={this.saveFunction} > Click here to save </button>
                        <Editor 
                            html={this.html}        hevent={this.changeHTML.bind(this)}
                            css={this.style}        cevent={this.changeCSS.bind(this)}
                            js={this.script}        jevent={this.changeJS.bind(this)}
                        />
                    </div>
                    <div className="col-lg-8 order-2 col-md-12" id="col8">
                        <iframe id="output" title="output">     </iframe>
                    </div>
                </div>
            </div>
        );
    }

    changeHTML(Val) { 
        this.html = Val;
        this.renderOutput();
    }
    changeCSS(Val) { 
        this.style = Val;
        this.renderOutput();
    }
    changeJS(Val) { 
        this.script = Val;
        this.renderOutput();
    }    
    renderOutput = () => {
        var x = document.getElementById("output"); 
        var y = (x.contentWindow || x.contentDocument);
            y.close();
        if (y.document)y = y.document;
            y.close(); 
        const result = " <style> " + this.style +" </style> <script>" + this.script + " </script> " + this.html;
        y.write(result);
        console.clear();
    }

    loadCode = () => {
        this.callApi()
            .then(res => { this.script = res.JS; this.html = res.html; this.style = res.CSS; this.setState({ flag : '1' }) } )
            .catch(err => console.log(err));
    };
    callApi = async () => {
        const a = "/url/" + this.props.match.params.id;
        const response = await fetch(a);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

}
export default Body;