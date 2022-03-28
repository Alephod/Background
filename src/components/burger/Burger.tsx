import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import './Burger.scss';

interface Props {
    className?: string;
    /**
     * Тип бургера (close, open)
     */
    type: string
}

export function Burger(props: Props) {
    const { setOpened, setClosed } = useContext(MenuContext);

    const className: string = props.className ? props.className : '';
    const active: string = props.type === 'close' ? 'burger_active' : '';
    return(
        <div
            className={`burger ${className} ${active}`}
            onClick={props.type === 'open' ? setOpened : setClosed }
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
