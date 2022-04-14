import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../../context/MenuContext';
import './MenuNav.scss';

interface Page {
    title: string;
    href: string;
}
interface Props {
    pages: Array<Page>;
    activePageID?: number;
}

export function MenuNav(props: Props) {
    const { setClosed }: any = useContext(MenuContext);
    const [activePageID, setActivePageID] = useState(props.activePageID);
    return (
        <nav className="menu-nav">
            {props.pages.map((item: Page, index: number) => <Link onClick={setClosed} className={`menu-nav__item ${activePageID === index ? 'menu-nav__item_active' : ''}`} to={item.href} key={item.title}>{item.title}</Link>)}
        </nav>
    );
}
