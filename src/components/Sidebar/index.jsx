import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faCode, faBook } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import Logo from '../../assets/jm_logo.png';

const Sidebar = () => (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt="logo"/>
                <h1>jan</h1>
            </Link>
            <nav>
                <NavLink exact="true" activeClassName="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="about-link" to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="career-link" to='/career'>
                    <FontAwesomeIcon icon={faBook} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="projects-link" to='/projects'>
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="contact-link" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul> 
                <li>
                    <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/janmzn/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://github.com/mvte"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
)

export default Sidebar;