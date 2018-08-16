import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
class Course extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            courseName : "React Native",
            info : "Use React Native and your React knowledge and take your web development skills to build native iOS and Android App.",
            author : "Utsav Chawla",
            learn : [
                'Introduction to Machine Learning',
                'Basic Concepts of Machine Learning',
                'Linear Regression, Polymer Regression, Logistic Regression',
                'Neural Network and Deep Learning'
            ],
            videos : [
                'https://www.youtube.com/embed/D0GU-A8XNIA',
                'https://www.youtube.com/embed/neTl7g7dGqI',
                'https://www.youtube.com/embed/haI01OWwFPk',
                'https://www.youtube.com/embed/1KUQrCjbIZA',
                'https://www.youtube.com/embed/D0GU-A8XNIA',
                'https://www.youtube.com/embed/neTl7g7dGqI',
                'https://www.youtube.com/embed/haI01OWwFPk',
                'https://www.youtube.com/embed/1KUQrCjbIZA'
            ],
        };
    }
    componentDidMount()
    {
        this.loadCode();
    }
    
    loadCode = () => {
        this.callApi()
            .then(res => { console.log(res); console.log('reterived') } )
            .catch(err => console.log(err));
    };
    callApi = async () => {
        const a = "/find/2";
        const response = await fetch(a);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };
    render()
    {
        function playVideo   ()     {
            ReactDOM.render( 
                <center>
                    <iframe width="95%" height='768px'
                        src='https://www.youtube.com/embed/D0GU-A8XNIA'>
                    </iframe>
                </center> 
            , document.getElementById('playArea'));
        }
        return(
            <div>
                <nav className='rm-margin'>
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item ml-5">               <a href="/">    Home    </a>    </li>
                        <li className="breadcrumb-item active" aria-current="page"> {this.state.courseName} </li>
                        </ol>
                </nav>
                <div className="row no-gutters bg-dark ">
                    <div className="col-md-7 ml-5">
                        <div className="container m-5">
                            <h3>                    {this.state.courseName}             </h3>
                            <p className='cInfo'>   {this.state.info}                   </p>
                            <div><i className="fas fa-star gold"></i><i className="fas fa-star gold"></i><i className="fas fa-star gold"></i><i className="fas fa-star gold"></i><i className="fas fa-star"></i></div>
                            <label className='text-muted mt-2'> Author :                </label>                &nbsp;
                            <label id="author">     {this.state.author}                 </label> 
                        </div>
                    </div>
                    <div className="col-md-4 m-3 mt-4">
                            <center>
                            <div className="card card1">
                                <img className="card-img-top" width='100%' src="https://cdn-images-1.medium.com/max/1200/1*3CXBOKNql4qS-lRyHT3pqw.png" alt="Course img" />
                                <div className="card-body">
                                    <a className='btn-danger btn-lg    shadow-none btn-block'> FREE TRIAL </a> 
                                </div>
                            </div>
                            </center>
                    </div>
                    
                </div>
                
                <div className="container m-5">
                        <div className="card">
                        <div className="card-header">
                            <h3> What Will I Learn? </h3>
                        </div>
                        <div className="card-body row no-gutters justify-content-around">
                            { 
                                this.state.learn.map((item, i) => 
                                    <div className = 'col-5 m-3' >
                                    <p className="card-text" key={i}> 
                                        <i className="fa fa-check mr-2" aria-hidden="true"></i>
                                        {item} 
                                    </p>
                                    </div>)
                            }
                        </div>
                        </div>
                </div>

                <div id='playArea'>
                </div>
                <div className=' container'>
                <div className="card" >
                        <div className="card-header">
                        Videos
                        </div>
                        <ul className="list-group list-group-flush">
                        { 
                            this.state.videos.map((item, i) => 
                            <li className="list-group-item" onClick={playVideo} key={i}> 
                                    Video&nbsp;{i+1}
                                </li>
                            )
                        }
                        </ul>
                        </div>
                </div>
                    <a onClick={playVideo}> sdadsasa</a>
            </div>
        );
    }
}
export default Course
