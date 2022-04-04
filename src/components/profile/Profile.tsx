import './Profile.scss';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface Props {
    className?: string;
    /**
     * Кол-во товаров в корзине
    */
    cartCount: number;
}

export function Profile({ className, cartCount }: Props) {
    const classname: string = className ? className : '';
    return (
        <div className={`profile ${classname}`}>
            <Link to='/user/jsinsia?mode=account' className="profile__link">
                <FontAwesomeIcon icon={faUser} />
                <span className="profile__text">Аккаунт</span>
            </Link>
            <Link to="/user/jsinsia?mode=cart" className="profile__cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="profile__cart-count">{cartCount}</span>
                <span className="profile__text">Корзина</span>
            </Link>
        </div>
    );
}
