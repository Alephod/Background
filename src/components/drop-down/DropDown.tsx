import './DropDown.scss';
import { useEffect, useRef, useState } from 'react';

interface Props {
    title?: string;
    placeholder: string;
    items: string[];
    className?: string;
}

export function DropDown({ title, placeholder, items, className }: Props) {
    const [curItem, setCurItem] = useState(placeholder);
    const [isActive, setIsActive] = useState(false);

    const header: any = useRef();

    const selectItem = (item: string) => {
        setCurItem(item);
        setIsActive(false);
    };

    useEffect(() => {
        window.onclick = (e: any) => {
            e.stopPropagation();
            if (header.current && !header.current.contains(e.target))
                setIsActive(false);
        };
    }, []);


    return (
        <div className={`drop-down ${className ? className : ''} ${isActive ? 'drop-down_active' : ''}`}>
            <p className="drop-down__title">{title}</p>
            <div ref={header} onClick={() => setIsActive(prev => !prev)} className="drop-down__header">
                <p className="drop-down__placeholder">{curItem}</p>
                <div className="drop-down__arrow">
                    <span></span>
                </div>
            </div>
            <div className="drop-down__list">
                {items.map((item, index) =>
                    <div key={index} onClick={() => selectItem(item)} className="drop-down__list-item">
                        {item}
                    </div>
                )}
            </div>
        </div>
    );
}
