import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

interface Page {
    title: string;
    href: string;
}
interface Props {
    pages: Array<Page>;
    activePageID?: number;
    className?: string;
}

export function Navbar(props: Props) {
    const [activePageID, setActivePageID] = useState(props.activePageID);
    return (
        <nav className={`nav ${props.className !== undefined ? props.className : ''}`}>
            {props.pages.map((item: Page, index: number) => <a className={`nav__item ${activePageID === index ? 'nav__item_active' : ''}`} href={item.href} key={item.title}>{item.title}</a>)}
        </nav>
    );
}
