import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Header } from './components/header/Header';
import { Slider } from './components/slider/Slider';
import { Title } from './components/title/Title';
import { Products } from './forms/products/Products';

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
                    <Slider sliderAnimTime={800} sliderInterval={10000}/>
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
                    <Slider sliderAnimTime={800} sliderInterval={10000}/>

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
