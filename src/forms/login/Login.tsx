import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { Input } from '../../components/input/Input';
import { UserContext } from '../../context/UserContext';

interface Props {
    className?: string;
    setActive: (state: string) => void;
}

export function Login({ className, setActive }: Props) {
    const userContext: any = useContext(UserContext);

    const email: any = useRef();
    const password: any = useRef();

    const login = () => {
        userContext.setLogin(email.current.value, password.current.value);
    };

    return (
        <div className={`login ${className ? className : ''}`}>
            <p className='auth__title'>Войти</p>
            <Input _ref={email} type="text" className='auth__input' title={'Email'} />
            <Input _ref={password} type="password" className='auth__input' title={'Пароль'} />
            <Checkbox className='auth__checkbox' title={'Запомнить мои данные'} />
            <Button isLink to="/" onClick={login} isCapitalize className='auth__btn' title={'Войти'} />
            <div className='auth__links'>
                <Link className='auth__link' to="/auth/forgot-password">Забыли пароль?</Link> <span>или</span> <p onClick={() => setActive('register')} className='auth__link auth__link_register'>Еще нет аккаунта?</p>
            </div>
        </div>
    );
}
