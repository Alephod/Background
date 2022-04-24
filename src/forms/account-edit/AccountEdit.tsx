import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { DropDown } from '../../components/drop-down/DropDown';
import { Input } from '../../components/input/Input';
import { UserContext } from '../../context/UserContext';
import { INewUser } from '../register/Register';
import './AccountEdit.scss';

interface Props {
    className?: string;
}

export function AccountEdit({ className }: Props) {
    const userContext: any = useContext(UserContext);
    const user: any = JSON.parse(localStorage.getItem('user') as string).userInfo;
    const users: any = JSON.parse(localStorage.getItem('users') as string);
    const curUserFull: any = users.filter((item: any) => item.userInfo.id == user.id)[0];

    console.log(user);


    const name: any = useRef();
    const lastname: any = useRef();
    const email: any = useRef();
    const phone: any = useRef();
    const password: any = useRef();
    const passwordConfirm: any = useRef();
    const passwordOld: any = useRef();
    const [gender, setGender] = useState(user.gender);
    const [date, setDate] = useState(user.birthday);
    const [isGetNews, setIsGetNews] = useState(user.isGetNews);

    useEffect(() => {
        name.current.value = user.name;
        lastname.current.value = user.lastname;
        email.current.value = user.email;
        phone.current.value = user.phone;
    }, [userContext, name.current]);

    const saveInfo = () => {
        const newUserInfo: INewUser = {
            email: email.current.value,
            password: password.current.value ? password.current.value : curUserFull.password,
            userInfo: {
                id: user.id,
                name: name.current.value,
                lastname: lastname.current.value,
                email: email.current.value,
                phone: phone.current.value,
                gender: gender,
                birthday: date,
                isGetNews: isGetNews,
            },
            cart: userContext.cart,
            address: userContext.address
        };
        userContext.editUser(newUserInfo);
    };

    return (
        <div className={`account-edit ${className ? className : ''}`}>
            <h1 className='account-page__title'>Профиль</h1>
            <div className="account-edit__data account-edit__section">
                <h2 className="account-page__sect-title">Мои данные</h2>
                <Input _ref={name} className='account-edit__input' isRequired title={'Имя'} type={'text'} />
                <Input _ref={lastname} className='account-edit__input' isRequired title={'Фамилия'} type={'text'} />
                <Input _ref={email} className='account-edit__input' isRequired title={'Email'} type={'text'} />
                <Input _ref={phone} className='account-edit__input' isRequired title={'Номер телефона'} type={'phone'} />
                <DropDown onChange={setGender} title='Пол' placeholder={user.gender ? user.gender : 'Не выбран'} items={['Не выбран', 'Мужской', 'Женский']} />
                <Input selected={date} onChange={setDate} title={'Дата рождения'} type={'date'} />
            </div>
            <div className="account-edit__password account-edit__section">
                <h2 className="account-page__sect-title">Сменить пароль</h2>
                <div className="account-edit__old-password">
                    <Input _ref={passwordOld} className='account-edit__input' isRequired title={'Текущий пароль'} type={'text'} />
                    <Link to={'/auth/forgot-password'} className="account-edit__link">Не помните пароль?</Link>
                </div>
                <Input _ref={password} className='account-edit__input' isRequired title={'Новый пароль'} type={'text'} />
                <Input _ref={passwordConfirm} className='account-edit__input' isRequired title={'Повторите пароль'} type={'text'} />
            </div>
            <div className="account-edit__newsletter account-edit__section">
                <h2 className="account-page__sect-title">Рассылка</h2>
                <Checkbox isChecked={user.isGetNews} getValue={setIsGetNews} title={'Подписка на рассылку новостей'} />
            </div>
            <Button onClick={saveInfo} className='account-edit__btn' isCapitalize title={'Сохранить изменения'} />
        </div>
    );
}
