import {popularVideoDownloadActionTypes} from '../../Constants';

const initialState = [];

export default function popularVideoReducer(state = initialState, action) {

    switch (action.type) {
        case popularVideoDownloadActionTypes.get:
            //to do smth
            return state;
        case popularVideoDownloadActionTypes.received:
            return action.payload;
        case popularVideoDownloadActionTypes.error:
            //to do smth
            return state;
        default:
            return state;
    }
}