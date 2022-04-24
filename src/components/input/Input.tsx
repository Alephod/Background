import { MutableRefObject, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Input.scss';
import { Datepicker } from '../datepicker/Datepicker';


interface Props {
    title: string;
    type: string;
    placeholder?: string;
    className?: string;
    isRequired?: boolean;
    _ref?: MutableRefObject<any>;
    onInput?: any;
    selected?: Date;
    onChange?: (state: any) => void;
}

export function Input({ title, placeholder, className, type, isRequired, ...props }: Props) {
    const [isShow, setIsShow] = useState(false);
    const [isFilled, setisFilled] = useState(false);
    const [value, setValue] = useState('');

    if (type == 'number') return (
        <div className={`input ${className ? className : ''}`}>
            <p className="input__title">{title} {isRequired ? <span className='input__required'>*</span> : ''}</p>
            <input
                ref={props._ref}
                onInput={(e: any) => {
                    setValue(e.target.value.replace(/\D/g, ''));
                    props.onInput && props.onInput();
                }}
                value={value}
                type="text"
                placeholder={placeholder}
            />
        </div>
    );

    if (type == 'date') return (
        <div className={`input ${className ? className : ''} ${isFilled ? 'input_filled' : ''}`}>
            <p className="input__title">{title} {isRequired ? <span className='input__required'>*</span> : ''}</p>
            <Datepicker selected={props.selected && new Date(props.selected)} getDate={props.onChange} />
        </div>
    );

    if (type == 'password') return (
        <div className={`input ${className ? className : ''} ${isFilled ? 'input_filled' : ''}`}>
            <p className="input__title">{title} {isRequired ? <span className='input__required'>*</span> : ''}</p>
            <input
                ref={props._ref}
                onInput={(e: any) => {
                    e.target.value ? setisFilled(true) : setisFilled(false);
                    props.onInput && props.onInput();
                }}
                type={isShow ? 'text' : 'password'}
                placeholder={placeholder}
            />
            <FontAwesomeIcon className='input__eye' onClick={() => setIsShow(prev => !prev)} icon={isShow ? faEye : faEyeSlash} />
        </div>
    );

    return (
        <div className={`input ${className ? className : ''}`}>
            <p className="input__title">{title} {isRequired ? <span className='input__required'>*</span> : ''}</p>
            <input onInput={() => props.onInput && props.onInput()} ref={props._ref} type="text" placeholder={placeholder} />
        </div>
    );
}
