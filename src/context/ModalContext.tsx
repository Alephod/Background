import React, { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode;
}

export const ModalContext: any = React.createContext<Partial<any>>({});

export function ModalProvider(props: Props) {
    const [isActive, setIsActive] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [mode, setMode] = useState('');
    const [children, setChildren] = useState('');

    const setClosed = () => setIsActive(false);
    const setOpened = (imageUrl: string, ) => {
        setCurrentImage(imageUrl);
        setIsActive(true);
    };
    return (
        <ModalContext.Provider value={{
            isActive: isActive,
            mode: mode,
            currentImage: currentImage,
            children: children,
            setOpened: setOpened,
            setClosed: setClosed,
            setMode: setMode,
            setChildren: setChildren
        }}>
            {props.children}
        </ModalContext.Provider>
    );
}
