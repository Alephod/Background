import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { Button } from '../button/Button';
import { Checkbox } from '../checkbox/Checkbox';
import { ColorPicker } from '../color-picker/ColorPicker';
import { Counter } from '../counter/Counter';
import { DropDown } from '../drop-down/DropDown';
import './ProductOrder.scss';

interface Props {
    product: IProductInfo;
    linkName: string;
}

interface IProductInfo {
    title: string;
    cost: string;
    size: string[];
    colors: any;
    href: string;
}
export interface INewProduct {
    title: string;
    cost: string;
    size: string;
    color: string[];
    count: number;
    href: string;
    link: string;
}

export function ProductOrder({ product, linkName }: Props) {
    const userContext: any = useContext(UserContext);

    const [size, setSize] = useState('');
    const [color, setColor] = useState(['', '']);
    const [count, setCount] = useState(0);

    const addToCart = () => {
        const newProduct: INewProduct = {
            title: product.title,
            cost: product.cost,
            size: size,
            color: color,
            count: count,
            href: product.href,
            link: linkName
        };
        if (newProduct.size && newProduct.color && newProduct.count) {
            userContext.addToCart(newProduct);
        }
    };

    return (
        <div className="product-order">
            <div className="product-order__container">
                <p className="product-order__title">{product.title}</p>
                <p className="product-order__cost">{product.cost}</p>
                <ColorPicker className='product-order__color' setColor={setColor} colors={Object.entries(product.colors)} />
                <DropDown onChange={setSize} className='product-order__dropdown' placeholder={'Выбрать размер'} items={product.size} title='Размер' />
                <Counter onChange={setCount} className="product-order__counter" />
                <Button onClick={addToCart} className='product-order__btn' isCapitalize title={'Добавить в корзину'} />
                <Checkbox title='Я хочу получать информацию о новых коллекциях' className='product-order__checkbox' />
            </div>

        </div>
    );
}
