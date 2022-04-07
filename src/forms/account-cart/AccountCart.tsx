import { useContext } from 'react';
import { AccountCartCard } from '../../components/account-cart-card/AccountCartCard';
import { INewProduct } from '../../components/product-order/ProductOrder';
import { UserContext } from '../../context/UserContext';
import './AccountCart.scss';

export function AccountCart() {
    const userContext: any = useContext(UserContext);

    return (
        <div className="account-cart">
            <div className="account-cart__sect">
                <h1 className='account-page__title'>Корзина</h1>
                {userContext.cart.map((item: INewProduct, index: number) => <AccountCartCard key={index} product={item} index={index} />)}
            </div>
            {/* <div className="account-cart__sect">
                <h1 className='account-page__sect-title'>Доставлено</h1>
            </div> */}
        </div>
    );
}
