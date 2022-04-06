import React, { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode;
}

export const AuthContext: any = React.createContext<Partial<any>>({});

export function AuthProvider(props: Props) {
    const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('user')));
    const setLogin: Function = () => {
        setIsAuth(true);
        localStorage.setItem('user', 'true');
    };
    const setLogout: Function = () => {
        setIsAuth(false);
        localStorage.setItem('user', 'false');
    };
    return (
        <AuthContext.Provider value={{
            isAuth: isAuth,
            setLogin: setLogin,
            setLogout: setLogout
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}
