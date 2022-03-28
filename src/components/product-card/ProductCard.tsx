import { Link } from 'react-router-dom';
import './ProductCard.scss';

interface Props {
    href: string;
    title: string;
    cost: string;
    className?: string;
    linkName?: string;
}

export function ProductCard(props: Props) {
    return (
        <Link to={`/product/${props.linkName}`}>
            <div className={`product-card ${props.className}`}>
                <div className="product-card__img" >
                    <img src={props.href} alt="" />
                    <h3 className="product-card__title">{props.title}</h3>
                </div>
                <p className="product-card__price">{props.cost}</p>
            </div>
        </Link>

    );
}
