import { Link } from 'react-router-dom';
import { ProductCard } from '../../components/product-card/ProductCard';
import { Title } from '../../components/title/Title';
import './PromoProducts.scss';

const productsResponce: Array<any> = [
    { href: './img/products/1.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' },
    { href: './img/products/2.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' },
    { href: './img/products/3.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' },
    { href: './img/products/4.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' },
    { href: './img/products/5.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' },
    { href: './img/products/6.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' },
    { href: './img/products/7.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' },
    { href: './img/products/8.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' },
    { href: './img/products/9.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' },
    { href: './img/products/10.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' },
    { href: './img/products/11.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' },
    { href: './img/products/12.jpg', title: 'Футболка с принтом', cost: '799 РУБ', linkName: 'futbolka-s-printom' }
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
            <Link className='products__btn' to="/collection/44841298">Смотреть всю коллекцию</Link>
        </div>
    );
}
