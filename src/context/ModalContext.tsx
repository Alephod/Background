import React, { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode;
}

export const ModalContext: any = React.createContext<Partial<any>>({});

export function ModalProvider(props: Props) {
    const [isActive, setIsActive] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const setClosed = () => setIsActive(false);
    const setOpened = (imageUrl: string, ) => {
        setCurrentImage(imageUrl);
        setIsActive(true);
    };
    return (
        <ModalContext.Provider value={{
            isActive: isActive,
            setOpened: setOpened,
            setClosed: setClosed,
            currentImage: currentImage,
        }}>
            {props.children}
        </ModalContext.Provider>
    );
}
