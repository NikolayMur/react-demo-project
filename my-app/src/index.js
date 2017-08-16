import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import './index.css';
// import PropTypes from 'prop-types';

//import components
import Home from './components/Home';
import Categories from './components/Categories';
import MoviesByCategory from './components/MoviesByCategory';
import AssetDetails from './components/AssetDetails/AssetDetails';
import Popular from './components/Popular';
import NotFound from './components/NotFound';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './store/reducers';

import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

//global data for Menu
export let menuContent = [];
fetch(' http://online.smartsoft.ro:3333/api/static/menu')
    .then(results => results.json())
    .then(resultsJson => {
        if (resultsJson.data) {
            menuContent = resultsJson.data;
        }
    }).catch(err => {
    throw err;
});

render(<Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={Home}></Route>
            <Route path="/categories" component={Categories}></Route>
            <Route path="/movies/:category_id" component={MoviesByCategory}></Route>
            <Route path="/asset/:id" component={AssetDetails}></Route>
            <Route path="/popular" component={Popular}></Route>
            <Route path='*' component={NotFound}/>
        </Router>
    </Provider>,
    document.getElementById('root'))