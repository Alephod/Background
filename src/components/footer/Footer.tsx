import { faFacebookF, faInstagram, faTwitter, faVk } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import './Footer.scss';

export function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <div className="footer-item">
                    <p className='footer-item__title'>Наши соцсети</p>
                    <a href="https://vk.com" className='footer-item__link'>
                        <div className="footer-item__icon"><FontAwesomeIcon icon={faVk} /></div>
                        ВКонтакте
                    </a>
                    <a href="https://facebook.com" className='footer-item__link'>
                        <div className="footer-item__icon"><FontAwesomeIcon icon={faFacebookF} /></div>
                        Facebook
                    </a>
                    <a href="https://twitter.com" className='footer-item__link'>
                        <div className="footer-item__icon"><FontAwesomeIcon icon={faTwitter} /></div>
                        Twitter
                    </a>
                    <a href="https://instagram.com" className='footer-item__link'>
                        <div className="footer-item__icon"><FontAwesomeIcon icon={faInstagram} /></div>
                        Instagram
                    </a>
                </div>
                <div className="footer-item">
                    <p className='footer-item__title'>Политика конфиденциальности</p>
                    <Link to="/privacy-policy" className='footer-item__link'>
                        Политика конфиденциальности
                    </Link>
                    <Link to="/cookies" className='footer-item__link'>
                        Настройка cookie
                    </Link>
                    <Link to="/rules" className='footer-item__link'>
                        Правила пользования
                    </Link>
                </div>
                <div className="footer-item">
                    <p className='footer-item__title'>Наши контакты</p>
                    <a href="tel:+78005553535" className='footer-item__link'>
                        <div className="footer-item__icon"><FontAwesomeIcon icon={faPhoneAlt} /></div>
                        +78005553535
                    </a>
                    <a href="mailto:background-support@gmail.com" className='footer-item__link'>
                        <div className="footer-item__icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                        background-support@gmail.com
                    </a>
                </div>
                <div className="footer-item">
                    <p className='footer-item__title'>Подпишитесь на нашу рассылку</p>
                    <form className='footer-item__email' action="post">
                        <input type="text" name="" id="" placeholder='Email адрес' />
                        <Button isSubmit title={'ОК'} />
                    </form>
                </div>
            </div>
        </footer>
    );
}
