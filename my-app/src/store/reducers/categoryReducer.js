import {categoriesDownloadActionTypes} from '../../Constants';

const initialState = [];

export default function categoryReducer(state = initialState, action) {

    switch (action.type) {
        case categoriesDownloadActionTypes.get:
            //to do smth
            return state;
        case categoriesDownloadActionTypes.received:
            return action.payload;
        case categoriesDownloadActionTypes.error:
            //to do smth
            return state;
        default:
            return state;
    }
}