import './AccountPageMenu.scss';
import { faUser, faShoppingCart, faAddressBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AccountPageMenuBtn } from '../account-page-menu-btn/AccountPageMenuBtn';

interface Props {
    setMode: (state: string) => void;
    mode: string;
    id: string;
}

export function AccountPageMenu({ setMode, mode, id }: Props) {
    return (
        <div className="account-page-menu">
            <p className="account-page-menu__title">Учетная запись</p>
            <AccountPageMenuBtn
                mode="account"
                setMode={setMode}
                className="account-page-menu__btn"
                to={`/user/${id}?mode=account`}
                icon={faUser} title={'Аккаунт'}
                isActive={mode == 'account'}
            />
            <AccountPageMenuBtn
                mode="address"
                setMode={setMode}
                className="account-page-menu__btn"
                to={`/user/${id}?mode=address`}
                icon={faAddressBook}
                title={'Список адресов'}
                isActive={mode == 'address'}
            />
            <AccountPageMenuBtn
                mode="cart"
                setMode={setMode}
                className="account-page-menu__btn"
                to={`/user/${id}?mode=cart`}
                icon={faShoppingCart}
                title={'Корзина'}
                isActive={mode == 'cart'}
            />
            <AccountPageMenuBtn
                className="account-page-menu__btn account-page-menu__btn_exit"
                to="/auth"
                icon={faSignOutAlt}
                title={'Выход'}
            />
        </div>
    );
}
