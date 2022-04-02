import './Checkbox.scss';
import check from './../../img/checkbox/check.svg';
import { useState } from 'react';

interface Props {
    title?: string;
    className?: string;
    isHTML?: boolean;
    children?: any;
}

export function Checkbox({ title, className, isHTML, children }: Props) {
    const [isChecked, setIsChecked] = useState(false);

    if (isHTML)
        return (
            <div onClick={() => setIsChecked(prev => !prev)} className={`checkbox ${isChecked ? 'checkbox_checked' : ''} ${className ? className : ''}`}>
                <p className="checkbox__title">
                    <span className="checkbox__inner">
                        <img src={check} alt="" />
                    </span>
                    {children}
                </p>
            </div>
        );

    return (
        <div onClick={() => setIsChecked(prev => !prev)} className={`checkbox ${isChecked ? 'checkbox_checked' : ''} ${className ? className : ''}`}>
            <p className="checkbox__title">
                <span className="checkbox__inner">
                    <img src={check} alt="" />
                </span>
                {title}
            </p>
        </div>
    );
}
