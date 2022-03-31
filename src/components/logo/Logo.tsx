import { Link } from 'react-router-dom';
import logoSrc from './../../img/logo.png';
import './Logo.scss';
export function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logoSrc} alt="" />
            </Link>
        </div>
    );
}
