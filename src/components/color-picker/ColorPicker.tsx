import './ColorPicker.scss';
import check from './../../img/color-picker/check.svg';
import { useState } from 'react';

interface Props {
    colors: string[][];
    setColor: any;
    className?: string;
}

export function ColorPicker({ colors, className, ...props }: Props) {
    const [curImg, setCurImg] = useState();

    const setColor = (item: string[], index: any) => {
        if (item[1][1]) {
            props.setColor([item[0], item[1][0]]);
            setCurImg(index);
        }
    };

    return (
        <div className={`color-picker ${className ? className : ''}`}>
            <p className="color-picker__title">Цвет:</p>
            <div className="color-picker__colors">
                {colors.map((color, index) =>
                    <div
                        title={color[0]}
                        key={index}
                        className={`color-picker__item ${curImg == index ? 'color-picker__item_checked' : ''} ${!color[1][1] ? 'color-picker__item_disabled' : ''}`}
                        style={{ background: color[1][0] }}
                        onClick={() => setColor(color, index)}
                    >
                        <div className="color-picker__check-wrapper">
                            <img src={check} alt="" />
                        </div>
                    </div>)}
            </div>
        </div>
    );
}
