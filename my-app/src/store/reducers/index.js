import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import popularVideoReducer from './popularVideoReducer';
import assetDetailReducer from './assetDetailReducer';
import moviesByCategoryReducer from './moviesByCategoryReducer';
import trailersReducer from './trailersReducer';

import {routerReducer} from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    categoryReducer,
    assetDetailReducer,
    popularVideoReducer,
    moviesByCategoryReducer,
    trailersReducer
});