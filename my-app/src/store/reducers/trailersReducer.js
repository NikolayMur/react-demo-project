import {trailersDownloadActionTypes} from '../../Constants';

const initialState = [];

export default function trailersReducer(state = initialState, action) {

    switch (action.type) {
        case trailersDownloadActionTypes.get:
            //to do smth
            return state;
        case trailersDownloadActionTypes.received:
            return action.payload;
        case trailersDownloadActionTypes.error:
            //to do smth
            return state;
        default:
            return state;
    }
}