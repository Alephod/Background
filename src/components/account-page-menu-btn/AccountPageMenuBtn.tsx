import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
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
    const userContext: any = useContext(UserContext);

    const setMode = () => {
        props.setMode && mode && props.setMode(mode);
    };

    if (props.isExit) return (
        <Link onClick={userContext.setLogout} to={to} className={`account-page-menu-btn account-page-menu-btn_exit ${className ? className : ''}`}>
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
