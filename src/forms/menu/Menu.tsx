import { useContext } from 'react';
import { Burger } from '../../components/burger/Burger';
import { MenuNav } from '../../components/menu-nav/MenuNav';
import { Profile } from '../../components/profile/Profile';
import { SearchForm } from '../../components/search-form/SearchForm';
import { MenuContext } from '../../context/MenuContext';
import './Menu.scss';

interface Props {

}

export function Menu(props: any) {
    const { isMenuOpen} = useContext(MenuContext);
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
            <SearchForm className="menu__search-form"/>
            <Profile cartCount={0} className="menu__profile"/>
        </div>
    );
}
