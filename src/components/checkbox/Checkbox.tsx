import './Checkbox.scss';
import check from './../../img/checkbox/check.svg';
import { useState } from 'react';

interface Props {
    className?: string;
    title: string;
}

export function Checkbox({ title, className }: Props) {
    const [isChecked, setIsChecked] = useState(false);

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
