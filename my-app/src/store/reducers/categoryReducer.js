import {categoriesDownloadActionTypes} from '../../Constants';

const initialState = [];

export default function categoryReducer(state = initialState, action) {

    switch (action.type) {
        case categoriesDownloadActionTypes.get:
            //to do smth
            return state;
            break;
        case categoriesDownloadActionTypes.received:
            return action.payload;
            break;
        case categoriesDownloadActionTypes.error:
            //to do smth
            return state;
            break;
        default:
            return state;
    }
}