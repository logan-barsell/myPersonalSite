import React from 'react';
import '../css/home.css';

const Home = () => {
    return (
        <div>
            <div className="home container">
                <div className="masthead">
                    <div classname="container">
                        <h1 className="header">Hello, my name is  
                            <span className="header"> Logan</span>!
                        </h1>
                        <h2>Front-End Web Developer, at your service.</h2>
                        <div className="col-4">
                            <button type="button" class="btn btn-outline-dark btn-lg">
                                Let's talk
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                                </svg>
                            </button>
                            
                        </div>
                        
                    </div>
                </div>

            <div className="aboutMe bg-dark text-white text-center rounded row justify-content-center">
                <h3 className="d-flex align-items-center justify-content-center">About Me</h3>
                <div className="col-6 border border-light rounded">
                    <img src="..." class="img-fluid" alt="..."></img>
                </div>
                
                <p className="d-flex align-items-center justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat sollicitudin felis, in efficitur justo. Morbi fermentum faucibus sapien, quis placerat diam venenatis id. Maecenas id mauris luctus, tincidunt quam vel, facilisis arcu. Mauris ut lacinia enim, eget condimentum odio. Cras sit amet consectetur orci. Vestibulum diam sem, mattis vitae consequat a, cursus et quam. Vestibulum elementum feugiat ullamcorper. Sed non venenatis mauris. Etiam lacus ex, blandit in faucibus et, posuere a quam. Quisque vehicula, est at dapibus efficitur, quam sem tempus odio, et blandit ex erat pretium est. Proin blandit blandit urna, sed commodo justo lacinia vitae. Proin porta nisl at mauris elementum aliquet convallis et sem. Curabitur rutrum ex porta mauris lobortis, et interdum lacus facilisis. In tristique turpis sit amet turpis mattis lacinia. Aliquam erat volutpat. Sed faucibus erat ut nisi ultricies, in laoreet dolor efficitur.</p>
            </div>
                
            </div>
        </div>
    );
}

export default Home;