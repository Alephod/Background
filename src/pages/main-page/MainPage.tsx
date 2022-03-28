import './MainPage.scss';
import { Title } from './../../components/title/Title';
import { PromoProducts } from '../../forms/promo-products/PromoProducts';
import { Slider } from '../../components/slider/Slider';
import { Feedback } from '../../forms/feedback/Feedback';

const sliderPagesResponse: Array<any> = [
    { id: 0, href: './img/slider/1.jpg' },
    { id: 1, href: './img/slider/2.png' },
    { id: 2, href: './img/slider/3.jpg' },
    { id: 3, href: './img/slider/3.jpg' },
    { id: 4, href: './img/slider/3.jpg' },
    { id: 5, href: './img/slider/3.jpg' },
    { id: 6, href: './img/slider/3.jpg' },
    { id: 7, href: './img/slider/4.jpg' }
];

export function MainPage() {
    return (
        <div className='main-page'>
            <Slider className='slider__main-page slider_pt' sliderAnimTime={800} sliderInterval={10000} images={sliderPagesResponse} />
            <div className="info container">
                <img className="info__img" src="./img/info/info-img.png" alt="" />
                <div className="info__desc">
                    <Title title="СТИЛЬ ЭСТЕТИКИ" className="info__title" />
                    <div className="info__text">
                        <p>
                            Состоит из дальновидных художников и провидцев с непринужденным процессом проектирования,
                            основанным на настроении, чувствах и энергии.
                        </p>
                        <p>
                            Мы создаем постоянно меняющийся ассортимент одежды и аксессуаров с целью дать вам уверенность в том, чтобы выразить свою индивидуальность.
                        </p>
                    </div>
                </div>
            </div>
            <PromoProducts />
            <Feedback />
        </div>
    );
}
