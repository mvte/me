import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import Portrait from '../../assets/IMG_2154.png';
import './index.scss'

const About = () => {
    
    const[letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    });

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"about me.".split('')}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a recent graduate at Rutgers University, completing a double major in Computer Science and Mathematics.
                    </p>
                    <p>
                        I'm passionate about building software that is both functional and beautiful, creating user experiences
                        that are intuitive yet enjoyable, all while learning new technologies and frameworks.
                        I'm also deeply interested in artificial intelligence and machine learning, an industry which
                        I hope to pursue and research in the future.
                    </p>
                    <p>
                        In my free time, I enjoy watching TV shows, reading, and playing with my cat Levi. I'm currently watching 
                        "Offline Love" on Netflix and "Severance" on Apple TV. Once I have the free time (and motivation), I'll
                        definitely get to reading "Dune" by Frank Herbert. And my cat Levi is super cool, his favorite morning activity 
                        is looking through the window while sitting on my couch. 
                    </p>
                    <p>
                        I've recently accepted an offer to join Bloomberg as a full-time SWE this coming April :)
                    </p>
                </div>
                <img className='me' src={Portrait} alt='me' />
                <div className="clear" />
            </div>
            <Loader type='cube-transition' />
        </>
    );
}

export default About