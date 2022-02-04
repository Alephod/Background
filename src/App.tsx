import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Header } from './components/header/Header';
import { Slider } from './components/slider/Slider';
import { Title } from './components/title/Title';
import { Products } from './forms/products/Products';


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

export default function App() {
    return (
        <div className="body" style={
            {
                background: 'url("./img/bg.png") no-repeat 100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
        }>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Slider className='slider__main-page' sliderAnimTime={800} sliderInterval={10000} images={sliderPagesResponse}/>
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
                    <Products />
                </Route>
                <Route path="/man">
                    <Slider className='slider__main-page' sliderAnimTime={800} sliderInterval={10000} images={sliderPagesResponse}/>

                </Route>
                <Route path="/product">
                    <div className="product">
                        <h1>Ваш товар</h1>
                    </div>
                </Route>

                <Redirect to="/error" />
            </Switch>

        </div >
    );
}
