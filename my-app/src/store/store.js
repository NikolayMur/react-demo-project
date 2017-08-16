import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

const store = createStore((state = [], action) => {
    if (action.type === 'ADD_TRACK') {
        return [...state, action.payload];
    }
    return state;
});

const history = syncHistoryWithStore(browserHistory, store);

export default store;

export default history;