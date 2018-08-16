import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/javascript';
import 'brace/theme/xcode';

import 'brace/snippets/html';
import 'brace/snippets/css';
import 'brace/snippets/javascript';
import 'brace/ext/language_tools';

class Editor extends Component
{
    constructor(props)
    {
        super(props);
        this.HTML = this.props.html;
        this.script = this.props.js;
        this.style = this.props.css;
    }
    componentWillReceiveProps(nextProps) {
        this.HTML = nextProps.html;
        this.script = nextProps.js;
        this.style = nextProps.css;
    }
    render()
    {
        return (
            <div className="tab-content">
                <div id="code_html" className="tab-pane fade show active">
                
                <AceEditor
                        mode="html"
                        theme="xcode"
                        name="editorHTML"
                        onLoad={this.onLoad}
                        onChange={this.props.hevent}
                        fontSize={14}
                        width="100%"
                        value={this.HTML}
                        editorProps={{$blockScrolling: Infinity}}
                        setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        showLineNumbers: true,
                        tabSize: 3,
                    }}/>
                </div>
                <div id="code_css" className="tab-pane fade">
                    <AceEditor
                        mode="css"
                        theme="xcode"
                        name="editorCSS"
                        onLoad={this.onLoad}
                        onChange={this.props.cevent}
                        fontSize={15}
                        width="100%"
                        value={this.style}
                        editorProps={{$blockScrolling: Infinity}}
                        setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        showLineNumbers: true,
                    }}/>
                </div>
                <div id="code_js"   className="tab-pane fade">
                    <AceEditor
                        mode="javascript"
                        theme="xcode"
                        name="editorJS"
                        onLoad={this.onLoad}
                        onChange={this.props.jevent}
                        fontSize={14}
                        width="100%"    
                        value={this.script}
                        editorProps={{$blockScrolling: Infinity}}
                        setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2,
                    }}/>
                </div>
            </div>
        );
    };
}
export default Editor;