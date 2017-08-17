import {popularVideoDownloadActionTypes} from '../../Constants';

const initialState = [];

export default function popularVideoReducer(state = initialState, action) {

    switch (action.type) {
        case popularVideoDownloadActionTypes.get:
            //to do smth
            return state;
            break;
        case popularVideoDownloadActionTypes.received:
            return action.payload;
            break;
        case popularVideoDownloadActionTypes.error:
            //to do smth
            return state;
            break;
        default:
            return state;
    }
}