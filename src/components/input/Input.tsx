import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Input.scss';

interface Props {
    title: string;
    type: string;
    placeholder?: string;
    className?: string;
}

export function Input({ title, placeholder, className, type }: Props) {
    const [isShow, setIsShow] = useState(false);
    const [isFilled, setisFilled] = useState(false);

    if (type == 'password') return (
        <div className={`input ${className ? className : ''} ${isFilled ? 'input_filled' : ''}`}>
            <p className="input__title">{title}</p>
            <input
                onInput={(e: any) => e.target.value ? setisFilled(true) : setisFilled(false)}
                type={isShow ? 'text' : 'password'}
                placeholder={placeholder}
            />
            <FontAwesomeIcon className='input__eye' onClick={() => setIsShow(prev => !prev)} icon={isShow ? faEye : faEyeSlash} />
        </div>
    );
    return (
        <div className={`input ${className ? className : ''}`}>
            <p className="input__title">{title}</p>
            <input type="text" placeholder={placeholder} />
        </div>
    );
}
