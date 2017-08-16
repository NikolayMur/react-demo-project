const initialState = [];

export default function popularVideoReducer(state = initialState, action) {
    if (action.type === 'LOAD_POPULAR_VIDEO') {
        return action.payload;
    } else {
        return state;
    }
}