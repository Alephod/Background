import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import { ProductCard } from '../../components/product-card/ProductCard';
import { Title } from '../../components/title/Title';
import './PromoProducts.scss';

const productsResponce: Array<any> = [
    { href: './img/products/1.jpg', title: 'Футболка с принтом 1', cost: '799 РУБ', linkName: 'futbolka-s-printom-1' },
    { href: './img/products/2.jpg', title: 'Футболка с принтом 2', cost: '799 РУБ', linkName: 'futbolka-s-printom-2' },
    { href: './img/products/3.jpg', title: 'Футболка с принтом 3', cost: '799 РУБ', linkName: 'futbolka-s-printom-3' },
    { href: './img/products/4.jpg', title: 'Футболка с принтом 4', cost: '799 РУБ', linkName: 'futbolka-s-printom-4' },
    { href: './img/products/7.jpg', title: 'Футболка с принтом 5', cost: '799 РУБ', linkName: 'futbolka-s-printom-5' },
    { href: './img/products/6.jpg', title: 'Футболка с принтом 6', cost: '799 РУБ', linkName: 'futbolka-s-printom-6' },
    { href: './img/products/3.jpg', title: 'Футболка с принтом 7', cost: '799 РУБ', linkName: 'futbolka-s-printom-7' },
    { href: './img/products/11.jpg', title: 'Футболка с принтом 8', cost: '799 РУБ', linkName: 'futbolka-s-printom-8' },
    { href: './img/products/10.jpg', title: 'Футболка с принтом 9', cost: '799 РУБ', linkName: 'futbolka-s-printom-9' },
    { href: './img/products/8.jpg', title: 'Футболка с принтом 10', cost: '799 РУБ', linkName: 'futbolka-s-printom-10' },
    { href: './img/products/4.jpg', title: 'Футболка с принтом 11', cost: '799 РУБ', linkName: 'futbolka-s-printom-11' },
    { href: './img/products/5.jpg', title: 'Футболка с принтом 12', cost: '799 РУБ', linkName: 'futbolka-s-printom-12' }
];

export function PromoProducts(props: any) {
    return (
        <div className={'products container'}>
            <Title className='products__title' title={'Новая коллекция'} />
            <div className='products__container'>
                {productsResponce.map((item, index) =>
                    <ProductCard
                        href={item.href}
                        title={item.title}
                        cost={item.cost}
                        linkName={item.linkName}
                        key={index}
                    />)
                }
            </div>
            <Button className='products__btn' isLink to={'/collection/44841298'} title={'Смотреть всю коллекцию'} />
        </div>
    );
}
