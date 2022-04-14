import { useLocation, useParams } from 'react-router';
import { parse } from 'qs';
import './AccountPage.scss';
import { AccountPageMenu } from '../../components/account-page-menu/AccountPageMenu';
import { useEffect, useState } from 'react';
import { AccountEdit } from '../../forms/account-edit/AccountEdit';
import { AccountCart } from '../../forms/account-cart/AccountCart';
import { AccountAddress } from '../../forms/account-address/AccountAddress';

export function AccountPage() {
    const params: any = useParams();
    const query: any = parse(useLocation().search.slice(1));
    const [mode, setMode] = useState(query.mode);

    useEffect(() => {
        document.title = 'Аккаунт';
        document.documentElement.scrollTop = 0;
    }, []);

    useEffect(() => {
        setMode(query.mode);
    }, [query]);

    useEffect(() => {
        switch (mode) {
            case 'account':
                document.title = 'Профиль';
                break;
            case 'address':
                document.title = 'Список адресов';
                break;
            case 'cart':
                document.title = 'Корзина';
                break;
            default:
                break;
        }
    }, [mode]);


    return (
        <div className="account-page container">
            <AccountPageMenu id={params.id} mode={mode} setMode={setMode} />
            <div className="account-page__container">
                {query.mode == 'account' && <AccountEdit />}
                {query.mode == 'address' && <AccountAddress />}
                {query.mode == 'cart' && <AccountCart />}
            </div>
        </div>
    );
}
