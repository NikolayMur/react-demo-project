const initialState = [];

export default function trailersReducer(state = initialState, action) {
    if (action.type === 'LOAD_TRAILERS') {
        return action.payload;
    } else {
        return state;
    }
}