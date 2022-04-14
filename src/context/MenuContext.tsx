import React, { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode;
}

export const MenuContext: any = React.createContext<Partial<any>>({});

export function MenuProvider(props: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const setOpened = () => setIsMenuOpen(true);
    const setClosed = () => setIsMenuOpen(false);
    return (
        <MenuContext.Provider value={{
            isMenuOpen: isMenuOpen,
            setOpened: setOpened,
            setClosed: setClosed
        }}>
            {props.children}
        </MenuContext.Provider>
    );
}
