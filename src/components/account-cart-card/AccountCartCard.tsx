import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Button } from '../button/Button';
import { INewProduct } from '../product-order/ProductOrder';
import './AccountCartCard.scss';

interface Props {
    product: INewProduct;
    index: number;
    className?: string;
}

export function AccountCartCard({ product, className, index }: Props) {
    const userContext: any = useContext(UserContext);

    const [isOptionsActive, setIsOptionsActive] = useState(false);

    const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

    const removeFromCart = () => {
        setIsOptionsActive(false);
        userContext.removeFromCart(index);
    };

    return (
        <div className={`account-cart-card ${className ? className : ''} ${isMobile ? 'account-cart-card_mobile' : ''}`}>
            <div className="account-cart-card__container">
                <div className="account-cart-card__wrapper">
                    <img src={product.href} alt="" />
                    <div className="account-cart-card__info">
                        <div className='account-cart-card__header'>
                            <Link to={'/product/' + product.link} className="account-cart-card__info-item account-cart-card__info-item_title">{product.title}</Link>

                            <div onClick={() => setIsOptionsActive(true)} className="account-cart-card__options">
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </div>
                        </div>
                        <p className="account-cart-card__info-item account-cart-card__info-item_cost">{product.cost}</p>
                        <p className="account-cart-card__info-item"><span>Размер:</span> {product.size}</p>
                        <div className="account-cart-card__info-item"><span>Цвет:</span> <div className='account-cart-card__info-color' style={{ 'background': product.color[1] }}></div> {product.color[0]}</div>
                        <p className="account-cart-card__info-item"><span>Количество:</span> {product.count}</p>
                    </div>
                </div>
                <div className={`account-cart-card__btns ${isOptionsActive ? 'account-cart-card__btns_active' : ''}`}>
                    <Button
                        onClick={() => setIsOptionsActive(false)}
                        className='account-cart-card__btn account-cart-card__btn_buy'
                        title={'Купить'}
                        isCapitalize
                        isLink
                        to='/buy'
                    />
                    <Button
                        onClick={removeFromCart}
                        className='account-cart-card__btn account-cart-card__btn_delete'
                        title={'Убрать'}
                        isCapitalize
                    />
                    <div onClick={() => setIsOptionsActive(false)} className="account-cart-card__btns-close-btn">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
