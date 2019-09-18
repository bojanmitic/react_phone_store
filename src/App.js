import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Modal from './components/Modal';

const supportsHistory = 'pushState' in window.history;

function App() {
  return (
  <BrowserRouter forceRefresh={!supportsHistory}>
    <Navbar />
    <Route render={({location}) => {
      const { pathname } = location;
      return (
        <TransitionGroup component={null}>
            <CSSTransition
              key={pathname}
              classNames="page"
              timeout={{
                enter: 1000,
                exit: 1000,
              }}
            >
                <Switch location={location}>
                  <Route exact path="/" component={ProductList}/>
                  <Route path="/details" component={Details} />
                  <Route path="/cart" component={Cart} />
                  <Route  component={ Default } />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
      )}}
    />
    <Modal />
  </BrowserRouter>
  );
}

export default App;