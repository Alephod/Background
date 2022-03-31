import { useEffect, useRef, useState } from 'react';
import './Spoiler.scss';

interface Props {
    title: string;
    children: any;
    className?: string;
}

export function Spoiler({ className, title, children}: Props) {
    const [isActive, setIsActive] = useState(false);
    const spoilerBody: any = useRef();
    const spoilerContainer: any = useRef();

    useEffect(() => {
        if (isActive)
            spoilerBody.current.style.height = window.getComputedStyle(spoilerContainer.current).height;
        else
            spoilerBody.current.style.height = 0;
    }, [isActive]);

    return (
        <div className={`spoiler ${className ? className : ''} ${isActive ? 'spoiler_active' : ''}`}>
            <div onClick={() => setIsActive(prev => !prev)} className="spoiler__header">
                <p className="spoiler__title">{title}</p>
                <div className="spoiler__arrow">
                    <span></span>
                </div>
            </div>
            <div ref={spoilerBody} className="spoiler__body">
                <div ref={spoilerContainer} className="spoiler__container">
                    {children}
                </div>
            </div>
        </div>
    );
}
