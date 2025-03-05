import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import './index.scss'
import TimelineCard from './TimelineCard';

const Career = () => {
    const[letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    });

    return (
        <>
            <div className='container careers-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"career.".split('')}
                            idx={15}
                        />
                    </h1>
                    <div className="timeline">
                        <TimelineCard
                            company="Bloomberg"
                            location="New York, NY"
                            position="Software Engineer"
                            date="April 2025"
                            description="???"
                        />
                        <TimelineCard
                            company="Colgate-Palmolive"
                            location="Piscataway, NJ"
                            position="Application & Software Development Intern"
                            date="September 2024 - December 2024"
                            description="HR Applications"
                        />
                         <TimelineCard
                            company="Hack4Impact"
                            location="Rutgers Chapter"
                            position="Backend Developer"
                            date="September 2023 - December 2024"
                            description="Backend (MERN)"
                        />
                        <TimelineCard
                            company="Verizon"
                            location="Basking Ridge, NJ"
                            position="Software Engineer Intern"
                            date="June 2024 - August 2024"
                            description="AI Automation"
                        />
                        <TimelineCard
                            company="Colgate-Palmolive"
                            location="Piscataway, NJ"
                            position="Application & Software Development Intern"
                            date="January 2024 - May 2024"
                            description="Internal Dependencies"
                        />
                        <TimelineCard
                            company="Verizon"
                            location="Basking Ridge, NJ"
                            position="Software Engineer Intern"
                            date="Summer 2023"
                            description="Frontend Architecture"
                        />
                        <TimelineCard
                            company="Apple"
                            location="Edison, NJ"
                            position="Technical Expert"
                            date="August 2022 - May 2023"
                            description="Genius Bar"
                        />
                    </div>
                </div>
                <div className="clear" />
            </div>
            <Loader type='cube-transition' />
        </>
    );
}

export default Career;