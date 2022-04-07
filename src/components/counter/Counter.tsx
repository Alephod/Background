import { useState } from 'react';
import './Counter.scss';

interface Props {
    className?: string;
    onChange: (state: number) => void;
}

export function Counter({ className, onChange }: Props) {
    const [count, setCount] = useState(0);

    const countDown = () => {
        if (count > 0) {
            onChange && onChange(count - 1);
            setCount(prev => prev - 1);
        }
    };
    const countUp = () => {
        if (count < 10) {
            onChange && onChange(count + 1);
            setCount(prev => prev + 1);
        }
    };

    return (
        <div className="counter">
            <div onClick={countDown} className={`counter__btn ${className ? className : ''}`}>-</div>
            <div className="counter__text">{count}</div>
            <div onClick={countUp} className="counter__btn">+</div>
        </div>
    );
}
