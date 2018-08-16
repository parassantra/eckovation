import React, { Component } from 'react';
class Body extends Component
{
    constructor(props)
    {
        super(props);
    }
    componentWillMount()
    {
        
    }
    render()
    {
        return (
            <div className=" row no-gutters justify-content-around">
                <div class="card col-md-3 m-5" >
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card col-md-3 m-5" >
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card col-md-3 m-5" >
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        );
    }
}
export default Body;