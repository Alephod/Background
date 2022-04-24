import { useContext, useRef } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Modal } from './components/modal/Modal';
import { ModalContext } from './context/ModalContext';
import { UserContext } from './context/UserContext';
import { AccountPage } from './pages/account-page/AccountPage';
import { AuthPage } from './pages/auth-page/AuthPage';
import { MainPage } from './pages/main-page/MainPage';
import { ProductPage } from './pages/product-page/ProductPage';


export default function App(props: any) {
    const modalContext: any = useContext(ModalContext);
    const userContext: any = useContext(UserContext);
    const body: any = useRef();

    return (
        <div ref={body} className="body">
            <Header />
            <Switch>
                <Route key={'main'} exact path="/">
                    <MainPage body={body} />
                </Route>
                <Route key={'man'} path="/man">
                </Route>
                <Route key={'product-page'} path="/product/:id">
                    <ProductPage />
                </Route>
                <Route key={'collection'} path="/collection/:id">
                    <div className="product">
                        <h1>коллекция</h1>
                    </div>
                </Route>
                <Route key={'review'} path="/review/background">
                    <div className="product">
                        <h1>Отзывы о Background</h1>
                    </div>
                </Route>
                <Route key={'auth-forgot-password'} path="/auth/forgot-password">
                    <div className="product">
                        <h1>Восстановление пароля</h1>
                    </div>
                </Route>
                {userContext.isAuth && <Route key={'account'} path="/user/:id">
                    <AccountPage />
                </Route>}
                <Route key={'auth'} path="/auth">
                    <AuthPage />
                </Route>
                <Route key={'rules'} path="/rules/:id">
                </Route>

                <Redirect to="/error" />
            </Switch>
            <Footer />
            <Modal />
        </div >
    );
}
