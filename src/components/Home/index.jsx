import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Donut from './Donut';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = " jan".split("");
    const jobArray = "cs + math student.".split("");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    });

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1> 
                        <span className={letterClass}>h</span>
                        <span className={letterClass + ' _12'}>i,</span>
                        <br />
                        <span className={letterClass + ' _13'}>i</span>
                        <span className={letterClass + ' _14'}>'m</span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
                    </h1>
                    <h2> rutgers university / incoming swe at bloomberg / made the donut </h2>
                    <Link to="/contact" className='flat-button'>contact me</Link>
                </div>
                <Donut />
            </div>
            <Loader type='cube-transition' />
        </>
    )
}

export default Home;