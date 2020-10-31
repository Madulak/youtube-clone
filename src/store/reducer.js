import { AUTH, PROGRESS } from "./actions";

const initialState = {
    user: {},
    progress: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AUTH:
            return {
                ...state,
                user: action.user,
            }
        case PROGRESS:
            return {
                ...state,
                progress: action.progress
            }
        
        default: 
            return state;
    }
}

export default reducer;