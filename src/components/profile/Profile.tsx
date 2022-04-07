import './Profile.scss';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { UserContext } from '../../context/UserContext';

interface Props {
    className?: string;
}

export function Profile({ className }: Props) {
    const { setClosed }: any = useContext(MenuContext);
    const userContext: any = useContext(UserContext);

    const classname: string = className ? className : '';
    return (
        <div className={`profile ${classname}`}>
            <Link onClick={setClosed} to='/user/jsinsia?mode=account' className="profile__link">
                <FontAwesomeIcon icon={faUser} />
                <span className="profile__text">Аккаунт</span>
            </Link>
            <Link onClick={setClosed} to="/user/jsinsia?mode=cart" className="profile__cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="profile__cart-count">{userContext.cartCount || 0}</span>
                <span className="profile__text">Корзина</span>
            </Link>
        </div>
    );
}
