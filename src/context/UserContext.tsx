import React, { ReactNode, useState } from 'react';
import { INewProduct } from '../components/product-order/ProductOrder';

interface Props {
    children: ReactNode;
}

export const UserContext: any = React.createContext<Partial<any>>({});

!localStorage.getItem('cart') && localStorage.setItem('cart', JSON.stringify(''));

export function UserProvider(props: Props) {

    const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('user')));
    const [cartCount, setCartCount] = useState(JSON.parse(localStorage.getItem('cart') as any).length);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') as string));

    const setLogin = () => {
        setIsAuth(true);
        localStorage.setItem('user', 'true');
    };
    const setLogout = () => {
        setIsAuth(false);
        localStorage.setItem('user', 'false');
    };

    const addToCart = (product: INewProduct) => {
        setCartCount((prev: number) => prev + 1);
        setCart((prev: INewProduct[]) => [...prev, product]);
        localStorage.setItem('cart', JSON.stringify([...cart, product]));
    };
    const removeFromCart = (index: number) => {
        setCartCount((prev: number) => prev > 1 && prev - 1);
        localStorage.setItem('cart', JSON.stringify([...cart.slice(0, index), ...cart.slice(index + 1)]));
        setCart((prev: INewProduct[]) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    };

    return (
        <UserContext.Provider value={{
            isAuth: isAuth,
            cartCount: cartCount,
            cart: cart,
            setLogin: setLogin,
            setLogout: setLogout,
            addToCart: addToCart,
            removeFromCart: removeFromCart
        }}>
            {props.children}
        </UserContext.Provider>
    );
}
