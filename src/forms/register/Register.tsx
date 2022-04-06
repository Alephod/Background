import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { Input } from '../../components/input/Input';
import { AuthContext } from '../../context/AuthContext';

interface Props {
    className?: string;
    setActive: (state: string) => void;
}

export function Register({ className, setActive }: Props) {
    const authContext: any = useContext(AuthContext);

    return (
        <div className={`register ${className ? className : ''}`}>
            <p className='auth__title'>зарегистрироваться</p>
            <Input type="text" className='auth__input' title={'Имя'} />
            <Input type="text" className='auth__input' title={'Email'} />
            <Input type="password" className='auth__input' title={'Придумайте пароль'} />
            <Input type="password" className='auth__input' title={'Повторите пароль'} />
            <Checkbox className='auth__checkbox' title={'Я хочу получать информацию об обновлениях'} />
            <Checkbox isHTML className='auth__checkbox'>
                Я согласен(-на) с условиями <Link className='auth__link' to="/rules/terms-of-use">Правил пользования торговой площадкой</Link> и <Link className='auth__link' to="/rules/return">правилами возврата</Link>
            </Checkbox>
            <Button isLink to="/" onClick={authContext.setLogin} isCapitalize className='auth__btn' title={'Войти'} />
            <p onClick={() => setActive('login')} className='auth__link auth__link_login'>Уже есть аккаунт?</p>
        </div>
    );
}
