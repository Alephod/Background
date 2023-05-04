import { Link } from 'react-router-dom';
import logoSrc from './../../img/logo.png';

import './Logo.scss';
export function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <img className="logo__desktop" src={logoSrc} alt="" />
                <img className="logo__mobile" src='./../../img/logo-mobile.png' alt="" />
            </Link>
        </div>
    );
}
