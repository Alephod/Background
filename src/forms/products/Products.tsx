import { ProductCard } from '../../components/product-card/ProductCard';
import './Products.scss';

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

export function Products(props: any) {
    return (
        <div className={'products container'}>
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
    );
}
