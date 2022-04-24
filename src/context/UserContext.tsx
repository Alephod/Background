import React, { ReactNode, useState } from 'react';
import { INewProduct } from '../components/product-order/ProductOrder';
import { INewUser } from '../forms/register/Register';

interface Props {
    children: ReactNode;
}

export const UserContext: any = React.createContext<Partial<any>>({});

!localStorage.getItem('users') && localStorage.setItem('users', JSON.stringify(''));
!localStorage.getItem('user') && localStorage.setItem('user', JSON.stringify({ isLogin: false, userInfo: {}, cart: [], address: [] }));

export function UserProvider(props: Props) {
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('user') as string).isLogin);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') as string).userInfo);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users') as string));
    const [cartCount, setCartCount] = useState(JSON.parse(localStorage.getItem('user') as string).cart.length);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('user') as string).cart);
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem('user') as string).address);

    const setLogin = (email: string, password: string) => {
        const testUser: any = users.filter((item: any) => email == item.email)[0];

        if (testUser && testUser.password == password) {
            setIsAuth(true);
            localStorage.setItem('user', JSON.stringify({ isLogin: true, userInfo: testUser.userInfo, cart: testUser.cart, address: testUser.address }));
        }
    };
    const setLogout = () => {
        setIsAuth(false);
        localStorage.setItem('user', JSON.stringify({ isLogin: false, userInfo: {}, cart: [], address: [] }));
        setUser({ isLogin: true, userInfo: {}, cart: [], address: [] });
    };

    const addUser = (user: any) => {
        setIsAuth(true);
        setUser({ isLogin: true, userInfo: user.userInfo, cart: user.cart, address: user.address });

        localStorage.setItem('users', JSON.stringify([...JSON.parse(localStorage.getItem('users') as string), user]));
        localStorage.setItem('user', JSON.stringify({ isLogin: true, userInfo: user.userInfo, cart: user.cart, address: user.address }));
    };
    const editUser = (newUser: INewUser) => {
        // Находит индекс пользователя в localstorage "users"
        const users: any = JSON.parse(localStorage.getItem('users') as string);
        const index: number = users.findIndex((item: any) => newUser.userInfo.id == item.userInfo.id);

        localStorage.setItem('users', JSON.stringify([...users.slice(0, index), newUser, ...users.slice(index + 1)]));
        localStorage.setItem('user', JSON.stringify({ isLogin: true, userInfo: newUser.userInfo, cart: newUser.cart, address: newUser.address }));

        setUsers((prev: INewUser[]) => [...prev.slice(0, index), newUser, ...prev.slice(index + 1)]);
        setUser(newUser.userInfo);
    };

    const addToCart = (product: INewProduct) => {
        setCartCount((prev: number) => prev + 1);
        setCart((prev: INewProduct[]) => [...prev, product]);

        // Находит индекс пользователя в localstorage "users"
        const id: string = JSON.parse(localStorage.getItem('user') as string).userInfo.id;
        const users: any = JSON.parse(localStorage.getItem('users') as string);

        const index: number = users.findIndex((item: any) => id == item.userInfo.id);
        const userCartEdited: any = JSON.parse(localStorage.getItem('user') as string);
        userCartEdited.cart = [...userCartEdited.cart, product];

        const userEdited: any = {
            email: users[index].email,
            password: users[index].password,
            userInfo: userCartEdited.userInfo,
            cart: userCartEdited.cart,
            address: userCartEdited.address,
        };

        // Синхронизация с localstorage
        localStorage.setItem('users', JSON.stringify([...users.slice(0, index), userEdited, ...users.slice(index + 1)]));
        localStorage.setItem('user', JSON.stringify(userCartEdited));
    };
    const removeFromCart = (index: number) => {
        setCartCount((prev: number) => prev > 1 && prev - 1);
        setCart((prev: INewProduct[]) => [...prev.slice(0, index), ...prev.slice(index + 1)]);

        // Находит индекс пользователя в localstorage "users"
        const id: string = JSON.parse(localStorage.getItem('user') as string).userInfo.id;
        const users: any = JSON.parse(localStorage.getItem('users') as string);

        const userIndex: number = users.findIndex((item: any) => id == item.userInfo.id);
        const userCartEdited: any = JSON.parse(localStorage.getItem('user') as string);
        userCartEdited.cart = [...userCartEdited.cart.slice(0, index), ...userCartEdited.cart.slice(index + 1)];

        const userEdited: any = {
            email: users[index].email,
            password: users[index].password,
            userInfo: userCartEdited.userInfo,
            cart: userCartEdited.cart,
            address: userCartEdited.address,
        };

        // Синхронизация с localstorage
        localStorage.setItem('users', JSON.stringify([...users.slice(0, userIndex), userEdited, ...users.slice(userIndex + 1)]));
        localStorage.setItem('user', JSON.stringify(userCartEdited));
    };

    const addAddress = (newAddress: any) => {
        setAddress((prev: any[]) => [...prev, newAddress]);

        // Находит индекс пользователя в localstorage "users"
        const id: string = JSON.parse(localStorage.getItem('user') as string).userInfo.id;
        const users: any = JSON.parse(localStorage.getItem('users') as string);

        const userIndex: number = users.findIndex((item: any) => id == item.userInfo.id);
        const userAddressEdited: any = JSON.parse(localStorage.getItem('user') as string);
        userAddressEdited.address = [...userAddressEdited.address, newAddress];

        const userEdited: any = {
            email: users[userIndex].email,
            password: users[userIndex].password,
            userInfo: userAddressEdited.userInfo,
            cart: userAddressEdited.cart,
            address: userAddressEdited.address,
        };

        localStorage.setItem('users', JSON.stringify([...users.slice(0, userIndex), userEdited, ...users.slice(userIndex + 1)]));
        localStorage.setItem('user', JSON.stringify(userAddressEdited));
    };
    const removeAddress = (index: number) => {
        setAddress((prev: any[]) => [...prev.slice(0, index), ...prev.slice(index + 1)]);

        // Находит индекс пользователя в localstorage "users"
        const id: string = JSON.parse(localStorage.getItem('user') as string).userInfo.id;
        const users: any = JSON.parse(localStorage.getItem('users') as string);

        const userIndex: number = users.findIndex((item: any) => id == item.userInfo.id);
        const userAddressEdited: any = JSON.parse(localStorage.getItem('user') as string);
        userAddressEdited.address = [...address.slice(0, index), ...address.slice(index + 1)];

        const userEdited: any = {
            email: users[userIndex].email,
            password: users[userIndex].password,
            userInfo: userAddressEdited.userInfo,
            cart: userAddressEdited.cart,
            address: userAddressEdited.address,
        };

        localStorage.setItem('users', JSON.stringify([...users.slice(0, userIndex), userEdited, ...users.slice(userIndex + 1)]));
        localStorage.setItem('user', JSON.stringify(userAddressEdited));
    };

    return (
        <UserContext.Provider value={{
            isAuth: isAuth,
            cartCount: cartCount,
            cart: cart,
            address: address,
            user: user,
            users: users,
            setLogin: setLogin,
            setLogout: setLogout,
            addUser: addUser,
            editUser: editUser,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            addAddress: addAddress,
            removeAddress: removeAddress,
        }}>
            {props.children}
        </UserContext.Provider>
    );
}
