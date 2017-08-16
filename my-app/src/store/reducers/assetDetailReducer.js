const initialState = {};


export default function assetDetailReducer(state = initialState, action) {
    if (action.type === 'LOAD_ASSET_DETAIL') {
        return action.payload;
    }else {
        return state;
    }
}