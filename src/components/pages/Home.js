import React from 'react';
import '../css/home.css';

const Home = () => {
    return (
        <div>
            <div className="ui home container">
                <div className="ui vertical masthead center aligned segment">
                    <div classname="ui text container">
                        <h1 className="ui header">Hello, my name is  
                            <span className="ui header"> Logan</span>!
                        </h1>
                        <h2>Front-End Web Developer, at your service.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="ui horizontal divider">About Me</div>
        </div>
    );
}

export default Home;