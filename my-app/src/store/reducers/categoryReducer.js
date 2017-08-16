const initialState = [];

export default function categoryReducer(state = initialState, action) {
    if (action.type === 'LOAD_CATEGORIES') {
        return action.payload;
    } else {
        return state;
    }
}