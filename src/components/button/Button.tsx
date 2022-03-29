import { Link } from 'react-router-dom';
import './Button.scss';

interface Props {
    title: string;
    isLink?: boolean;
    isSubmit?: boolean;
    to?: string;
    className?: string;
    isCapitalize?: boolean;
}

export function Button({ title, className, ...props }: Props) {

    if (props.isLink && props.to)
        return (
            <Link className={`button ${className ? className : ''} ${props.isCapitalize ? 'button_capitalize' : ''}`} to={props.to}>
                {title}
            </Link>
        );
    else if (props.isSubmit)
        return <input type='submit' className={`button ${className ? className : ''} ${props.isCapitalize ? 'button_capitalize' : ''}`} value={title} />;
    else
        return (
            <button type='button' className={`button ${className ? className : ''} ${props.isCapitalize ? 'button_capitalize' : ''}`}>
                {title}
            </button>
        );
}
