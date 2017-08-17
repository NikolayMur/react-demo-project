import {moviesByCategoryDownloadActionTypes} from '../../Constants';

const initialState = [];

export default function moviesByCategoryReducer(state = initialState, action) {

    switch (action.type) {
        case moviesByCategoryDownloadActionTypes.get:
            //to do smth
            return state;
            break;
        case moviesByCategoryDownloadActionTypes.received:
            return action.payload;
            break;
        case moviesByCategoryDownloadActionTypes.error:
            //to do smth
            return state;
            break;
        default:
            return state;
    }
}