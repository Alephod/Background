import { useState } from 'react';
import { Button } from '../button/Button';
import { Checkbox } from '../checkbox/Checkbox';
import { ColorPicker } from '../color-picker/ColorPicker';
import { DropDown } from '../drop-down/DropDown';
import './ProductOrder.scss';

interface Props {
    product: IProductInfo;
}

interface IProductInfo {
    title: string;
    cost: string;
    size: string[];
    colors: any;
}

export function ProductOrder({ product }: Props) {
    const [color, setColor] = useState();
    return (
        <div className="product-order">
            <div className="product-order__container">
                <p className="product-order__title">{product.title}</p>
                <p className="product-order__cost">{product.cost}</p>
                <ColorPicker className='product-order__color' setColor={setColor} colors={Object.entries(product.colors)} />
                <DropDown className='product-order__dropdown' placeholder={'Выбрать размер'} items={product.size} title='Размер' />
                <Button className='product-order__btn' isCapitalize title={'Добавить в корзину'} />
                <Checkbox title='Я хочу получать информацию о новых коллекциях' className='product-order__checkbox' />
            </div>

        </div>
    );
}
