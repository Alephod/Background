import './Title.scss';

interface Props {
    title: string;
    className?: string;
}

export function Title(props: Props) {
    return <h2 className={`title container ${props.className}`}>{props.title}</h2>;
}
