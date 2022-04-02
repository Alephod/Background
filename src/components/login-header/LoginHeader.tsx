import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './LoginHeader.scss';

interface Props {
    title?: string;
    className?: string;
}

export function LoginHeader({ title, className }: Props) {
    return (
        <Link className={`login-header ${className ? className : ''}`} to="/auth">
            <FontAwesomeIcon icon={faSignInAlt} />
            {title}
        </Link>
    );
}
