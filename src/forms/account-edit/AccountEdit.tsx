import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { DropDown } from '../../components/drop-down/DropDown';
import { Input } from '../../components/input/Input';
import './AccountEdit.scss';

interface Props {
    className?: string;
}

export function AccountEdit({ className }: Props) {
    return (
        <div className={`account-edit ${className ? className : ''}`}>
            <h1 className='account-page__title'>Профиль</h1>
            <div className="account-edit__data account-edit__section">
                <h2 className="account-page__sect-title">Мои данные</h2>
                <Input className='account-edit__input' isRequired title={'Имя'} type={'text'} />
                <Input className='account-edit__input' isRequired title={'Фамилия'} type={'text'} />
                <Input className='account-edit__input' isRequired title={'Email'} type={'text'} />
                <Input className='account-edit__input' isRequired title={'Номер телефона'} type={'text'} />
                <DropDown title='Пол' placeholder={'Не выбран'} items={['Не выбран', 'Мужской', 'Женский']} />
                <Input title={'Дата рождения'} type={'date'} />
            </div>
            <div className="account-edit__password account-edit__section">
                <h2 className="account-page__sect-title">Сменить пароль</h2>
                <div className="account-edit__old-password">
                    <Input className='account-edit__input' isRequired title={'Текущий пароль'} type={'text'} />
                    <Link to={'/auth/forgot-password'} className="account-edit__link">Не помните пароль?</Link>
                </div>
                <Input className='account-edit__input' isRequired title={'Новый пароль'} type={'text'} />
                <Input className='account-edit__input' isRequired title={'Повторите пароль'} type={'text'} />
            </div>
            <div className="account-edit__newsletter account-edit__section">
                <h2 className="account-page__sect-title">Рассылка</h2>
                <Checkbox title={'Подписка на рассылку новостей'} />
            </div>
            <Button className='account-edit__btn' isCapitalize title={'Сохранить изменения'} />
        </div>
    );
}
