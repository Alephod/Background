import { Link } from 'react-router-dom';
import './Button.scss';

interface Props {
    title: string;
    isLink?: boolean;
    isSubmit?: boolean;
    to?: string;
    className?: string;
    isCapitalize?: boolean;
    onClick?: any;
}

export function Button({ title, className, ...props }: Props) {

    if (props.isLink && props.to)
        return (
            <Link onClick={props.onClick} className={`button ${className ? className : ''} ${props.isCapitalize ? 'button_capitalize' : ''}`} to={props.to}>
                {title}
            </Link>
        );
    else if (props.isSubmit)
        return <input onClick={props.onClick} type='submit' className={`button ${className ? className : ''} ${props.isCapitalize ? 'button_capitalize' : ''}`} value={title} />;
    else
        return (
            <button onClick={props.onClick} type='button' className={`button ${className ? className : ''} ${props.isCapitalize ? 'button_capitalize' : ''}`}>
                {title}
            </button>
        );
}
