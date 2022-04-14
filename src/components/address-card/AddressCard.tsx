import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { IAddress } from '../../forms/account-address/AccountAddress';
import './AddressCard.scss';

interface Props {
    item: IAddress;
    index: number;
}

export function AddressCard({ item, index }: Props) {
    const userContext: any = useContext(UserContext);

    return (
        <div className="address-card">
            <p className="address-card__title">{item.address[1] + ' ' + item.address[2]}</p>
            <div className="address-card__items-wrapper">
                <p className="address-card__item"><span>Имя: </span>{item.name + ' ' + item.lastname}</p>
                <p className="address-card__item"><span>Адрес: </span>{item.address.map((item: string) => item + ' ')}</p>
                <p className="address-card__item"><span>Почтовый индекс: </span>{item.postcode}</p>
                <p className="address-card__item"><span>Телефон: </span>{item.phone}</p>
                {item.extraInfo && <p className="address-card__item"><span>Дополнительная информация: </span>{item.extraInfo}</p>}
            </div>
            <div className="address-card__btns">
                <p onClick={() => userContext.removeAddress(index)} className="address-card__btn">Удалить</p>
            </div>
        </div>
    );
}
