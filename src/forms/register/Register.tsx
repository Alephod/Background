import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { Input } from '../../components/input/Input';
import { INewProduct } from '../../components/product-order/ProductOrder';
import { UserContext } from '../../context/UserContext';
import { IAddress } from '../account-address/AccountAddress';
import { v4 } from 'uuid';

interface Props {
    className?: string;
    setActive: (state: string) => void;
}

export interface INewUser {
    email: string;
    password: string;
    userInfo: {
        email: string;
        id: string;
        name: string;
        lastname: string;
        phone: string;
        gender?: string;
        birthday?: Date;
        isGetNews: boolean;
    },
    cart: INewProduct[],
    address: IAddress[]
}

export function Register({ className, setActive }: Props) {
    const userContext: any = useContext(UserContext);

    const name: any = useRef();
    const email: any = useRef();
    const password: any = useRef();
    const confirmPassword: any = useRef();
    const [isGetNews, setIsGetNews]: any = useState();

    const addUser = () => {
        const newUser: INewUser = {
            email: email.current.value,
            password: password.current.value,
            userInfo: {
                name: name.current.value,
                id: v4(),
                email: email.current.value,
                lastname: '',
                phone: '',
                gender: '',
                isGetNews: isGetNews,
            },
            cart: [],
            address: []
        };
        userContext.addUser(newUser);
    };

    return (
        <div className={`register ${className ? className : ''}`}>
            <p className='auth__title'>зарегистрироваться</p>
            <Input _ref={name} type="text" className='auth__input' title={'Имя'} />
            <Input _ref={email} type="text" className='auth__input' title={'Email'} />
            <Input _ref={password} type="password" className='auth__input' title={'Придумайте пароль'} />
            <Input _ref={confirmPassword} type="password" className='auth__input' title={'Повторите пароль'} />
            <Checkbox getValue={setIsGetNews} className='auth__checkbox' title={'Я хочу получать информацию об обновлениях'} />
            <Checkbox isHTML className='auth__checkbox'>
                Я согласен(-на) с условиями <Link className='auth__link' to="/rules/terms-of-use">Правил пользования торговой площадкой</Link> и <Link className='auth__link' to="/rules/return">правилами возврата</Link>
            </Checkbox>
            <a href="/" onClick={addUser} className='auth__btn button_capitalize button'>Войти</a>
            <p onClick={() => setActive('login')} className='auth__link auth__link_login'>Уже есть аккаунт?</p>
        </div>
    );
}
