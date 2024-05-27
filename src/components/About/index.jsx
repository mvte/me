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
                        I'm a rising senior at Rutgers University, pursuing a double major in Computer Science and Mathematics.
                    </p>
                    <p>
                        I'm passionate about building software that is both functional and beautiful, creating user experiences
                        that are intuitive yet enjoyable, all while learning new technologies and frameworks.
                        I'm also deeply interested in artificial intelligence and machine learning, an industry which
                        I hope to pursue and research in the future.
                    </p>
                    <p>
                        In my free time, I enjoy working on personal projects, reading books, and playing video games. My current project is in the works, and
                        I'm excited to share it with you soon. I'm currently reading "Dune" by Frank Herbert, as well as "Algorithmic Trading and Reinforcement Learning"
                        by Thomas Spooner (hint: my next project is related to this paper!). As for games, I'm playing Terraria and NIGHTRUNNER right now :)
                    </p>
                    <p>
                        I'm looking to gain valuable work experience in computer science, mathematics, and academia. I'm
                        seeking research opportunities and full time positions for 2025, where I hope to demonstrate
                        and foster skills in software development, problem solving, and team communication.
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