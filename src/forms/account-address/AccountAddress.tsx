import { ReactNode, useContext, useEffect, useRef } from 'react';
import { AddressCard } from '../../components/address-card/AddressCard';
import { Button } from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import { ModalContext } from '../../context/ModalContext';
import { UserContext } from '../../context/UserContext';
import './AccountAddress.scss';

interface Props {
    className?: string;
}

export interface IAddress {
    name: string;
    lastname: string;
    phone: string;
    address: string[];
    postcode: string;
    extraInfo: string;
}

export function AccountAddress({ className }: Props) {
    const userContext: any = useContext(UserContext);
    const modalContext: any = useContext(ModalContext);

    const name: any = useRef();
    const lastname: any = useRef();
    const phone: any = useRef();
    const address: any = useRef();
    const postcode: any = useRef();
    const extraInfo: any = useRef();

    const modal: ReactNode = <div className='modal-add-address'>
        <Input _ref={name} title={'Имя'} type={'text'} isRequired />
        <Input _ref={lastname} title={'Фамилия'} type={'text'} isRequired />
        <Input _ref={phone} className='modal-add-address__input_phone' title={'Номер телефона'} type={'number'} isRequired />
        <Input _ref={address} className='modal-add-address__input_address' title={'Ваш адрес'} type={'text'} isRequired placeholder="г. Москва, ул. Комсомольская, д. 54, кв. 40" />
        <Input _ref={postcode} title={'Почтовый индекс'} type={'number'} isRequired />
        <Input _ref={extraInfo} className='modal-add-address__input_extra' title={'Дополнительная информация'} type={'text'} />
        <Button onClick={addAddress} className='modal-add-address__input_btn' title={'Сохранить'} isCapitalize />
    </div>;

    useEffect(() => {
        if (!modalContext.isActive && name.current) {
            modalContext.setChildren(null);
        }
        if (modalContext.isActive && name.current) {
            modalContext.setChildren(modal);
        }
    }, [modalContext.isActive]);

    const openModal = () => {
        modalContext.setMode('');
        modalContext.setChildren(modal);
        modalContext.setOpened();
    };
    function addAddress() {
        const newAddress: IAddress = {
            name: name.current.value,
            lastname: lastname.current.value,
            phone: phone.current.value,
            address: address.current.value.split(', '),
            postcode: postcode.current.value,
            extraInfo: extraInfo.current.value,
        };

        userContext.addAddress(newAddress);
        modalContext.setClosed();
    }

    return (
        <div className={`account-address ${className ? className : ''}`}>
            <h1 onClick={() => name.current.value = 'sadasd'} className='account-page__title'>Список адресов</h1>
            {userContext.address && userContext.address.map((item: any, index: number) => <AddressCard item={item} index={index} key={index} />)}
            {userContext.address.length == 0 && <p className="account-address__no-address">У вас ещё нет сохраненых адресов</p>}

            <Button className='account-address__btn' onClick={openModal} isCapitalize title={'Добавить адрес'} />
        </div>
    );
}
