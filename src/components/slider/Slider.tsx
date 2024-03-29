import { MutableRefObject, useEffect, useRef, useState } from 'react';
import './Slider.scss';

interface SliderImage {
    id: number;
    href: string;
}

interface Props {
    className?: string;
    /**
     * Интервал между самостоятельным перелистыванием страницы
     */
    sliderInterval: number;
    /**
     * Время за которое перелистнется страницы
     */
    sliderAnimTime: number;
    /**
     * Массив изображений
     */
    images: Array<SliderImage>;
}

export function Slider({ sliderInterval = 10000, sliderAnimTime = 800, ...props }: Props) {
    let isPitchedLocal: boolean;
    let imagesBuffer: Array<any> = props.images ? [props.images[props.images.length - 1], ...props.images] : [];

    const canNext: MutableRefObject<any> = useRef(true);
    const slider: MutableRefObject<any> = useRef();
    const sliderImages: MutableRefObject<any> = useRef();
    const sliderTouchContainer: MutableRefObject<any> = useRef();

    const [curId, setCurId] = useState(0);
    const [isAnimate, setIsAnimate] = useState(false);
    const [images, setImages] = useState(imagesBuffer);
    const [isPitched, setIsPitched] = useState(false);
    const [xPitchedPos, setXPitchedPos] = useState(0);
    const [xLastPos, setXLastPos] = useState(0);

    useEffect(() => {
        sliderImages.current.style.transform = 'translateX(0%)';
    }, [images]);

    useEffect(() => {
        // Настройка событий, в зависимости от устройства
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            sliderTouchContainer.current.addEventListener('touchmove', (e: any) => {
                e.stopPropagation();
                let bounds: any = slider.current.getBoundingClientRect();
                let x: number = e.targetTouches[0].clientX - bounds.left;
                isPitchedLocal && setXLastPos(x);

                sliderTouchContainer.current.ontouchstart = (e: any) => {
                    let bounds: any = e.target.getBoundingClientRect();
                    let x: number = e.targetTouches[0].clientX - bounds.left;
                    setXPitchedPos(x + 70);
                    isPitchedLocal = true;
                    setIsPitched(true);
                };
                sliderTouchContainer.current.ontouchend = () => {
                    isPitchedLocal = false;
                    setIsPitched(false);
                    canNext.current = true;
                };
                sliderTouchContainer.current.ontouchcancel = () => {
                    isPitchedLocal = false;
                    setIsPitched(false);
                    canNext.current = true;
                };
            });
        } else {
            sliderTouchContainer.current.addEventListener('mousemove', (e: any) => {
                e.stopPropagation();
                let bounds: any = slider.current.getBoundingClientRect();
                let x: number = e.clientX - bounds.left;
                isPitchedLocal && setXLastPos(x);

                sliderTouchContainer.current.onmousedown = (e: any) => {
                    let bounds: any = e.target.getBoundingClientRect();
                    let x: number = e.clientX - bounds.left;
                    setXPitchedPos(x + 70);
                    isPitchedLocal = true;
                    setIsPitched(true);
                };
                sliderTouchContainer.current.onmouseup = () => {
                    isPitchedLocal = false;
                    canNext.current = true;
                    setIsPitched(false);
                };
                sliderTouchContainer.current.onmouseleave = () => {
                    isPitchedLocal = false;
                    canNext.current = true;
                    setIsPitched(false);
                };
            });
        }
    }, []);

    useEffect(() => {
        if (xLastPos != 0 && !isAnimate) {
            sliderImages.current.style.transform = `translateX(calc(0% + ${-(xPitchedPos - xLastPos)}px))`;
            canNext.current = false;
        }
    }, [xPitchedPos, xLastPos, isAnimate]);

    useEffect(() => {
        if (!isPitched) {
            if ((xPitchedPos - xLastPos) > 50) {
                setIsPitched(true);
                NextImg();
            } else if ((xPitchedPos - xLastPos) < -50) {
                setIsPitched(true);
                PrevImg();
            } else {
                setIsAnimate(true);
                sliderImages.current.style.transform = 'translateX(0%)';
                setTimeout(() => {
                    setIsAnimate(false);
                }, sliderAnimTime);
            }
            setXLastPos(0);
            setXPitchedPos(0);
        }
    }, [isPitched]);


    function NextImg() {
        setIsAnimate(true);
        canNext.current = false;
        sliderImages.current.style.transform = 'translateX(-100%)';
        setCurId(prev => {
            if (prev >= images.length - 2) return 0;
            else return prev + 1;
        });
        setTimeout(() => {
            setImages(prev => [...prev.slice(1), prev[1]]);
            setIsAnimate(false);
            canNext.current = true;
        }, sliderAnimTime);
        setIsPitched(false);
    }
    function PrevImg() {
        setIsAnimate(true);
        canNext.current = false;
        sliderImages.current.style.transform = 'translateX(100%)';
        setCurId(prev => {
            if (prev == 0) return images.length - 2;
            else return prev - 1;
        });
        setTimeout(() => {
            setImages(prev => [prev[prev.length - 2], ...prev.slice(0, prev.length - 1)]);
            setIsAnimate(false);
            canNext.current = true;
        }, sliderAnimTime);
        setIsPitched(false);
    }
    function GetOnSlide(pageId: number) {
        pageId = Number(pageId);
        let translate: number = 0;
        switch (curId) {
            case 0:
                if (curId != pageId)
                    translate = pageId * 100;
                break;
            case images.length - 2:
                if (curId != pageId)
                    translate = (pageId + 1) * 100;
                break;
            default:
                if ((pageId - curId) * 100 > 0)
                    translate = (pageId - curId) * 100;
                else if (curId != pageId)
                    translate = (images.length - 2 - curId + pageId + 1) * 100;
                break;
        }
        if (curId != pageId) {
            setIsAnimate(true);
            canNext.current = false;
            sliderImages.current.style.transform = `translateX(-${translate}%)`;
            setCurId(pageId);
            setTimeout(() => {
                setImages(prev => {
                    let arr: Array<any> = Array.from(new Set(prev)).sort((a, b) => a.id > b.id ? 1 : -1);
                    return [...arr.slice(pageId - 1), ...arr.slice(0, pageId - 1), pageId > 0 ? arr[pageId - 1] : arr[arr.length - 1]];
                });
                setIsAnimate(false);
                canNext.current = true;
            }, sliderAnimTime);
        }
    }
    window.onload = () => {
        setInterval(() => {
            sliderImages.current && canNext.current && NextImg();
        }, sliderInterval);
    };

    return (
        <div ref={slider} className={`slider ${props.className}`}>
            <div className="slider__body">
                <div className="slider__controls">
                    <button className="slider__prev" onClick={() => !isAnimate && PrevImg()}>
                        <img src="img/slider/controls/prev.svg" alt="" />
                    </button>
                    <div ref={sliderTouchContainer} className="slider__touch-container">

                    </div>
                    <div className="slider__pages">
                        {props.images.map((item, index) =>
                            <div
                                data-page={index}
                                className={`slider__pages-item ${item.id === curId ? 'slider__pages-item_active' : ''}`}
                                key={item.id}
                                onClick={(e: any) => !isAnimate && GetOnSlide(e.currentTarget.dataset.page)}
                            >
                                <div></div>
                            </div>
                        )}
                    </div>
                    <button className="slider__next" onClick={() => !isAnimate && NextImg()}>
                        <img src="img/slider/controls/next.svg" alt="" />
                    </button>
                </div>
                <div className="slider__images-container">
                    <div ref={sliderImages} className="slider__images" style={isAnimate ? { transition: `${sliderAnimTime}ms` } : { transition: '0ms' }}>
                        {images.map((item, index) =>
                            <div className="slider__item" key={index === 0 ? `${item.id}-prev` : item.id}>
                                <img src={item.href ? item.href : ''} alt="" />
                            </div>)}
                    </div>
                </div>
            </div >
        </div>
    );
}
