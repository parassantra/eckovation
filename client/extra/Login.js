import React, { Component } from 'react';
import './App.css';
class Login extends Component
{
    render()
    {
        function chec()
        {
            {this.props.logfun()}
        };   
        return (
            <div className="modal fade " id="login">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        
                        <div className="modal-header">
                            <h4 className="modal-title">New or Existing User</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div> 
                        <div className="modal-body" >
                        
                        <a onClick={chec}> Click </a>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">   <a className="nav-link active" data-toggle="tab" href="#Login" role="tab" aria-controls="home" aria-selected="true">Login</a>    </li>
                            <li className="nav-item">   <a className="nav-link" data-toggle="tab" href="#Register" role="tab" aria-controls="profile" aria-selected="false">Register</a>     </li>        
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="Login" role="tabpanel">
                                <form id="loginform" onSubmit={loginfun} method="POST">
                                        <div className="input-group mt-4">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Username" id='loginUser' required  />
                                        </div>

                                        <div className="form-group mt-3">
                                        <input type="password" className="form-control" name="password" id="loginKey" placeholder="Password" required minLength="6"/>
                                        <small  className="form-text invalid" id='loginerror'></small>                                    
                                        </div>
                                        
                                        <div className="modal-footer mt-4">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                        <button id="hideModal" type="button" className="btn btn-danger" data-dismiss="modal"> Close </button>
                                        </div>
                                </form>                                        
                            </div>      
                            <div className="tab-pane fade" id="Register" role="tabpanel">
                                <form id="register" onSubmit={registerfun} method="POST">
                                        <div className="form-group mt-2">
                                        <label>Username</label>
                                        <input type="text" className="form-control" id="rUser" placeholder="Enter username" required />
                                        <small  className="form-text invalid" id='uerror'></small>                                    
                                        </div>

                                        <div className="form-group">
                                        <label>Password</label> 
                                        <input type="password" className="form-control" id="rKey" placeholder="Password" required minLength="6" />
                                        </div>
                                        
                                        <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" id="rEmail" placeholder="Enter email" required />
                                        <small  className="form-text invalid" id='merror'></small>                                    
                                        <small  className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        
                                        <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                        <button className="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        function closeErrors(){
            document.getElementById('uerror').innerHTML = "";
            document.getElementById('merror').innerHTML = "";
            document.getElementById('loginerror').innerHTML = "";
        }
        function registerfun(e) {
            e.preventDefault();
            registerFunc();
        }
        function loginfun(e) {
            e.preventDefault();
            loginFunc();
        }
        async function registerFunc()
        {
            closeErrors();
            var info = { username : document.getElementById('rUser').value , key : document.getElementById('rKey').value , email : document.getElementById('rEmail').value };
            var res = await fetch('/register', { 
                method: 'POST',
                body:    JSON.stringify(info),
                headers: { 'Content-Type': 'application/json' },
            });
            var data = await res.json();
            if( data.response === '1' )
            document.getElementById('uerror').innerHTML = "Username already taken";
            else if( data.response === '2' )
            document.getElementById('merror').innerHTML = "Email exists with another account";
            else 
            {
                document.getElementById("hideModal").click();
                // /////////////////////////////////////////////////////////
            }
        }
        async function loginFunc()
        {
            closeErrors();
            var info = { username : document.getElementById('loginUser').value , key : document.getElementById('loginKey').value };
            var res = await fetch('/login', { 
                method: 'POST',
                body:    JSON.stringify(info),
                headers: { 'Content-Type': 'application/json' },
            });
            var data = await res.json();
            if( data.valid === false )
            document.getElementById('loginerror').innerHTML = "Invalid Username / Password ";
            else
            {
                document.getElementById("hideModal").click();
                ////////////////////////////////////////////////
            }
        }
    };
        
}
export default Login;   