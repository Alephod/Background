import { useContext, useEffect, useRef, useState } from 'react';
import './ProductImages.scss';
import arrBottom from './../../img/product-images/next-bottom.svg';
import arrTop from './../../img/product-images/prev-top.svg';
import { ModalContext } from '../../context/ModalContext';

interface Props {
    className?: string;
    images: string[];
    mobileWidth?: number;
}

export function ProductImages({ className, images }: Props) {
    const [curImage, setCurImage] = useState(images[0]);
    const [countNextImg, setCountNextImg] = useState(0);
    const [activeImg, setActiveImg] = useState(0);

    const context: any = useContext(ModalContext);

    const itemsContainer: any = useRef();
    const itemsWrapper: any = useRef();
    const prevBtn: any = useRef();
    const nextBtn: any = useRef();

    const giveClassNameToProductImages = () => {
        if (parseFloat(window.getComputedStyle(itemsContainer.current).width.slice(0, -2)) + 35 > document.documentElement.clientWidth)
            itemsWrapper.current.classList.add('product-images__wrapper_out');
        else
            itemsWrapper.current.classList.remove('product-images__wrapper_out');
    };

    useEffect(() => {
        giveClassNameToProductImages();
        window.onresize = giveClassNameToProductImages;
    }, []);


    useEffect(() => {
        if (document.documentElement.clientWidth > 900)
            itemsContainer.current.style.marginTop = '-' + 100 * countNextImg + 'px';

        if (document.documentElement.clientWidth > 900) {
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
        }
    }, [countNextImg]);

    const setImage = (index: number) => {
        setCurImage(images[index]);
        setActiveImg(index);
    };

    return (
        <div className={`product-images ${className ? className : ''}`}>

            <div className="product-images__items">
                <button ref={prevBtn} onClick={() => setCountNextImg(prev => prev - 1)} className='product-images__btn product-images__prev'>
                    <img src={arrTop} alt="" />
                </button>
                <div ref={itemsWrapper} className="product-images__wrapper">
                    <div ref={itemsContainer} className="product-images__items-container">
                        {images.map((item, index) =>
                            <div key={index} onClick={() => setImage(index)} className={`product-images__items-wrapper ${activeImg == index ? 'product-images__items-wrapper_active' : ''}`}>
                                <img src={item} alt='' />
                            </div>
                        )}
                    </div>
                </div>
                <button ref={nextBtn} onClick={() => setCountNextImg(prev => prev + 1)} className='product-images__btn product-images__next'>
                    <img src={arrBottom} alt="" />
                </button>
            </div>

            <div onClick={() => context.setOpened(curImage)} className="product-images__show-item">
                <img src={curImage} alt="" />
            </div>
        </div>
    );
}
