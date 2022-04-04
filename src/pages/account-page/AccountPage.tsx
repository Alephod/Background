import { useLocation, useParams } from 'react-router';
import { parse } from 'qs';
import './AccountPage.scss';
import { AccountPageMenu } from '../../components/account-page-menu/AccountPageMenu';
import { useState } from 'react';

export function AccountPage() {
    const params: any = useParams();
    const query: any = parse(useLocation().search.slice(1));

    const [mode, setMode] = useState(parse(useLocation().search.slice(1)).mode as string);

    return (
        <div className="account-page">
            <AccountPageMenu id={params.id} mode={mode} setMode={setMode} />
            {query.mode == 'account' && <h1>Аккаунт</h1>}
            {query.mode == 'address' && <h1>Адрес</h1>}
            {query.mode == 'cart' && <h1>Корзина</h1>}
        </div>
    );
}
