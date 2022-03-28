import { useContext, useEffect, useRef, useState } from 'react';
import './ProductImages.scss';
import arrBottom from './../../img/product-images/next-bottom.svg';
import arrTop from './../../img/product-images/prev-top.svg';
import { ModalContext } from '../../context/ModalContext';

interface Props {
    className?: string;
    images: string[];
}

export function ProductImages({ className, images }: Props) {
    const [curImage, setCurImage] = useState(images[0]);
    const [countNextImg, setCountNextImg] = useState(0);

    const context: any = useContext(ModalContext);

    const itemsContainer: any = useRef();
    const prevBtn: any = useRef();
    const nextBtn: any = useRef();

    useEffect(() => {
        itemsContainer.current.style.marginTop = '-' + 100 * countNextImg + 'px';

        // Prev button
        if (countNextImg == 0)
            prevBtn.current.classList.add('product-images__btn_disabled');
        else
            prevBtn.current.classList.remove('product-images__btn_disabled');

        // Next button
        if (countNextImg + 5 == images.length)
            nextBtn.current.classList.add('product-images__btn_disabled');
        else
            nextBtn.current.classList.remove('product-images__btn_disabled');
    }, [countNextImg]);


    const showNext = () => {
        if (countNextImg + 5 < images.length)
            setCountNextImg(prev => prev + 1);
    };

    return (
        <div className={`product-images ${className ? className : ''}`}>
            <button ref={prevBtn} onClick={() => setCountNextImg(prev => prev - 1)} className='product-images__btn product-images__prev'>
                <img src={arrTop} alt="" />
            </button>
            <div className="product-images__items">
                <div ref={itemsContainer} className="product-images__items-container">
                    {images.map((item, index) =>
                        <div key={index} onClick={() => setCurImage(images[index])} className="product-images__items-wrapper">
                            <img src={'./.' + item} alt='' />
                        </div>
                    )}
                </div>
            </div>
            <button ref={nextBtn} onClick={showNext} className='product-images__btn product-images__next'>
                <img src={arrBottom} alt="" />
            </button>
            <div onClick={() => context.setOpened(curImage)} className="product-images__show-item">
                <img src={'./.' + curImage} />
            </div>
        </div>
    );
}
