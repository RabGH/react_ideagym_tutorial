import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className='conatiner footer__container'>
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Ex id mollit sunt duis ullamco. Sunt aliqua ut commodo pariatur est. Qui eiusmod dolor proident consectetur.
                </p>
                <div className='footer__socials'>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener" >
                        <FaLinkedin />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener" >
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener" >
                        <AiOutlineTwitter />
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener" >
                        <AiFillInstagram />
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to='/about' className="footer-link">About</Link>
                <Link to='/plans' className="footer-link">Plans</Link>
                <Link to='/trainers' className="footer-link">Trainers</Link>
                <Link to='/gallery' className="footer-link">Gallery</Link>
                <Link to='/contact' className="footer-link">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/s' className="footer-link">About</Link>
                <Link to='/s' className="footer-link">Case Studies</Link>
                <Link to='/s' className="footer-link">Events</Link>
                <Link to='/s' className="footer-link">Communities</Link>
                <Link to='/s' className="footer-link">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to='/contact' className="footer-link">Contact Us</Link>
                <Link to='/plans' className="footer-link">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 Gym Freak Web Test &copy; Tutorial RabGh</small>
        </div>
    </footer>
  )
}

export default Footer