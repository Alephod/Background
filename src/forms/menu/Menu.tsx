import { useContext, useState } from 'react';
import { Burger } from '../../components/burger/Burger';
import { LoginHeader } from '../../components/login-header/LoginHeader';
import { MenuNav } from '../../components/menu-nav/MenuNav';
import { Profile } from '../../components/profile/Profile';
import { SearchForm } from '../../components/search-form/SearchForm';
import { AuthContext } from '../../context/AuthContext';
import { MenuContext } from '../../context/MenuContext';
import './Menu.scss';

interface Props {

}

export function Menu(props: Props) {
    const { isMenuOpen } = useContext(MenuContext);
    const authContext: any = useContext(AuthContext);

    return (
        <div className={`menu ${isMenuOpen ? 'menu_active' : ''}`}>
            <Burger
                className="menu__burger"
                type="close"
            />
            <MenuNav
                pages={[
                    { title: 'Главная', href: '/' },
                    { title: 'Мужчина', href: '/man' },
                    { title: 'Женщина', href: '/woman' },
                    { title: 'Коллекция', href: '/collection' },
                ]}
                activePageID={0}
            />
            <SearchForm className="menu__search-form" />
            {authContext.isAuth ? <Profile cartCount={0} className="menu__profile" /> : <LoginHeader className="menu__login" title='Войти в аккаунт' />}
        </div>
    );
}
