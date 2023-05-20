import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_8hlk4fm',
                'template_l8c8cda',
                refForm.current,
                'OnxCbPytSPakA2QXI'
            ).then(
                () => {
                    alert('message sent successfully!');
                    //window.location.reload(false);
                },
                () => {
                    alert('message failed to send, please try again');
                }
            )
    }

    return  (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={"contact me.".split("")}
                            idx={16}
                        />
                    </h1>
                    <p>
                        If you are interested in my work and want to get in touch, don't hesitate to contact me.
                        Feel free to use the form below.
                    </p>   
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='email' required/>
                                </li>
                                <li>
                                    <input placeholder='subject' type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='send'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='cube-transition' />
        </>
    )
}

export default Contact