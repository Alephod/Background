import { MenuContext, MenuProvider } from '../../context/MenuContext';
import { Menu } from '../../forms/menu/Menu';
import { Burger } from '../burger/Burger';
import { Logo } from '../logo/Logo';
import { Navbar } from '../navbar/Navbar';
import { Profile } from '../profile/Profile';
import { SearchForm } from '../search-form/SearchForm';
import './Header.scss';

export function Header(props: any) {
    return (
        <MenuProvider>
            <MenuContext.Consumer>
                {
                    (context: any) => (
                        <header className="header">
                            <Menu />
                            <div className="header__wrapper">
                                <div className="header__container container">
                                    <SearchForm />
                                    <Burger
                                        type="open"
                                    />
                                    <Logo />
                                    <div className="header__main">
                                        <Profile cartCount={0} />
                                    </div>
                                </div>
                                <Navbar
                                    pages={[
                                        { title: 'Главная', href: '/' },
                                        { title: 'Мужчина', href: '/man' },
                                        { title: 'Женщина', href: '/woman' },
                                        { title: 'Коллекция', href: '/collection' },
                                    ]}
                                    activePageID={0}
                                />
                            </div>
                        </header>
                    )
                }
            </MenuContext.Consumer>
        </MenuProvider>

    );
}
