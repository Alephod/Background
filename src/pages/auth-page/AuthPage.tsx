import { useEffect, useState } from 'react';
import { Login } from '../../forms/login/Login';
import { Register } from '../../forms/register/Register';
import './AuthPage.scss';

export function AuthPage() {
    const [active, setActive] = useState('login');
    useEffect(() => {
        document.title = 'Авторизация';
        document.documentElement.scrollTop = 0;
    }, []);
    return (
        <div className="auth-page container">
            <h1 className="auth-page__title">Привет!</h1>
            <h2 className="auth-page__subtitle">Пожалуйста войдите или зарегистрируйтесь на сайте.</h2>
            <div className="auth-page__container">
                <Login setActive={setActive} className={active == 'login' ? 'login_active' : ''} />
                <Register setActive={setActive} className={active == 'register' ? 'register_active' : ''} />
            </div>
        </div>
    );
}
