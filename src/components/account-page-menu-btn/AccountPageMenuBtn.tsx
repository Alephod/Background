import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './AccountPageMenuBtn.scss';

interface Props {
    icon: any;
    title: string;
    to: string;
    mode?: string;
    setMode?: (state: string) => void;
    isActive?: boolean;
    className?: string;
    isExit?: boolean;
}

export function AccountPageMenuBtn({ icon, title, to, isActive, className, mode, ...props }: Props) {
    const authContext: any = useContext(AuthContext);

    const setMode = () => {
        props.setMode && mode && props.setMode(mode);
    };

    if (props.isExit) return (
        <Link onClick={authContext.setLogout} to={to} className={`account-page-menu-btn account-page-menu-btn_exit ${className ? className : ''}`}>
            <div className="account-page-menu-btn__icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            {title}
        </Link>
    );

    return (
        <Link onClick={setMode} to={to} className={`account-page-menu-btn ${className ? className : ''} ${isActive ? 'account-page-menu-btn_active' : ''}`}>
            <div className="account-page-menu-btn__icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            {title}
        </Link>
    );
}
