import { useContext, useEffect } from 'react';
import { ModalContext } from '../../context/ModalContext';
import './Modal.scss';

interface Props {
    className?: string;
}

export function Modal({ className }: Props) {
    const context: any = useContext(ModalContext);

    useEffect(() => {
        if (context.isActive)
            document.documentElement.style.overflowY = 'hidden';
        else
            document.documentElement.style.overflowY = 'auto';
    }, [context.isActive]);

    return (
        <div className={`modal ${context.mode == 'image' ? 'modal_image' : ''} ${className ? className : ''} ${context.isActive ? 'modal_active' : ''} `}>
            <div onClick={context.setClosed} className="modal__bg"></div>
            <div className="modal__container">
                {context.children}
                <div onClick={context.setClosed} className="modal__close-btn">
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>
    );
}
