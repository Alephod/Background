import { useContext, useEffect } from 'react';
import { ModalContext } from '../../context/ModalContext';
import './ModalShowImage.scss';

interface Props {
    image: string;
    isActive: boolean;
}

export function ModalShowImage({ image, isActive }: Props) {
    const context: any = useContext(ModalContext);

    useEffect(() => {
        if (isActive)
            document.body.style.overflowY = 'hidden';
        else
            document.body.style.overflowY = 'auto';
    }, [isActive]);

    return (
        <div className={`modal-show-image ${isActive ? 'modal-show-image_active' : ''}`}>
            <img src={image} alt='' />
            <div onClick={context.setClosed} className="modal-show-image__close-btn">
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
