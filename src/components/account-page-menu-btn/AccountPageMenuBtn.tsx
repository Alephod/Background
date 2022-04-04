import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './AccountPageMenuBtn.scss';

interface Props {
    icon: any;
    title: string;
    to: string;
    mode?: string;
    setMode?: (state: string) => void;
    isActive?: boolean;
    className?: string;
    onClick?: any;
}

export function AccountPageMenuBtn({ icon, title, to, isActive, className, mode, ...props }: Props) {
    const setMode = () => {
        props.setMode && mode && props.setMode(mode);
    };

    return (
        <Link onClick={setMode} to={to} className={`account-page-menu-btn ${className ? className : ''} ${isActive ? 'account-page-menu-btn_active' : ''}`}>
            <FontAwesomeIcon icon={icon} />
            {title}
        </Link>
    );
}
