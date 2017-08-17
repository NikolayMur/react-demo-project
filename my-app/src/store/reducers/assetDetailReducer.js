import {assetDetailDownloadActionTypes} from '../../Constants';

const initialState = {};

export default function assetDetailReducer(state = initialState, action) {

    switch (action.type) {
        case assetDetailDownloadActionTypes.get:
            //to do smth
            return state;
        case assetDetailDownloadActionTypes.received:
            return action.payload;
        case assetDetailDownloadActionTypes.error:
            //to do smth
            return state;
        default:
            return state;
    }
}