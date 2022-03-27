import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { MainPage } from './pages/main-page/MainPage';


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
                    <MainPage />
                </Route>
                <Route path="/man">
                    {/* <Slider className='slider__main-page' sliderAnimTime={800} sliderInterval={10000} images={sliderPagesResponse}/> */}

                </Route>
                <Route path="/product">
                    <div className="product">
                        <h1>Ваш товар</h1>
                    </div>
                </Route>
                <Route path="/collection/:id">
                    <div className="product">
                        <h1>коллекция</h1>
                    </div>
                </Route>
                <Route path="/review/background">
                    <div className="product">
                        <h1>Отзывы о Background</h1>
                    </div>
                </Route>
                <Redirect to="/error" />
            </Switch>
            <Footer />
        </div >
    );
}
