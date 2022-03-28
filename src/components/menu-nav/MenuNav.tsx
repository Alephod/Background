import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    const [activePageID, setActivePageID] = useState(props.activePageID);
    return (
        <nav className="menu-nav">
            {props.pages.map((item: Page, index: number) => <a className={`menu-nav__item ${activePageID === index ? 'menu-nav__item_active' : ''}`} href={item.href} key={item.title}>{item.title}</a>)}
        </nav>
    );
}
