import { useRef } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { ModalShowImage } from './components/modal-show-image/ModalShowImage';
import { MainPage } from './pages/main-page/MainPage';
import { ProductPage } from './pages/product-page/ProductPage';


export default function App({ context }: any) {
    const body: any = useRef();
    return (
        <div ref={body} className="body">
            <Header />
            <Switch>
                <Route exact path="/">
                    <MainPage body={body} />
                </Route>
                <Route path="/man">
                    {/* <Slider className='slider__main-page' sliderAnimTime={800} sliderInterval={10000} images={sliderPagesResponse}/> */}

                </Route>
                <Route path="/product/:id">
                    <ProductPage />
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
            <ModalShowImage image={context.currentImage} isActive={context.isActive} />
        </div >
    );
}
