import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import './index.scss'
import RobotGuidance from './ProjectAssets/robot-guidance.mov';
import Aliens from './ProjectAssets/aliens.mov';
import HomeServer from './ProjectAssets/home-server.jpg';
import Scout from './ProjectAssets/scout.jpg';
import Maestro from './ProjectAssets/maestro.jpg';

const Projects = () => {
    
    const[letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    });

    return (
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"projects.".split('')}
                            idx={15}
                        />
                    </h1>
                    <div className="project">
                        <div className="information">
                            <h2>
                                robot guidance - learned spatial awareness
                            </h2>
                            <div className="caption">
                                    april 2024 | python, pytorch, numpy, seaborn
                            </div>
                            <div className="description">
                                <p>
                                    An exploration of various machine learning algorithms and techniques. The goal of the project was to develop an
                                    autonomous agent that is capable of guiding a somewhat random moving crew member to a central location on a dynamically 
                                    structured grid world. Multiple AI/ML algorithims were employed and tested, including Policy Iteration, Supervised Learning, 
                                    and Proximal Policy Optimization. 
                                </p>
                            </div>
                            <a href="https://github.com/mvte/robot-guidance" className='flat-button'>view</a>
                        </div>
                        <div className="imageHolder">
                            <video autoPlay loop muted height="300px">
                                <source src={RobotGuidance} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <hr />
                    
                    <div className="project">
                        <div className="information">
                                <h2>
                                    aliens - probabilistic decision making
                                </h2>
                                <div className="caption">
                                        march 2024 | python, numpy, cupy, seaborn, bayesian inference
                                </div>
                                <div className="description">
                                    <p>
                                        A project that explored the use of Bayesian inference to make decisions in a probabilistic and adverse environment. The project 
                                        involved developing an autonomous agent that is capable of navigating a grid-like ship, avoiding aliens, and rescuing crew members
                                        all while receiving limited information. The agent uses a Bayesian network to model the environment and make decisions based on the 
                                        information it has. In the demo to the right, you can see the agent (red) in action, avoiding aliens (purple) and rescuing crew members
                                        (orange) while updating its beliefs about the environment. The middle graph is where the agent believes the crew members are, and the
                                        right graph is where the agent believes the aliens are.
                                    </p>
                                </div>
                                <a href="https://github.com/mvte/aliens" className='flat-button'>view</a>
                            </div>
                            <div className="imageHolder">
                            <video autoPlay loop muted height="180px">
                                <source src={Aliens} type="video/mp4" />
                            </video>
                            </div>
                    </div>
                    <hr />

                    <div className="project">
                        <div className="information">
                            <h2>
                                home server
                            </h2>
                            <div className="caption">
                                    may 2023 | linux/unix, docker, nginx, ftps, ssh
                            </div>
                            <div className="description">
                                <p>
                                    A home server that I've been building and maintaining on the Beelink SER5 platform since May of 2023. The server is a self-hosted Linux machine that runs 
                                    various services, such as my Discord bots (along with their databases) and a minecraft server. The machine's services are dockerized and it uses Nginx as a reverse 
                                    proxy to route traffic to the appropriate services. In addition to the services mentioned, this machine also utilizes a Watchtower container,
                                    which ensures seamless updates of my containers with near-zero downtime. Combined with GitHub Actions, I've managed to 
                                    create an efficient CI/CD pipeline for the personal projects that I host on this machine.
                                    I've also used it to run intensive machine-learning jobs for the projects above. 
                                </p>
                            </div>
                        </div>
                        <div className="imageHolder">
                            <img src={HomeServer} height="240px" alt="home server" />
                        </div>
                    </div>
                    <hr />

                    <div className="project">
                        <div className="information">
                            <h2>
                                mc-dash
                            </h2>
                            <div className="caption">
                                    may 2023 | mongodb, express, react, node, docker, linux
                            </div>
                            <div className="description">
                                <p>
                                    A dashboard for managing and monitoring a Minecraft server for a small community. The server itself is self-hosted and dockerized 
                                    on my Linux machine. The dashboard communicates with the server via a RESTful API, and provides a user-friendly interface for 
                                    managing server settings, interacting with the server console, viewing a real-time map of the world, and monitoring server 
                                    performance/information. To view the site, use the test user credentials: username: user, password: password.
                                </p>
                            </div>
                            <a href="https://dash.mvte.net/" className='flat-button'>view</a>
                        </div>
                        <div className="imageHolder">
                        </div>
                    </div>
                    <hr />
                    
                    <div className="project">
                        <div className="information">
                            <h2>
                                scout
                            </h2>
                            <div className="caption">
                                    jan 2023 | java, sql, docker
                            </div>
                            <div className="description">
                                <p>
                                    A Discord bot that notifies Rutgers students when a class they are interested in has an opening. The bot is written in Java using 
                                    the JDA library. It's hosted on a local machine and communicates with a MySQL database to store user snipes and Rutgers course
                                    information. It leverages parallel processing, proximity to Rutgers, and in-memory caching to maintain an edge over
                                    other sniping bots.
                                </p>
                            </div>
                            <a href="https://github.com/mvte/scout" className='flat-button'>view</a>
                        </div>
                        <div className="imageHolder">
                            <img src={Scout} height="240px" alt="scout logo" />
                        </div>
                    </div>
                    <hr />

                    <div className="project">
                        <div className="information">
                            <h2>
                                maestro
                            </h2>
                            <div className="caption">
                                    may 2022 | java, sql, docker
                            </div>
                            <div className="description">
                                <p>
                                    A Discord bot that allows users to play music in a voice channel, play casino games, like blackjack, with each other, and
                                    access various quality of life commands.  Like scout, it's written in Java using the JDA library and hosted on the same machine. 
                                    It uses a MySQL database to store user information and game data. 
                                </p>
                            </div>
                            <a href="https://github.com/mvte/maestro" className='flat-button'>view</a>
                        </div>
                        <div className="imageHolder">
                            <img src={Maestro} height="240px" alt="maestro logo" />
                        </div>
                    </div>
                    <hr />

                    <div className="space" />
                </div>
            </div>
            <Loader type='cube-transition' />
        </>
    );
}

export default Projects