const initialState = [];

export default function moviesByCategoryReducer(state = initialState, action) {
    if (action.type === 'LOAD_MOVIES_BY_CATEGORY') {
        return action.payload;
    } else {
        return state;
    }
}